import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { BookOpenIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Family Travel Blog & Safety Guides | HopinCab',
  description: 'Guides, tips, and road safety regulations for families travelling in New Zealand. Learn about taxi laws, airport transfer tips, and more.'
};

const blogPosts = [
  {
    slug: 'child-car-seat-rules-new-zealand-taxi',
    title: 'Child Car Seat Rules for Taxis in New Zealand — What Every Family Needs to Know',
    description: 'Understand New Zealand road laws regarding child restraints under 7, technical taxi exemptions, and why child safety should never have compromises.',
    date: 'June 1, 2026',
    readTime: '4 min read',
    category: 'Safety & Regulations',
    image: '/images/safety-certified.png', // Fallback or text based card
  },
  {
    slug: 'new-zealand-airport-transfer-families-child-seat',
    title: 'Travelling to New Zealand with Kids? How to Book a Stress-Free Airport Transfer',
    description: 'A complete guide for parents landing at NZ airports. Luggage advice, customs tips, and why a pre-equipped free child seat is a complete family game-changer.',
    date: 'June 1, 2026',
    readTime: '3 min read',
    category: 'Travel Guides',
    image: '/images/family-van.png',
  }
];

export default function BlogIndexPage() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white px-4 pt-24 pb-16 md:pt-32 md:pb-20 border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#ea580c10,transparent_50%)]" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
            <SparklesIcon className="h-4 w-4" />
            <span>Family Travel & Safety Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            HopinCab Insights
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted resource for family travel advice, road laws, and safety regulations in New Zealand. 
            Written by travel safety experts to guarantee smooth journeys.
          </p>
        </div>
      </section>

      {/* BLOG POSTS LIST */}
      <section className="py-20 bg-black text-white min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group relative flex flex-col bg-gray-900/40 border border-gray-850 hover:border-orange-500/30 rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>

                <div className="border-t border-gray-800 pt-5 mt-auto flex justify-between items-center">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-orange-500 group-hover:text-orange-400 font-semibold text-sm inline-flex items-center gap-1 transition-colors"
                  >
                    Read Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-950 text-white border-t border-gray-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Safe & Stress-Free Family Transfers</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Every HopinCab transfer comes standard with a complimentary child seat and 75-minute wait time. Experience the premium standard.
          </p>
          <Link 
            href="/booknow" 
            className="inline-flex items-center bg-orange-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/10"
          >
            Book a Family Ride
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
