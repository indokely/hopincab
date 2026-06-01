import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  ClockIcon, 
  CalendarIcon, 
  SparklesIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Travelling to New Zealand with Kids? Stress-Free Airport Transfer Guide | HopinCab Blog',
  description: 'Landing in New Zealand with young children and toddlers? Read our comprehensive, stress-free family airport transfer guide.',
  openGraph: {
    title: 'Travelling to New Zealand with Kids? How to Book a Stress-Free Airport Transfer — HopinCab',
    description: 'Landing in New Zealand with young children? Read our comprehensive, stress-free family airport transfer guide.',
    type: 'article',
    publishedTime: '2026-06-01T08:00:00.000Z',
    authors: ['HopinCab Family Travel Experts'],
    section: 'Travel Guides'
  }
};

export default function BlogFamilyTransferGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Travelling to New Zealand with Kids? How to Book a Stress-Free Airport Transfer",
    "description": "A complete guide for parents landing at NZ airports. Luggage advice, customs tips, and why a pre-equipped free child seat is a complete family game-changer.",
    "datePublished": "2026-06-01T08:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "HopinCab Family Travel Experts"
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
      "@id": "https://hopincab.com/blog/new-zealand-airport-transfer-families-child-seat"
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
              Travel Guides
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Travelling to New Zealand with Kids? How to Book a Stress-Free Airport Transfer
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-800 py-4 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span>June 1, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-gray-500" />
                <span>3 min read</span>
              </div>
              <div>
                <span>By: HopinCab Family Travel Experts</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              Arriving at an airport after a long-haul flight is exhausting for anyone. But when you are traveling with babies, toddlers, or young children, landing in a new country can feel downright overwhelming. 
            </p>
            <p>
              Between customs clearances, baggage carousel delays, keeping children calm, and navigating massive airport terminals, the last thing you want is transport friction.
            </p>
            <p>
              In this comprehensive guide, we provide our top tips for a smooth arrival in New Zealand and outline exactly how to secure a stress-free airport transfer that puts your family first.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">1. The Golden Rule of NZ Arrivals: Take Your Time</h2>
            <p>
              New Zealand has some of the strictest biosecurity laws in the world. When you land, you must declare all food, outdoor gear, and biological items. The customs and biosecurity screening lines can take anywhere from 30 minutes to over an hour, especially during peak flight arrivals.
            </p>
            <p>
              <strong>The family trap:</strong> Many private shuttle or taxi services charge exorbitant fees if they have to wait for you, or they simply leave after 30 minutes. This creates massive pressure on parents to rush through customs while managing tired, hungry kids.
            </p>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 my-6 flex gap-4 items-start">
              <SparklesIcon className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">The HopinCab Advantage: 75 Minutes Free Waiting</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  HopinCab understands that families need breathing room. That is why we offer a market-leading <strong>75 minutes of complimentary wait time</strong> for all international arrivals. You can take your time at biosecurity, feed your baby, and collect your bags with complete peace of mind.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white pt-4">2. Avoid the Luggage and Stroller Lug-A-Thon</h2>
            <p>
              Traveling with children means traveling with gear: strollers, diaper bags, suitcases, and carry-ons. Carrying all of this through terminal exits, across parking garages, and onto public transport is stressful.
            </p>
            <p>
              To eliminate this hassle, ensure your airport transfer includes a **Meet and Greet** inside the terminal. Instead of queuing outside in the wind or rain at a taxi rank or searching for a ride-share parking zone:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Your professional HopinCab driver will be waiting for you inside the arrivals hall, holding a clear sign with your family name.</li>
              <li>Your driver will immediately take charge of your heaviest bags, helping you navigate through the terminal directly to the vehicle.</li>
              <li>Our fleet consists of spacious minivans and large passenger vans, giving you ample cargo space for all strollers and suitcases.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">3. The Game-Changer: Pre-Installed Child Safety Seats</h2>
            <p>
              In New Zealand, road safety is paramount, and child safety restraints are legally required for children under 7. Carrying your own heavy, bulky car seat across the world is a nightmare. renting one from taxi companies or ride-shares is expensive, often charging an extra $15–$30 with no cleanliness guarantees.
            </p>
            <p>
              HopinCab solves this seamlessly. **Every single booking in New Zealand includes a certified, professionally cleaned child safety car seat &mdash; provided completely FREE.**
            </p>
            <p>
              Your driver will have the correct seat (Infant capsule, forward-facing toddler seat, or belt-positioning booster seat) securely installed in the vehicle prior to picking you up. No struggling with seat belts or anchors in a dark parking lot after a long flight.
            </p>

            <div className="bg-gray-905 border border-gray-800 rounded-2xl p-6 my-8">
              <h3 className="font-bold text-white mb-4 text-lg">HopinCab Family Arrival Checklist:</h3>
              <ul className="space-y-3">
                <li className="flex gap-2.5 text-sm text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span><strong>Flight Monitoring:</strong> We track your flight in real-time. If you land early or get delayed, your driver adjusts automatically.</span>
                </li>
                <li className="flex gap-2.5 text-sm text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span><strong>Complimentary Seat:</strong> Certified baby capsule, toddler seat, or booster pre-installed for free.</span>
                </li>
                <li className="flex gap-2.5 text-sm text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span><strong>Terminal Meet & Greet:</strong> Hand over your luggage to your driver immediately upon landing.</span>
                </li>
                <li className="flex gap-2.5 text-sm text-gray-300">
                  <CheckCircleIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span><strong>No Ride-Sharing:</strong> Private, direct door-to-door transfer with no delays or extra stops.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white pt-4">How to Book Your Family Transfer</h2>
            <p>
              Booking is fast and simple. Visit our booking page, enter your flight details, pickup time, and destination. We will handle everything else automatically, ensuring the vehicle arrives equipped with a sanitized child seat.
            </p>
            <p>
              Travel safe, avoid the airport chaos, and give your family the premium welcome they deserve.
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
              Book Your Family Transfer
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
