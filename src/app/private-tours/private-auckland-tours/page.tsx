import PrivateTourPageShell from '@/components/privateTours/PrivateTourPageShell';

export const metadata = {
  title: 'Private Auckland Tours | HopinCab',
  description:
    'Private Auckland sightseeing tours with flexible 4 hour and 8 hour options across city highlights and west coast add-ons.',
};

const reasons = [
  'Flexible 4 hour, 8 hour, and custom-duration touring.',
  'Private transport for solo travelers, couples, families, and groups.',
  'Auckland commentary covering local history, Maori heritage, neighborhoods, and scenic viewpoints.',
  'Optional west coast, wine, and museum add-ons depending on time and traffic.',
];

const halfDayHighlights = [
  'Wynyard Quarter, Viaduct Harbour, and Westhaven Marina',
  'Harbour Bridge skyline viewpoints and key inner-city neighborhoods',
  'Mt Eden, Auckland Domain, and major volcanic lookouts',
  'Parnell, the waterfront, and eastern bays such as Mission Bay or St Heliers',
  'Optional cultural stop at Auckland Museum or heritage areas if timing suits',
];

const fullDayHighlights = [
  'A slower city circuit with more time for Devonport, Bastion Point, or Achilles Point',
  'West coast detours such as Piha or Muriwai with black-sand beach scenery',
  'Lunch stops in Cornwall Park, central Auckland, or a winery area such as Kumeu',
  'Extra time for photo stops, walks, museum visits, and neighborhood exploration',
  'A stronger mix of city, coast, and local food or wine in one private day',
];

const routeCards = [
  {
    title: 'City Icons',
    text: 'Skyline viewpoints, marina districts, heritage suburbs, and volcanic landmarks that frame Auckland visually.',
  },
  {
    title: 'Culture and History',
    text: 'Parnell, Auckland Domain, museum options, and broader local stories that connect the city to Maori and colonial history.',
  },
  {
    title: 'Harbour and Coast',
    text: 'Mission Bay, St Heliers, Bastion Point, and optional harbour-side or beachside photo stops.',
  },
  {
    title: 'West Coast Add-Ons',
    text: 'Piha, Muriwai, rugged surf beaches, and seasonal chances to include coastal lookouts and short walks.',
  },
];

export default function PrivateAucklandToursPage() {
  return (
    <PrivateTourPageShell
      eyebrow="Private Auckland Tours"
      title="See Auckland beyond the standard city loop"
      intro="HopinCab private Auckland tours are built around the amount of time you have and the kind of day you want. Some guests want a sharp city overview in half a day. Others want a full-day mix of urban landmarks, coastal scenery, local food, and west coast landscapes."
      footerText="Send your cruise time, hotel pickup location, or preferred day-tour duration and HopinCab can recommend the best Auckland route for your group."
    >
      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
            <h2 className="mb-4 text-2xl font-bold">Why choose this tour</h2>
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
            <h2 className="mb-4 text-2xl font-bold">Good fit for</h2>
            <p className="text-gray-300">
              This page suits travelers who want a private Auckland sightseeing option with local guidance,
              flexible pacing, and door-to-door convenience instead of a fixed shared coach tour.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              4 Hour Option
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Auckland highlights with efficient pacing</h2>
            <p className="mt-4 text-gray-300">
              A half-day private tour works well if you want a strong introduction to the city and nearby
              viewpoints without committing to a full day on the road.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {halfDayHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-800 bg-black p-6">
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              8 Hour Option
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">A broader Auckland day with room to explore</h2>
            <p className="mt-4 text-gray-300">
              Full-day touring gives you space to combine city landmarks with coast, food, wine, or a west
              coast extension depending on the day and your interests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fullDayHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
              Tour Style
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Popular elements guests ask to include</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {routeCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-gray-800 bg-black p-6">
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-gray-300">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PrivateTourPageShell>
  );
}
