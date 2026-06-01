import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  CalendarIcon, 
  ShieldCheckIcon,
  InformationCircleIcon 
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Child Car Seat Rules for Taxis in New Zealand | HopinCab Blog',
  description: 'A complete guide to New Zealand laws on child safety restraints in taxis, ride-shares, and private hires. Keep your family safe.',
  openGraph: {
    title: 'Child Car Seat Rules for Taxis in New Zealand — HopinCab',
    description: 'A complete guide to New Zealand laws on child safety restraints in taxis, ride-shares, and private hires.',
    type: 'article',
    publishedTime: '2026-06-01T08:00:00.000Z',
    authors: ['HopinCab Safety Team'],
    section: 'Safety & Regulations'
  }
};

export default function BlogCarSeatRulesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Child Car Seat Rules for Taxis in New Zealand — What Every Family Needs to Know",
    "description": "A complete guide to New Zealand road laws regarding child safety restraints under 7 years, technical taxi exemptions, and why safety should never be compromised.",
    "datePublished": "2026-06-01T08:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "HopinCab Safety Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HopinCab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hopincab.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hopincab.com/blog/child-car-seat-rules-new-zealand-taxi"
    }
  };

  return (
    <PageLayout>
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-black text-white px-4 pt-24 pb-20">
        <div className="container mx-auto max-w-3xl">
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 font-semibold mb-8 transition-colors text-sm"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
              Safety & Regulations
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Child Car Seat Rules for Taxis in New Zealand &mdash; What Every Family Needs to Know
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-800 py-4 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span>June 1, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-gray-500" />
                <span>4 min read</span>
              </div>
              <div>
                <span>By: HopinCab Safety Team</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              Planning a family trip to New Zealand is an exciting adventure. With stunning landscapes, beautiful beaches, and unique cultural experiences, there is so much to see. However, for parents traveling with infants or young children, navigating local transportation safety regulations can quickly become a source of confusion.
            </p>
            <p>
              One of the most frequent questions we receive is: <strong>&ldquo;Is a child car seat legally required in a taxi in New Zealand?&rdquo;</strong>
            </p>
            <p>
              In this guide, we break down New Zealand road safety regulations, explain the technical taxi exemptions, and discuss how you can guarantee your children travel with the highest level of safety.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">1. New Zealand Law: The Under-7 Safety Rule</h2>
            <p>
              Under New Zealand Land Transport law, safety is highly regulated. The fundamental rule is straightforward:
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 py-2 my-4 italic text-gray-200 bg-gray-900/30 rounded-r-xl pr-4">
              All children under the age of 7 years must be properly secured in an approved, age-appropriate child safety restraint whenever they travel in a motor vehicle.
            </blockquote>
            <p>
              This restraint must meet international safety standards (such as Australian/New Zealand Standard AS/NZS 1754, European Standard ECE R44/04 or ECE R129, or US Standard FMVSS 213).
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">2. The Technical &ldquo;Taxi Exemption&rdquo; &mdash; and Its Risks</h2>
            <p>
              Under the Land Transport (Road User) Rule 2004, there is a technical exemption for passenger service vehicles (taxis and ride-shares):
            </p>
            <p>
              <em>If a child restraint is not available in a passenger service vehicle, a child under the age of 7 may travel unsecured in the rear seat, provided they are buckled into a standard seat belt if possible.</em>
            </p>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 my-6 flex gap-4 items-start">
              <InformationCircleIcon className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Why the exemption is a major risk:</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Technical legal exemptions do not alter the laws of physics. In the event of sudden braking or a collision, a standard vehicle seat belt is physically incapable of properly protecting a child under 7. The lap belt sits too high on the stomach, and the shoulder belt crosses dangerous areas like the neck.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white pt-4">3. Why Most Taxis and Ride-Shares Don&apos;t Carry Seats</h2>
            <p>
              When landing at New Zealand airports, parents are often shocked to find that standard taxi ranks and ride-share vehicles do not carry child safety seats. There are two primary reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li><strong>Trunk Space:</strong> Child seats are bulky and take up valuable trunk space that taxi drivers prefer to save for luggage.</li>
              <li><strong>Expense & Friction:</strong> Buying, storing, and sterilizing multiple seats is expensive. Most ride-shares charge $15–$30 per seat per ride and require you to request it far in advance with no guarantees.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">4. The HopinCab Solution: Free Child Seats with Every Booking</h2>
            <p>
              At HopinCab, we believe safety is a basic right, not a paid luxury or a technical exemption. We believe that family travel should be safe, comfortable, and stress-free.
            </p>
            <p>
              That is why <strong>every single HopinCab booking in New Zealand comes with a complimentary, certified child car seat &mdash; included automatically, at absolutely no extra charge.</strong>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-1.5 text-sm">
                  <ShieldCheckIcon className="h-4 w-4 text-orange-500" />
                  Professionally Cleaned
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every child car seat undergoes a thorough medical-grade sanitization and steam cleaning process after every single ride.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-xl">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-1.5 text-sm">
                  <ShieldCheckIcon className="h-4 w-4 text-orange-500" />
                  Correctly Installed
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Our professional drivers are trained to securely install the correct seat for your child&apos;s age and weight class prior to pickup.
                </p>
              </div>
            </div>

            <p>
              We provide three types of certified safety restraints:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li><strong>Infant Capsule:</strong> Rear-facing support for newborns and infants up to 12 months.</li>
              <li><strong>Toddler Seat:</strong> Secure forward-facing harness for toddlers aged 1 to 4 years.</li>
              <li><strong>Booster Seat:</strong> High-back belt positioning for children aged 4 to 8 years.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">Conclusion: Travel Safe, Travel Smart</h2>
            <p>
              Exemptions shouldn&apos;t govern your children&apos;s road safety. By planning ahead and choosing a safety-first transportation provider like HopinCab, you can focus on making incredible family memories in New Zealand, knowing your little ones are safe.
            </p>
          </div>

          {/* Related pages callout */}
          <div className="border-t border-gray-855 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-900/30 border border-gray-800 p-6 rounded-3xl">
            <div>
              <h4 className="font-bold text-white mb-1">Our Child Car Seat Program</h4>
              <p className="text-sm text-gray-400">Read detailed specs on our certified seats, cleaning hygiene, and safety policies.</p>
            </div>
            <Link 
              href="/free-child-car-seat" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition flex-shrink-0"
            >
              Learn More
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="mt-8 text-center">
            <Link 
              href="/booknow" 
              className="inline-flex items-center justify-center bg-white text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              Book a Family Ride Now
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
