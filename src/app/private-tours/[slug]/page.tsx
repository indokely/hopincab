import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { privateTourItems } from '@/lib/privateTours';

type PrivateTourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return privateTourItems.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PrivateTourPageProps) {
  const { slug } = await params;
  const tour = privateTourItems.find((item) => item.slug === slug);

  if (!tour) {
    return {
      title: 'Private Tours | HopinCab',
    };
  }

  return {
    title: `${tour.title} | HopinCab`,
    description: tour.summary,
  };
}

export default async function PrivateTourDetailPage({ params }: PrivateTourPageProps) {
  const { slug } = await params;
  const tour = privateTourItems.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <PageLayout>
      <section className="border-b border-gray-800 bg-black px-4 pb-10 pt-24 text-white">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Private Tours
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">{tour.title}</h1>
          <p className="max-w-2xl text-lg text-gray-300">{tour.summary}</p>
        </div>
      </section>

      <section className="bg-black px-4 py-16 text-white">
        <div className="container mx-auto max-w-3xl rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">Content Placeholder</h2>
          <p className="mb-4 text-gray-300">
            This page is connected in the main navigation and ready for your final content.
          </p>
          <p className="mb-8 text-gray-300">
            Share the copy, images, pricing, or itinerary details for {tour.title.toLowerCase()} and I will
            build the final page next.
          </p>
          <Link href="/private-tours" className="font-semibold text-orange-500 hover:text-orange-400">
            Back to all private tours
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
