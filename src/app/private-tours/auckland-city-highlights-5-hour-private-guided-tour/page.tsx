import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Auckland City Highlights 5-Hour Private Guided Tour | HopinCab',
  description:
    'A relaxed 5-hour private Auckland city tour for first-time visitors, cruise guests, families, and solo travelers.',
};

const experiences = [
  {
    title: 'Auckland Harbour Bridge',
    text: 'Drive across one of the city\'s best-known landmarks and enjoy wide views over the Waitemata Harbour.',
  },
  {
    title: 'Devonport Village',
    text: 'Pause in this seaside suburb for waterfront views, photos, and a look at one of Auckland\'s most charming historic areas.',
  },
  {
    title: 'Westhaven Marina and Viaduct Harbour',
    text: 'See the marina precinct, city skyline, and the lively waterfront areas that define modern central Auckland.',
  },
  {
    title: 'Mt Eden summit views',
    text: 'Take in panoramic views across the city, harbour, and volcanic landscape from Auckland\'s highest natural point.',
  },
  {
    title: 'Parnell and the Rose Gardens',
    text: 'Explore one of Auckland\'s oldest neighborhoods and enjoy a classic photo stop in a well-known garden setting.',
  },
];

const highlights = [
  'Duration: approximately 5 hours',
  'Style: private guided sightseeing experience',
  'Transport: comfortable air-conditioned vehicle',
  'Flexibility: time for photo stops and short strolls in scenic areas',
  'Guide: live local commentary, history, and practical insider tips',
  'Suitable for: first-time visitors, cruise ship passengers, families, and solo travelers',
];

const included = [
  'Professional, friendly local guide',
  'Private air-conditioned transportation',
  'Pickup and drop-off at your accommodation or preferred central location',
  'A personalized pace with minor itinerary flexibility during the tour',
];

const whyChoose = [
  'An efficient way to understand Auckland in just a few hours, either at the start or end of a trip.',
  'A strong fit for travelers with limited time, including cruise stopovers and short city stays.',
  'A combination of iconic viewpoints and lesser-known local touches with a knowledgeable guide.',
  'Private and comfortable rather than rushed, with the day shaped around your group.',
];

const bookingInfo = [
  'Duration: approximately 5 hours',
  'Start times: flexible morning or afternoon options',
  'Cancellation: free cancellation up to 24 hours before departure, subject to final booking conditions',
  'Group size: private, only your party and guide',
];

export default function AucklandCityHighlightsPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Auckland City Highlights"
      title="Auckland City Highlights 5-Hour Private Guided Tour"
      intro="Discover the best of Auckland on a relaxed private city tour designed for first-time visitors, inbound cruise guests, and travelers who want a curated local introduction. This experience brings together iconic viewpoints, waterfront areas, cultural corners, and historic neighborhoods, all with live commentary from a knowledgeable local guide."
      footerText="This tour works especially well as a half-day city introduction or cruise-port outing. Send your preferred date, pickup location, and group size to book."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What you will experience</h2>
            <p className="text-gray-300">
              Travel through Auckland in a comfortable vehicle while your guide introduces the city&apos;s
              natural setting, waterfront identity, volcanic landmarks, and neighborhood character. The tour
              is paced to feel relaxed rather than rushed.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Best suited for</h2>
            <p className="text-gray-300">
              First-time Auckland visitors, cruise passengers, families, solo travelers, and anyone who
              wants an easy orientation before exploring more of the city independently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Route
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Key Auckland stops and viewpoints</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-gray-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">And more along the way</h3>
              <p className="text-gray-300">
                The private format allows room for additional iconic city locations, short scenic pauses,
                and light itinerary adjustments depending on timing and your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Highlights
            </p>
            <h2 className="mb-4 text-2xl font-bold">Quick overview</h2>
            <ul className="space-y-3 text-gray-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Included
            </p>
            <h2 className="mb-4 text-2xl font-bold">What is covered</h2>
            <ul className="space-y-3 text-gray-300">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400">
              Food, drinks, optional entry fees, and gratuities are not included.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Why Choose This Tour
            </p>
            <h2 className="mb-4 text-2xl font-bold">A strong first impression of Auckland</h2>
            <ul className="space-y-3 text-gray-300">
              {whyChoose.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Booking Info
            </p>
            <h2 className="mb-4 text-2xl font-bold">Practical details</h2>
            <ul className="space-y-3 text-gray-300">
              {bookingInfo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-300">
              This is a strong half-day option for cruise stopovers, early arrivals, and travelers who want
              a solid local overview before planning the rest of their time in Aotearoa.
            </p>
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
