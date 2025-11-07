"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", mobile: "", message: "" });
      } else {
        setError(data.error || "Failed to send message. Try again later.");
      }
    } catch (error: unknown) {
      function isErrorWithMessage(err: unknown): err is { message: string } {
        return (
          typeof err === 'object' &&
          err !== null &&
          'message' in err &&
          typeof (err as { message: unknown }).message === 'string'
        );
      }
      let message = "Failed to send message. Try again later.";
      if (isErrorWithMessage(error)) {
        message = error.message;
      }
      setError(message);
    }
    setSubmitting(false);
  };

  return (
    <div>
      {success ? (
        <div className="bg-green-600 text-white rounded-lg px-4 py-3 mb-4 text-center font-semibold">
          Thank you! Your message has been sent.
        </div>
      ) : null}
      {error && (
        <div className="bg-red-600 text-white rounded-lg px-4 py-3 mb-4 text-center font-semibold">
          {error}
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block font-medium mb-1 text-gray-200">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1 text-gray-200">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block font-medium mb-1 text-gray-200">Mobile <span className="text-xs text-gray-400">(use 00 instead of + for country code)</span></label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            required
            value={form.mobile}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            placeholder="e.g. 0064 21 245 8155"
          />
          <div className="text-xs text-gray-400 mt-1">Please enter your mobile number with country code, using 00 instead of + (e.g. 0064 21 245 8155)</div>
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1 text-gray-200">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
            placeholder="Type your message here..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
