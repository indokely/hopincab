import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Luxury Golf Tours | HopinCab',
  description:
    'Private luxury golf touring across New Zealand with transport planning for premium North Island and South Island courses.',
};

const services = [
  'Private driver and vehicle planning for golf-focused itineraries.',
  'Support for green-fee scheduling, route timing, and premium course access planning.',
  'Room for sightseeing, dining, and resort stops between rounds.',
  'Vehicle choices that work for golfers, luggage, and multi-day touring needs.',
];

const northIslandCourses = [
  'Kauri Cliffs in Northland for dramatic coastal golf and resort-style stays.',
  'Te Arai Links for a premium links-style experience north of Auckland.',
  'Kinloch near Taupo for a challenging Jack Nicklaus design and lake-region base.',
  'Wairakei for championship play in a sanctuary-like setting with strong scenery.',
  'Royal Auckland and Grange for a premium metro option close to the airport corridor.',
];

const southIslandCourses = [
  'Jack\'s Point near Queenstown for mountain-backed championship golf.',
  'Millbrook for resort golf with multiple course options and luxury accommodation appeal.',
  'The Hills in Arrowtown for a distinctive private-club feel and sculpture-filled setting.',
];

const vehicleNotes = [
  'Smaller golf groups can travel comfortably in premium van or people-mover setups.',
  'Larger groups may require bigger vans or coach-style transport depending on bags and luggage.',
  'Multi-day golf trips should be planned around bags, suitcases, and transfer distances - not just passenger count.',
];

export default function LuxuryGolfToursPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Luxury Golf Tours"
      title="Private golf touring built around New Zealand\'s premium courses"
      intro="HopinCab luxury golf touring is for guests who want more than point-to-point transport. The goal is to make the golf trip itself smoother - course days, luggage movement, resort transfers, and time between rounds can all be organized into one clean itinerary."
      footerText="Send your preferred courses, travel dates, group size, and whether you want a North Island, South Island, or nationwide golf itinerary."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What HopinCab can help coordinate</h2>
            <ul className="space-y-3 text-gray-300">
              {services.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Tour style</h2>
            <p className="text-gray-300">
              These itineraries suit golfers who want premium travel with less planning friction. That may
              mean airport-to-course efficiency, resort transfers, scenic detours, or a full multi-course
              golf circuit across one island or both.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              North Island
            </p>
            <h2 className="mb-4 text-2xl font-bold">Premium course ideas</h2>
            <ul className="space-y-3 text-gray-300">
              {northIslandCourses.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              South Island
            </p>
            <h2 className="mb-4 text-2xl font-bold">Queenstown and Arrowtown options</h2>
            <ul className="space-y-3 text-gray-300">
              {southIslandCourses.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Transport and bag planning</h2>
            <ul className="space-y-3 text-gray-300">
              {vehicleNotes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Typical add-ons</h2>
            <p className="text-gray-300">
              Golf itineraries can also include winery lunches, scenic lookouts, premium accommodation
              transfers, and non-golf activities for partners or groups traveling together.
            </p>
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
