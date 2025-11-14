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
    numPassengers: "1",
    numBags: "0",
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
          numPassengers: "1",
          numBags: "0",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block mb-1 text-gray-200">Number of Passengers</label>
          <div className="relative">
            <select
              name="numPassengers"
              value={form.numPassengers}
              onChange={handleChange}
              className="w-full appearance-none bg-black border border-gray-700 rounded-lg px-4 py-2 pr-8 text-white focus:outline-none focus:border-orange-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
              ))}
              <option value="9+">9+ (please specify in message)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full">
          <label className="block mb-1 text-gray-200">Number of Bags</label>
          <div className="relative">
            <select
              name="numBags"
              value={form.numBags}
              onChange={handleChange}
              className="w-full appearance-none bg-black border border-gray-700 rounded-lg px-4 py-2 pr-8 text-white focus:outline-none focus:border-orange-500"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'bag' : 'bags'}</option>
              ))}
              <option value="9+">9+ (please specify in message)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-gray-200">Message / Special Instructions</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="Any special requests? - you can also mention things like child car seat, flight details, or anything extra." />
      </div>
      <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors disabled:opacity-60" disabled={submitting}>
        {submitting ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}
