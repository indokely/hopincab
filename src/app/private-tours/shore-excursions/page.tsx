import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Shore Excursions | HopinCab',
  description:
    'Private New Zealand shore excursions for cruise guests visiting major ports across the North Island and South Island.',
};

const overviewCards = [
  { label: 'Typical duration', value: 'Half day, full day, or custom timing around your ship schedule' },
  { label: 'Activity level', value: 'Mostly easy to moderate depending on the port and stops chosen' },
  { label: 'Group size', value: 'Private touring for solo guests, couples, families, and larger groups' },
  { label: 'Coverage', value: 'North Island and South Island ports with tailored local sightseeing' },
];

const topOptions = [
  'Auckland city sights, harbour viewpoints, and nearby coastlines',
  'Rotorua geothermal and cultural touring from Tauranga',
  'Hobbiton-focused touring from Tauranga for movie fans',
  'Napier Art Deco districts and Hawke\'s Bay wine-country combinations',
  'Wellington highlights such as Te Papa, cable car areas, and harbour lookouts',
  'Dunedin wildlife and heritage touring on the Otago Peninsula',
];

const included = [
  'Port-based pickup and return planning',
  'Private transport matched to your group and route',
  'A flexible local touring plan built around available shore time',
  'Guidance on meeting points and the practical timing for the day',
];

const bringList = [
  'Layers for changeable New Zealand weather',
  'Comfortable footwear',
  'Sun protection and water',
  'Your cruise details and a reachable contact method if possible',
];

const portCards = [
  {
    title: 'Bay of Islands',
    text: 'Good for Waitangi, Russell, coastal viewpoints, waterfalls, marine trips, and wider Far North scenery.',
  },
  {
    title: 'Auckland',
    text: 'Works well for city highlights, museum options, harbour lookouts, Waiheke-style ideas, and west coast add-ons.',
  },
  {
    title: 'Tauranga',
    text: 'Often paired with Rotorua geothermal touring or a dedicated Hobbiton day depending on port timing.',
  },
  {
    title: 'Napier',
    text: 'Best known for Art Deco architecture, Bluff Hill views, and Hawke\'s Bay wine-country combinations.',
  },
  {
    title: 'Wellington',
    text: 'Strong for panoramic lookouts, museums, waterfront touring, gardens, and film-related stops.',
  },
  {
    title: 'Picton',
    text: 'A good launch point for Marlborough Sounds scenery, wine touring, and relaxed South Island coastal experiences.',
  },
  {
    title: 'Lyttelton / Christchurch',
    text: 'Suitable for city highlights, gardens, hill viewpoints, memorials, and selected countryside add-ons.',
  },
  {
    title: 'Port Chalmers / Dunedin',
    text: 'Popular for heritage architecture, steep streets, Otago Peninsula wildlife, and castle or gallery add-ons.',
  },
];

const faqItems = [
  {
    title: 'How are shore excursions planned?',
    text: 'The route is built around your ship timing first, then around the mix of sightseeing, walking, and driving you want from the day.',
  },
  {
    title: 'How will we find the driver?',
    text: 'Meeting-point instructions can be confirmed before the day. Some ports allow close pickup and others require a designated passenger meeting area.',
  },
  {
    title: 'Can the day finish somewhere other than the ship?',
    text: 'That can often be arranged if you are disembarking or heading to another address after the excursion. It should be discussed in advance.',
  },
  {
    title: 'How much time is usually needed?',
    text: 'Many shore excursions fit a 4 to 8 hour window, but final duration depends on the port, traffic, attraction timing, and your ship schedule.',
  },
];

export default function ShoreExcursionsPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Shore Excursions"
      title="Private New Zealand shore excursions shaped around your port day"
      intro="HopinCab shore excursions are designed for cruise guests who want a private touring option with practical timing, smoother logistics, and a route that fits the time available ashore. The focus is on making the day enjoyable without losing sight of the realities of port access, traffic, and return timing."
      footerText="Send your cruise ship, port, date, docking window, and preferred sightseeing style and HopinCab can suggest the most realistic excursion options."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => (
            <div key={card.label} className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                {card.label}
              </p>
              <p className="text-gray-300">{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold">Popular excursion themes</h2>
            <ul className="space-y-3 text-gray-300">
              {topOptions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold">Useful day-of basics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-bold">Often included</h3>
                <ul className="space-y-2 text-gray-300">
                  {included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">What to bring</h3>
                <ul className="space-y-2 text-gray-300">
                  {bringList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Cruise Ports
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Where these shore excursions can focus</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">What cruise guests usually ask first</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
