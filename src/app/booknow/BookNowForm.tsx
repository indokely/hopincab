"use client";
import { useState } from "react";

export default function BookNowForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    transferType: "oneway",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function isErrorWithMessage(err: unknown): err is { message: string } {
    return (
      typeof err === 'object' &&
      err !== null &&
      'message' in err &&
      typeof (err as { message: unknown }).message === 'string'
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/booknow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          mobile: "",
          transferType: "oneway",
          pickupDate: "",
          pickupTime: "",
          pickupLocation: "",
          dropoffLocation: "",
          message: ""
        });
      } else {
        setError(data.error || "Failed to book. Try again later.");
      }
    } catch (error: unknown) {
      let message = "Failed to book. Try again later.";
      if (isErrorWithMessage(error)) {
        message = error.message;
      }
      setError(message);
    }
    setSubmitting(false);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {success && (
        <div className="bg-green-600 text-white rounded-lg px-4 py-3 mb-4 text-center font-semibold">
          Booking submitted! We will contact you soon.
        </div>
      )}
      {error && (
        <div className="bg-red-600 text-white rounded-lg px-4 py-3 mb-4 text-center font-semibold">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block font-medium mb-1 text-gray-200">Name</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium mb-1 text-gray-200">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
      </div>
      <div>
        <label htmlFor="mobile" className="block font-medium mb-1 text-gray-200">Mobile <span className="text-xs text-gray-400">(use 00 instead of + for country code)</span></label>
        <input id="mobile" name="mobile" type="text" required value={form.mobile} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="e.g. 0064 21 245 8155" />
        <div className="text-xs text-gray-400 mt-1">Please enter your mobile number with country code, using 00 instead of + (e.g. 0064 21 245 8155)</div>
      </div>
      <div className="flex gap-6 mb-2">
        <label className="flex items-center gap-2 cursor-pointer font-semibold text-orange-500">
          <input type="radio" name="transferType" value="oneway" checked={form.transferType === 'oneway'} onChange={handleChange} className="accent-orange-500" /> One Way
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-gray-300">
          <input type="radio" name="transferType" value="return" checked={form.transferType === 'return'} onChange={handleChange} className="accent-orange-500" /> Return
        </label>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 text-gray-200">Pickup Date</label>
          <input type="date" required name="pickupDate" value={form.pickupDate} onChange={handleChange} className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 text-black" />
        </div>
        <div className="flex-1">
          <label className="block mb-1 text-gray-200">Pickup Time</label>
          <input type="time" required name="pickupTime" value={form.pickupTime} onChange={handleChange} className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 text-black" />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-gray-200">Pickup Location</label>
        <input type="text" required name="pickupLocation" value={form.pickupLocation} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="e.g. Auckland Airport" />
      </div>
      <div>
        <label className="block mb-1 text-gray-200">Drop Off Location</label>
        <input type="text" required name="dropoffLocation" value={form.dropoffLocation} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="e.g. City Center" />
      </div>
      <div>
        <label className="block mb-1 text-gray-200">Message / Special Instructions</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="Any special requests?" />
      </div>
      <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-60" disabled={submitting}>
        {submitting ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}
