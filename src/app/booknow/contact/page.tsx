import PageLayout from '../../../components/layout/PageLayout';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Contact Details | Book a Cab | HopInCab',
  description: 'Enter your contact details to complete your Auckland cab booking.'
};

export default function ContactDetails({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  // Guard: ensure all previous steps are present
  if (!searchParams || !searchParams.pickupDate || !searchParams.pickupTime || !searchParams.pickupLocation || !searchParams.dropoffLocation || !searchParams.vehicle) {
    return notFound();
  }

  return (
    <PageLayout>
      <section className="py-12 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Contact Details</h1>
          <div className="bg-gray-900 rounded-lg p-4 mb-6 text-sm text-gray-300">
            <div><span className="font-semibold text-white">Pickup:</span> {searchParams.pickupLocation} ({searchParams.pickupDate} {searchParams.pickupTime})</div>
            <div><span className="font-semibold text-white">Drop Off:</span> {searchParams.dropoffLocation}</div>
            <div><span className="font-semibold text-white">Type:</span> {searchParams.transferType === 'return' ? 'Return' : 'One Way'}</div>
            <div><span className="font-semibold text-white">Vehicle:</span> {searchParams.vehicle}</div>
          </div>
          <form action="/booknow/confirmation" method="POST" className="space-y-6">
            {/* Pass all previous fields as hidden */}
            {Object.entries(searchParams).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-gray-200">Name</label>
                <input type="text" name="name" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-gray-200">Mobile</label>
                <input type="tel" name="mobile" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Email</label>
              <input type="email" name="email" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Write Note to HopinCab Admin</label>
              <textarea name="note" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white" rows={3} />
            </div>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer text-gray-200">
                <input type="radio" name="meetAndGreet" value="yes" className="accent-orange-500" /> Meet & Greet
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-gray-200">
                <input type="radio" name="meetAndGreet" value="no" defaultChecked className="accent-orange-500" /> No Meet & Greet
              </label>
            </div>
            <div>
              <label className="block mb-1 text-gray-200">Payment Method</label>
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 font-semibold text-white">Cash</div>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Book Now</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
