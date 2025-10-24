import PageLayout from '../../components/layout/PageLayout';

export const metadata = {
  title: 'Book a Cab | HopInCab',
  description: 'Book your next ride or airport transfer with HopInCab. Fast, easy, and reliable cab booking in Auckland.'
};

export default function BookNow() {
  return (
    <PageLayout>
      <section className="py-12 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">For bookings, contact us:</h1>
          {/*
<form action="/booknow/vehicle" method="GET" className="space-y-6">
  <div className="flex gap-6 mb-2">
    <label className="flex items-center gap-2 cursor-pointer font-semibold text-orange-500">
      <input type="radio" name="transferType" value="oneway" defaultChecked className="accent-orange-500" /> One Way
    </label>
    <label className="flex items-center gap-2 cursor-pointer text-gray-300">
      <input type="radio" name="transferType" value="return" className="accent-orange-500" /> Return
    </label>
  </div>
  <div className="flex gap-4">
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
*/}
          <div className="bg-gray-900 rounded-lg p-6 mb-6 text-lg text-gray-300 text-center">
            
            <div className="mb-1">
              <span className="font-semibold text-orange-500">Mobile:</span> <a href="tel:+64212458155" className="hover:underline">+64 21 245 8155</a>
            </div>
            <div>
              <span className="font-semibold text-orange-500">Email:</span> <a href="mailto:Resv@hopincab.com" className="hover:underline">Resv@hopincab.com</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
