import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Piha Beach & Rainforest Adventure Private 5-Hour Guided Tour | HopinCab',
  description:
    'A private 5-hour west coast Auckland adventure through the Waitakere Ranges, rainforest tracks, and Piha Beach.',
};

const overviewPoints = [
  'A half-day west coast journey from the city into forest, coastline, and black-sand beach country.',
  'A strong fit for nature lovers, photographers, first-time visitors, and travelers who want to see a different side of Auckland.',
  'A relaxed private format with room for short walks, beach pauses, and scenic photo stops.',
  'Live local commentary covering Maori history, native ecology, and west coast character.',
];

const experiences = [
  {
    title: 'Scenic drive through the Waitakere Ranges',
    text: 'Leave central Auckland behind and wind through native bush, dramatic ridgelines, and one of the region’s most memorable natural landscapes.',
  },
  {
    title: 'Guided forest experience',
    text: 'Enjoy a gentle rainforest walk with native birdsong, towering trees, ferns, and the cool atmosphere of the west coast bush.',
  },
  {
    title: 'Black-sand Piha Beach visit',
    text: 'Feel the volcanic sand underfoot, watch the Tasman Sea roll in, and take in one of Auckland’s most iconic coastal settings.',
  },
  {
    title: 'Photo stops and coastal viewpoints',
    text: 'Capture panoramic views of cliffs, surf beaches, and rugged headlands that make Piha so visually striking.',
  },
  {
    title: 'Local insights and commentary',
    text: 'Learn about the area’s cultural history, native environment, and local stories from your HopinCab guide.',
  },
];

const highlights = [
  'Duration: approximately 5 hours',
  'Style: private guided adventure',
  'Transport: comfortable air-conditioned vehicle',
  'Best for: couples, families, small groups, nature lovers, and photographers',
  'Flexibility: personalized pace with optional photo and beach stops',
];

const whyVisitorsLoveIt = [
  'Piha is one of Auckland’s most iconic natural destinations, known for dramatic black sand and wild coastal energy.',
  'It is an easy half-day escape from the city and works well with flexible travel schedules or short Auckland stays.',
  'The private format keeps the day efficient and relaxed, with no waiting on other groups or fixed coach timing.',
  'Your guide adds context and local knowledge that goes beyond the usual sightseeing checklist.',
];

const practicalInfo = [
  'Pick-up and drop-off from central Auckland accommodation or another agreed meeting point',
  'Easy walking suitable for most travelers; let HopinCab know in advance if you need added support',
  'Bring comfortable shoes, sunscreen, a hat, water, and a camera',
  'Lunch and refreshments are not usually included, but time at Piha Village can be arranged depending on the day',
];

export default function PihaBeachAndRainforestAdventurePage() {
  return (
    <PrivateTourPageShell
      eyebrow="Piha Beach & Rainforest Adventure"
      title="Piha Beach & Rainforest Adventure Private 5-Hour Guided Tour"
      intro="Experience Auckland’s wild west coast on a private guided journey through rainforest, rugged coastal landscapes, and one of New Zealand’s most famous black-sand beaches. This HopinCab tour combines native forest atmosphere with dramatic Pacific and Tasman-facing scenery in a relaxed half-day format."
      footerText="This west coast experience is ideal for travelers who want nature, scenery, and a break from the city without committing to a full-day itinerary."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Tour overview</h2>
            <ul className="space-y-3 text-gray-300">
              {overviewPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What to expect</h2>
            <p className="text-gray-300">
              This tour balances gentle walking, big landscape views, and comfortable private transport. It
              is designed to be accessible for most travelers while still delivering a strong sense of
              west coast wilderness.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Experience
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What you’ll do on the day</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Highlights
            </p>
            <h2 className="mb-4 text-2xl font-bold">Quick details</h2>
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
              Why Visitors Love It
            </p>
            <h2 className="mb-4 text-2xl font-bold">Why this tour stands out</h2>
            <ul className="space-y-3 text-gray-300">
              {whyVisitorsLoveIt.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Practical Info
            </p>
            <h2 className="mb-4 text-2xl font-bold">Before you go</h2>
            <ul className="space-y-3 text-gray-300">
              {practicalInfo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              What to Expect
            </p>
            <h2 className="mb-4 text-2xl font-bold">A taste of New Zealand’s natural spirit</h2>
            <p className="text-gray-300">
              From rainforest tracks to open west coast horizons, this journey is built around scenery,
              atmosphere, and memorable moments. It works especially well for travelers who want a private
              nature experience close to Auckland without the pressure of a full-day expedition.
            </p>
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
