import Link from "next/link";

export default function BookNowInlineForm() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Book a Cab</h2>
        <form action="/booknow/vehicle" method="GET" className="space-y-6 max-w-2xl mx-auto">
          <div className="flex gap-6 mb-2">
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-orange-500">
              <input type="radio" name="transferType" value="oneway" defaultChecked className="accent-orange-500" /> One Way
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-gray-300">
              <input type="radio" name="transferType" value="return" className="accent-orange-500" /> Return
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-gray-200">Pickup Date</label>
              <input type="date" required name="pickupDate" className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 text-black" />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-gray-200">Pickup Time</label>
              <input type="time" required name="pickupTime" className="w-full bg-white border border-gray-700 rounded-lg px-4 py-2 text-black" />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-gray-200">Pickup Location</label>
            <input type="text" required name="pickupLocation" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="e.g. Auckland Airport" />
          </div>
          <div>
            <label className="block mb-1 text-gray-200">Drop Off Location</label>
            <input type="text" required name="dropoffLocation" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="e.g. City Center" />
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Next: Select Vehicle</button>
        </form>
        <div className="text-center mt-4">
          <Link href="/booknow" className="text-orange-500 underline text-sm">Full Booking Page</Link>
        </div>
      </div>
    </section>
  );
}
