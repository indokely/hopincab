import PageLayout from '@/components/layout/PageLayout';

export const metadata = {
  title: 'Private Transfers | HopinCab',
  description:
    'Private New Zealand transfers with zone-based pricing, family-friendly vehicles, and door-to-door service from HopinCab.',
};

const transferZones = [
  {
    zone: 'Inner Zone',
    range: '0-50 km',
    areas: 'Auckland Metro, CBD, North Shore, West Auckland, East Auckland',
    minivanPrice: '$96 NZD',
    largeVanPrice: '$180 NZD',
  },
  {
    zone: 'Medium Zone',
    range: '50-100 km',
    areas: 'Huntly, Warkworth, Thames, Te Kauwhata',
    minivanPrice: '$216 NZD',
    largeVanPrice: '$360 NZD',
  },
  {
    zone: 'Outer Zone',
    range: '100-150 km',
    areas: 'Hamilton, Cambridge, Morrinsville, Paeroa, Waihi',
    minivanPrice: '$360 NZD',
    largeVanPrice: '$540 NZD',
  },
  {
    zone: 'Extended Zone',
    range: '150-170 km',
    areas: 'Tauranga, Mount Maunganui, Whangarei',
    minivanPrice: '$480 NZD',
    largeVanPrice: '$660 NZD',
  },
];

const reasons = [
  'Flight monitoring for all airport pickups',
  'Meet and greet inside the terminal',
  '75 minutes of free waiting for international arrivals',
  'Luggage assistance included',
  'Spacious vehicles for multiple bags',
  'Free child car seats on request',
  'Direct door-to-door service with no ride sharing',
];

const paymentOptions = [
  'Pay after the ride directly to the driver',
  'Cash preferred',
  'Card available in the vehicle',
  '5% fee applies to international cards',
];

export default function PrivateTransfersPage() {
  return (
    <PageLayout>
      <section className="border-b border-gray-800 bg-black px-4 pb-14 pt-24 text-white">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
            Private Transfers
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            New Zealand Transfers
            <span className="block text-3xl md:text-5xl">(0-170 km)</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Reliable, door-to-door, luggage-friendly, and family-focused private transfers across New Zealand
            and beyond.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Transfer zones and pricing</h2>
            <p className="mt-4 text-gray-300">
              Pricing below is structured by distance zone and vehicle size. A minivan covers 1 to 6
              passengers. A large van covers 8 to 11 passengers.
            </p>
          </div>

          <div className="hidden overflow-hidden rounded-3xl border border-gray-800 md:block">
            <table className="w-full border-collapse bg-gray-950 text-left">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Service Zone</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Towns / Suburbs Covered</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Minivan (1-6 pax)</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Large Van (8-11 pax)</th>
                </tr>
              </thead>
              <tbody>
                {transferZones.map((zone) => (
                  <tr key={zone.zone} className="border-t border-gray-800">
                    <td className="px-6 py-5 align-top">
                      <div className="font-bold text-white">{zone.zone}</div>
                      <div className="text-sm text-gray-400">({zone.range})</div>
                    </td>
                    <td className="px-6 py-5 text-gray-300">{zone.areas}</td>
                    <td className="px-6 py-5 font-semibold text-orange-400">{zone.minivanPrice}</td>
                    <td className="px-6 py-5 font-semibold text-orange-400">{zone.largeVanPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 md:hidden">
            {transferZones.map((zone) => (
              <div key={zone.zone} className="rounded-3xl border border-gray-800 bg-gray-900 p-6">
                <h3 className="text-2xl font-bold text-white">{zone.zone}</h3>
                <p className="mt-1 text-sm text-gray-400">({zone.range})</p>
                <p className="mt-4 text-gray-300">{zone.areas}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-black p-4">
                    <p className="text-sm text-gray-400">Minivan (1-6 pax)</p>
                    <p className="mt-1 text-xl font-bold text-orange-400">{zone.minivanPrice}</p>
                  </div>
                  <div className="rounded-2xl bg-black p-4">
                    <p className="text-sm text-gray-400">Large Van (8-11 pax)</p>
                    <p className="mt-1 text-xl font-bold text-orange-400">{zone.largeVanPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold">Why choose HopinCab?</h2>
            <ul className="space-y-3 text-gray-300">
              {reasons.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-800 bg-black p-8">
              <h2 className="mb-4 text-2xl font-bold">Book with confidence</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Call / WhatsApp:{' '}
                  <a href="tel:+64212458155" className="font-semibold text-orange-400 hover:text-orange-300">
                    +64 21 245 8155
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:resv@hopincab.com"
                    className="font-semibold text-orange-400 hover:text-orange-300"
                  >
                    resv@hopincab.com
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-black p-8">
              <h2 className="mb-4 text-2xl font-bold">Payment options</h2>
              <ul className="space-y-3 text-gray-300">
                {paymentOptions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-4xl rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8 text-center">
          <h2 className="text-3xl font-bold">Keep calm and trust HopinCab</h2>
          <p className="mt-4 text-lg text-gray-200">
            Stress-free transfers, every time.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
