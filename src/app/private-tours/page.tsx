import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { privateTourItems } from '@/lib/privateTours';

export const metadata = {
  title: 'Private Tours | HopinCab',
  description: 'Browse HopinCab private tour options in and around Auckland.',
};

export default function PrivateToursPage() {
  return (
    <PageLayout>
      <section className="border-b border-gray-800 bg-black px-4 pb-10 pt-24 text-white">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Private Tours
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Personalized travel experiences with HopinCab
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            These pages are now live in the navigation. Content can be expanded next once you share the
            final copy for each tour category.
          </p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {privateTourItems.map((tour) => (
            <Link
              key={tour.slug}
              href={`/private-tours/${tour.slug}`}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-orange-500 hover:bg-gray-950"
            >
              <h2 className="mb-3 text-2xl font-bold">{tour.title}</h2>
              <p className="mb-4 text-gray-300">{tour.summary}</p>
              <span className="font-semibold text-orange-500">Open page</span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
