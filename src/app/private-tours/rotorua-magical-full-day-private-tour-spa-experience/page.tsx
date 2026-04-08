import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Rotorua Magical Full-Day Private Tour + Spa Experience | HopinCab',
  description:
    'A private full-day Auckland to Rotorua experience with geothermal sights, cultural context, scenic stops, and Polynesian Spa relaxation.',
};

const expectationPoints = [
  'Travel south from Auckland in a comfortable air-conditioned vehicle along the Thermal Explorer corridor.',
  'See Rotorua’s geothermal landscapes, lake views, and major local highlights with private pacing.',
  'Learn about Maori culture, stories, and the region’s volcanic identity from your HopinCab guide.',
  'End the day with a restorative soak in the Polynesian Spa thermal pools.',
];

const highlights = [
  'Duration: approximately 11 to 13 hours',
  'Style: fully private tour with only your group and guide',
  'Transport: comfortable air-conditioned vehicle with pickup and drop-off included',
  'Geothermal focus: mud pools, geysers, steam vents, and volcanic landscapes',
  'Relaxation: Polynesian Spa thermal pool experience',
  'Local knowledge: commentary and practical guidance throughout the day',
];

const whySpecial = [
  'No self-driving or complex planning required; the day is arranged so you can focus on the experience.',
  'The private format gives couples, families, and small groups more control over pace and stops.',
  'Rotorua offers one of New Zealand’s most distinctive geothermal environments and remains a signature North Island destination.',
  'The spa element adds a genuine wellness component after a full day of sightseeing.',
];

const included = [
  'Private return transfer from Auckland',
  'Professional HopinCab driver-guide',
  'Entry to the Polynesian Spa thermal pools, with Deluxe Lake Spa as a strong option',
  'Scenic stops en route and around Rotorua',
  'Bottled water and local insights throughout the day',
];

const optionalAddOns = [
  'Guided geothermal park entry',
  'Maori cultural performance or village visit',
  'Additional sightseeing stops depending on timing and your priorities',
];

const practicalInfo = [
  'Start times: usually an early morning departure to maximize the day in Rotorua',
  'Distance: around 230 to 260 km from Auckland, with roughly 3 hours of driving each way before stops',
  'Bring comfortable shoes, sunscreen, a hat, camera, towel, and swimwear for the spa',
  'Best for full-day itineraries, culture-focused travelers, wellness seekers, and tailored cruise timing where feasible',
];

export default function RotoruaMagicalTourPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Rotorua Magical Full-Day Tour"
      title="Rotorua Magical Full-Day Private Tour + Spa Experience"
      intro="Escape Auckland for a full-day private journey into New Zealand’s geothermal heartland. This HopinCab experience blends scenic countryside driving, Rotorua’s volcanic landscapes, Maori cultural context, city highlights, and a luxurious thermal spa session into one long-form day that is both immersive and relaxing."
      footerText="This is one of the strongest premium day-trip options from Auckland if you want geothermal scenery, local culture, and a spa experience in one itinerary."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What to expect</h2>
            <ul className="space-y-3 text-gray-300">
              {expectationPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Experience mix</h2>
            <p className="text-gray-300">
              This full-day route combines discovery, scenery, cultural context, and relaxation. It is
              designed for travelers who want Rotorua’s big geothermal identity without handling the long
              drive or piecing the day together themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Highlights
            </p>
            <h2 className="mb-4 text-2xl font-bold">What defines the day</h2>
            <ul className="space-y-3 text-gray-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Why This Tour Is Special
            </p>
            <h2 className="mb-4 text-2xl font-bold">Why travelers choose it</h2>
            <ul className="space-y-3 text-gray-300">
              {whySpecial.map((item) => (
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
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              What’s Included
            </p>
            <h2 className="mb-4 text-2xl font-bold">Included in the base experience</h2>
            <ul className="space-y-3 text-gray-300">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Optional Add-Ons
            </p>
            <h2 className="mb-4 text-2xl font-bold">Ways to customize the day</h2>
            <ul className="space-y-3 text-gray-300">
              {optionalAddOns.map((item) => (
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
            <h2 className="mb-4 text-2xl font-bold">Useful planning notes</h2>
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
              Good Fit For
            </p>
            <h2 className="mb-4 text-2xl font-bold">When this tour makes the most sense</h2>
            <p className="text-gray-300">
              This is ideal as a premium Auckland day escape for travelers who want geothermal scenery,
              Maori cultural context, and a high-quality spa experience in one itinerary. It also works well
              for guests who value private pacing over a faster shared tour format.
            </p>
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
