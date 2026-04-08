import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Private Multi Day Tours | HopinCab',
  description:
    'Custom multi-day private touring across the North Island and South Island with flexible routing from HopinCab.',
};

const reasons = [
  'Custom itineraries built around your pace, dates, and preferred regions.',
  'North Island, South Island, or combined journeys starting or ending in major cities.',
  'Private vehicles suited to couples, families, and larger touring groups.',
  'A transport-focused approach that supports sightseeing, regional transfers, and longer touring days.',
];

const northIslandIdeas = [
  'Auckland, west coast beaches, and city touring',
  'Rotorua geothermal and Maori cultural experiences',
  'Hobbiton, Waitomo, Taupo, and Tongariro region add-ons',
  'Coromandel beaches, marine tours, and scenic peninsulas',
];

const southIslandIdeas = [
  'Queenstown, Arrowtown, and alpine resort routes',
  'Milford Sound or Fiordland touring combinations',
  'Christchurch, Canterbury, and high-country landscapes',
  'Southern scenic routes through lakes, fjords, and remote viewpoints',
];

const planningSteps = [
  {
    title: 'Step 1: Share your travel frame',
    text: 'Send your travel dates, arrival city, departure city, and how many days you want available for touring.',
  },
  {
    title: 'Step 2: Prioritize the must-sees',
    text: 'List the regions or experiences you care about most so the route can be realistic instead of overloaded.',
  },
  {
    title: 'Step 3: Match the vehicle',
    text: 'The right vehicle depends on group size, luggage, travel style, and how much time you want to spend on the road each day.',
  },
  {
    title: 'Step 4: Refine the pace',
    text: 'Some travelers want long scenic drives and many stops. Others prefer fewer bases and more time at each destination.',
  },
];

export default function PrivateMultiDayToursPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Private Multi Day Tours"
      title="Build a longer New Zealand journey around your own pace"
      intro="HopinCab private multi-day touring is for travelers who want one connected trip rather than a collection of separate day tours. Whether you are planning a North Island route, a South Island journey, or a wider Aotearoa itinerary, the focus is on practical transport, flexible pacing, and a route that actually works."
      footerText="Tell HopinCab how many days you have, where you start and finish, and the places you most want to see."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Why this works well</h2>
            <ul className="space-y-3 text-gray-300">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Who this suits</h2>
            <p className="text-gray-300">
              This format suits travelers who want to combine major highlights with hidden stops, avoid rigid
              group schedules, and keep their travel days organized under one private touring plan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              North Island Ideas
            </p>
            <h2 className="mb-4 text-2xl font-bold">Popular routing themes</h2>
            <ul className="space-y-3 text-gray-300">
              {northIslandIdeas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              South Island Ideas
            </p>
            <h2 className="mb-4 text-2xl font-bold">Scenic extensions and long-form touring</h2>
            <ul className="space-y-3 text-gray-300">
              {southIslandIdeas.map((item) => (
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
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Planning Flow
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">How a multi-day itinerary gets shaped</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {planningSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
