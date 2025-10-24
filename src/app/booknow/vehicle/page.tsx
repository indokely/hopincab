import PageLayout from '../../../components/layout/PageLayout';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Select Vehicle | Book a Cab | HopInCab',
  description: 'Choose your vehicle for your Auckland ride or airport transfer.'
};

const vehicles = [
  {
    name: 'Sedan',
    image: '/images/car/Standard.jpg',
    price: '$75',
    seats: 4,
  },
  {
    name: 'Van',
    image: '/images/car/Van.jpg',
    price: '$110',
    seats: 7,
  },
  {
    name: 'Luxury',
    image: '/images/car/LuxurySedan.jpg',
    price: '$150',
    seats: 4,
  },
];

export default function SelectVehicle({ searchParams }: { searchParams: Record<string, string> }) {
  if (!searchParams.pickupDate || !searchParams.pickupTime || !searchParams.pickupLocation || !searchParams.dropoffLocation) {
    return notFound();
  }

  return (
    <PageLayout>
      <section className="py-12 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Select Your Vehicle</h1>
          <div className="bg-gray-900 rounded-lg p-4 mb-6 text-sm text-gray-300">
            <div><span className="font-semibold text-white">Pickup:</span> {searchParams.pickupLocation} ({searchParams.pickupDate} {searchParams.pickupTime})</div>
            <div><span className="font-semibold text-white">Drop Off:</span> {searchParams.dropoffLocation}</div>
            <div><span className="font-semibold text-white">Type:</span> {searchParams.transferType === 'return' ? 'Return' : 'One Way'}</div>
          </div>
          <form action="/booknow/contact" method="GET" className="space-y-6">
            {Object.entries(searchParams).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <div className="grid gap-6">
              {vehicles.map(v => (
                <label key={v.name} className="flex items-center gap-6 p-4 rounded-xl border-2 cursor-pointer border-gray-800 bg-black hover:border-orange-500 transition-all">
                  <input type="radio" name="vehicle" value={v.name} required className="accent-orange-500" />
                  <img src={v.image} alt={v.name} width={80} height={48} className="rounded-lg bg-white object-contain" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">{v.name}</div>
                    <div className="text-gray-400 text-xs">{v.seats} seats</div>
                  </div>
                  <div className="font-bold text-lg text-orange-500">{v.price}</div>
                </label>
              ))}
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Next: Contact Details</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
