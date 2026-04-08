import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Private Hobbiton Tours | HopinCab',
  description:
    'Private Hobbiton day tours from Auckland with optional add-ons such as Waitomo, Rotorua, and Taupo.',
};

const inclusions = [
  'Private pickup and return from Auckland accommodation or another agreed starting point.',
  'Transport matched to your group size, from sedan travel to larger van options.',
  'Hobbiton visit planning with enough time for the official set experience and key photo stops.',
  'Guidance along the way with optional route extensions after the movie-set visit.',
];

const experiencePoints = [
  {
    title: 'For fans and first-timers',
    text: 'This experience works for serious Lord of the Rings fans and also for travelers who simply want to see one of New Zealand\'s most polished visitor attractions.',
  },
  {
    title: 'A true day-trip format',
    text: 'The on-site Hobbiton experience itself typically takes a few hours, but the full private day can include scenic driving, comfort stops, and optional regional add-ons.',
  },
  {
    title: 'Flexible onward routing',
    text: 'Some guests return to Auckland after the set tour, while others continue onward to Waitomo, Rotorua, or Taupo as part of a longer itinerary.',
  },
  {
    title: 'Advance booking matters',
    text: 'Hobbiton is one of the most requested experiences in the country, so preferred dates and times should be requested early.',
  },
];

const combinations = [
  'Return Auckland to Hobbiton with a private day-tour format',
  'Hobbiton plus Waitomo Glowworm Caves',
  'Hobbiton plus Rotorua geothermal and cultural highlights',
  'Hobbiton as part of a wider North Island transfer or multi-day route',
];

const vehicleGuide = [
  '1 to 3 passengers: private sedan-style touring',
  '4 to 5 passengers: premium minivan-style touring',
  '6 or more passengers: larger private van options for more luggage and comfort',
];

export default function PrivateHobbitonToursPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Private Hobbiton Tours"
      title="Private Hobbiton touring from Auckland and beyond"
      intro="HopinCab can help shape a private Hobbiton day around your timing, group size, and whether you want a simple return trip or a longer North Island route. The experience is ideal for movie fans, families, and travelers looking for a polished New Zealand attraction with a scenic countryside drive."
      footerText="Send your preferred date, group size, and whether you want to return to Auckland or continue onward after Hobbiton."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">What to expect</h2>
            <p className="text-gray-300">
              Expect rolling Waikato landscapes, a guided movie-set experience, carefully maintained Hobbit
              holes and village details, and time to enjoy the atmosphere that made this location a global
              draw for Middle-earth fans.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Typical inclusions</h2>
            <ul className="space-y-3 text-gray-300">
              {inclusions.map((item) => (
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
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Notes
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">How this page has been structured</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {experiencePoints.map((point) => (
              <div key={point.title} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{point.title}</h3>
                <p className="text-gray-300">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Popular combinations</h2>
            <ul className="space-y-3 text-gray-300">
              {combinations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Vehicle planning</h2>
            <ul className="space-y-3 text-gray-300">
              {vehicleGuide.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
