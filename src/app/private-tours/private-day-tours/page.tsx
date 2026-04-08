import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Private Day Tours | HopinCab',
  description:
    'Private day tours across Auckland, the North Island, and the South Island with flexible itineraries from HopinCab.',
};

const northIslandHighlights = [
  {
    name: 'Auckland',
    description:
      'Harbour views, volcanic lookouts, waterfront dining, wineries, beaches, and easy day-trip combinations.',
  },
  {
    name: 'Rotorua',
    description:
      'Geothermal parks, Maori cultural experiences, redwood walks, luge rides, and family-friendly activities.',
  },
  {
    name: 'Coromandel',
    description:
      'Coastal scenery, beach stops, Cathedral Cove access points, and relaxed sightseeing along the peninsula.',
  },
  {
    name: 'Taupo',
    description:
      'Lakefront scenery, Huka Falls, geothermal attractions, and easy add-ons for adventure activities.',
  },
  {
    name: 'Northland',
    description:
      'Cape Reinga routes, Bay of Islands stops, coastal towns, and scenic drives through the far north.',
  },
  {
    name: 'Waitomo and Hobbiton',
    description:
      'Glowworm caves, movie-set visits, and custom combinations with Waikato and central North Island stops.',
  },
];

const southIslandHighlights = [
  {
    name: 'Queenstown and Arrowtown',
    description:
      'Adventure gateways, alpine scenery, lakeside viewpoints, and heritage village experiences.',
  },
  {
    name: 'Milford Sound and Fiordland',
    description:
      'Long scenic touring days with fjord cruises, mountain passes, and wildlife viewing opportunities.',
  },
  {
    name: 'Aoraki / Mount Cook and Lake Tekapo',
    description:
      'High-country landscapes, glacier viewpoints, dark-sky experiences, and iconic photo stops.',
  },
  {
    name: 'Christchurch and Canterbury',
    description:
      'Garden city touring, coastal detours, alpine rail connections, and flexible regional day trips.',
  },
  {
    name: 'Nelson and Abel Tasman',
    description:
      'Golden beaches, arts-focused towns, and private touring around one of the country’s most scenic coastal regions.',
  },
  {
    name: 'Dunedin and Otago',
    description:
      'Historic architecture, dramatic coastlines, wildlife encounters, and tailored lower South Island touring.',
  },
];

const reasons = [
  'Private itineraries shaped around your pace, interests, and pickup point.',
  'Suitable for solo guests, couples, families, and larger groups.',
  'Local driver-guides focused on comfort, timing, and practical travel advice.',
  'Easy planning for sightseeing, food stops, cultural visits, and custom detours.',
];

export default function PrivateDayToursPage() {
  return (
    <PageLayout>
      <section className="border-b border-gray-800 bg-black px-4 pb-14 pt-24 text-white">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
            Private Day Tours
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Explore New Zealand your way with private day tours by HopinCab
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            HopinCab offers flexible private touring for travelers who want more than a standard transfer.
            Plan a relaxed city outing, a full-day regional escape, or a custom sightseeing route across the
            North Island or South Island with private transport and a schedule built around your group.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Enquire About This Tour
            </Link>
            <Link
              href="/booknow"
              className="rounded-lg border border-gray-700 px-6 py-3 text-center font-semibold text-white transition-colors hover:border-white"
            >
              Book Transport
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What this tour page covers</h2>
            <p className="text-gray-300">
              This page is designed for travelers looking for privately arranged sightseeing rather than a
              fixed coach tour. You choose the region, timing, and style of the day, and HopinCab helps
              shape the route around what matters most to your group.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Why choose HopinCab</h2>
            <ul className="space-y-3 text-gray-300">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              North Island
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Popular private day tour ideas</h2>
            <p className="mt-4 text-gray-300">
              Many of HopinCab&apos;s private day tours start from Auckland and extend into well-known
              destinations with time for scenic stops, local food, and optional attractions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {northIslandHighlights.map((place) => (
              <div key={place.name} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{place.name}</h3>
                <p className="text-gray-300">{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              South Island
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Private touring beyond Auckland</h2>
            <p className="mt-4 text-gray-300">
              For travelers planning a wider New Zealand trip, HopinCab can also help with private touring
              ideas around major South Island regions known for mountains, coastlines, and long scenic drives.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {southIslandHighlights.map((place) => (
              <div key={place.name} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h3 className="mb-3 text-xl font-bold">{place.name}</h3>
                <p className="text-gray-300">{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold">Planning notes</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Private day tours work best when you already know the region you want to visit and the type
                of experience you prefer, such as sightseeing, food and wine, nature, culture, or family
                activities.
              </p>
              <p>
                When you send the enquiry, include your travel date, starting point, number of passengers,
                and any must-see stops. That makes it easier to shape a realistic route and recommend the
                right vehicle.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8">
            <h2 className="mb-4 text-2xl font-bold">Ready to plan?</h2>
            <p className="mb-6 text-gray-200">
              Send your preferred date, group size, and destination list, and HopinCab can help you build a
              private day tour that fits your schedule.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact-us"
                className="block rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Contact HopinCab
              </Link>
              <a
                href="tel:+64212458155"
                className="block rounded-lg border border-gray-700 px-5 py-3 text-center font-semibold text-white transition-colors hover:border-white"
              >
                +64 21 245 8155
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
