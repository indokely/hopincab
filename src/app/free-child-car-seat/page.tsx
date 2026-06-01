'use client';

import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ChevronDownIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  ClockIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

// Define the seat types for our interactive selector
const SEAT_TYPES = [
  {
    id: 'rear-facing',
    name: 'Infant Capsule',
    range: '0 - 12 Months',
    weight: 'Up to 13 kg',
    orientation: 'Rear-Facing',
    details: 'Equipped with a five-point harness, deep protective shell, and comfortable newborn inserts. Ideal for newborns and infants, providing maximum head, neck, and spine support.',
    nzStandard: 'Approved under AS/NZS 1754 or ECE R44/04 standards.'
  },
  {
    id: 'forward-facing',
    name: 'Toddler Car Seat',
    range: '1 - 4 Years',
    weight: '9 - 18 kg',
    orientation: 'Forward-Facing',
    details: 'Features side-impact protection, multi-position recline, and adjustable harness height. Designed for growing toddlers who have outgrown their infant capsules.',
    nzStandard: 'Fully compliant with New Zealand Land Transport safety regulations.'
  },
  {
    id: 'booster-seat',
    name: 'Booster Seat',
    range: '4 - 8 Years',
    weight: '15 - 36 kg',
    orientation: 'Forward-Facing (Belt-Positioning)',
    details: 'High-back booster that properly positions the vehicle\'s adult lap and shoulder belts across the child\'s hips and collarbone. Crucial for children under 148cm tall.',
    nzStandard: 'Meets rigorous international safety standards (UN/ECE or NZ).'
  }
];

const FAQS = [
  {
    question: "Is there really no extra charge for the child car seat?",
    answer: "Absolutely not. While most taxi companies and ride-shares in New Zealand charge $15–$30 per seat or require you to bring your own, HopinCab provides a certified, professionally cleaned child seat completely FREE of charge with every booking."
  },
  {
    question: "Do I need to request the child seat in advance?",
    answer: "No advance request is needed! Every single HopinCab vehicle is pre-equipped with an approved child seat as part of our standard service. However, if you require multiple seats (e.g., for twins or different age groups), please mention it in the special instructions during booking so we can accommodate your family perfectly."
  },
  {
    question: "What safety standards do your child seats meet?",
    answer: "Your child's safety is our absolute priority. All HopinCab child seats are fully certified and compliant with New Zealand transport standards (including AS/NZS 1754, ECE R44/04, or UN/ECE R129). Our drivers are thoroughly trained on correct harness adjustment and secure vehicle installation."
  },
  {
    question: "Is it legally required to use a child seat in New Zealand taxis?",
    answer: "Yes. Under New Zealand law, all children under the age of 7 must be secured in an approved, age-appropriate child restraint. While regular taxis have technical exemptions, HopinCab believes exemptions shouldn't compromise safety. We guarantee a secure, certified seat for every trip."
  },
  {
    question: "How are the child seats kept clean and hygienic?",
    answer: "We adhere to strict sanitization protocols. Every child seat undergoes deep vacuuming, medical-grade steam cleaning, and antibacterial sanitization after every single ride. Your child will travel in a spotless, fresh, and perfectly hygienic environment."
  }
];

export default function FreeChildCarSeatPage() {
  const [selectedSeat, setSelectedSeat] = useState(SEAT_TYPES[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Child Car Seat Service",
    "serviceType": "Family Airport Transfers",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HopinCab",
      "telephone": "+64 21 245 8155",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "47 garton drive, Massey",
        "addressLocality": "Auckland",
        "postalCode": "0614",
        "addressCountry": "NZ"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "description": "Complimentary certified child car seats included automatically with every HopinCab booking. Family-friendly private transfers and airport pickups across New Zealand.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "NZD",
      "description": "Included free with every vehicle booking"
    }
  };

  return (
    <PageLayout>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white px-4 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ea580c15,transparent_50%)]" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6 animate-pulse">
            <SparklesIcon className="h-4 w-4" />
            <span>Family First Transportation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Free Child Car Seat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Included Automatically
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            At HopinCab, we believe every family should travel safely and without added stress. 
            That is why every single booking in New Zealand comes with a complimentary, certified child car seat 
            &mdash; included automatically, at absolutely no extra charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booknow" 
              className="bg-white text-black font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Book a Family Ride
            </Link>
            <a 
              href="#seat-selector" 
              className="bg-gray-900 border border-gray-700 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition duration-300"
            >
              Explore Seat Options
            </a>
          </div>
        </div>
      </section>

      {/* THREE MAIN DIFFERENTIATORS */}
      <section className="py-16 bg-gray-950 text-white border-b border-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none" />
              <ShieldCheckIcon className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Certified Safety</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All seats strictly comply with New Zealand road laws. Safely and securely installed by our trained drivers prior to arrival.
              </p>
            </div>
            <div className="bg-black/40 border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none" />
              <HeartIcon className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pristine Hygiene</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hygiene is paramount. Every seat goes through complete medical-grade sanitization and deep steam cleaning after every single trip.
              </p>
            </div>
            <div className="bg-black/40 border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none" />
              <ClockIcon className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">75-Min Free Wait</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Arriving internationally? Take your time at customs or feeding your little ones. We offer a market-leading 75 minutes of free wait time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SEAT VISUALIZER */}
      <section id="seat-selector" className="py-20 bg-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Choose the Right Seat for Your Child</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We carry a complete inventory of certified seats tailored to all stages of childhood. Explore the specifications below.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SEAT_TYPES.map((seat) => (
              <button
                key={seat.id}
                onClick={() => setSelectedSeat(seat)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base border ${
                  selectedSeat.id === seat.id
                    ? 'bg-orange-500 border-orange-600 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-gray-900 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {seat.name}
              </button>
            ))}
          </div>

          {/* Dynamic Seat Content Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start backdrop-blur-sm">
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 inline-block mb-4">
                {selectedSeat.orientation}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-white">{selectedSeat.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{selectedSeat.details}</p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-6">
                <div>
                  <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Target Age Group</span>
                  <span className="text-white font-semibold">{selectedSeat.range}</span>
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Weight Class</span>
                  <span className="text-white font-semibold">{selectedSeat.weight}</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-72 bg-black/40 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-orange-400 mb-2 flex items-center gap-1.5 text-sm uppercase tracking-wide">
                  <ShieldCheckIcon className="h-4 w-4" />
                  NZ Safety Standard
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {selectedSeat.nzStandard}
                </p>
              </div>
              <div className="bg-gray-900/80 p-4 rounded-xl border border-gray-800 text-center">
                <span className="text-xs text-gray-400 block mb-1">Pricing for this option</span>
                <span className="text-xl font-bold text-white uppercase tracking-tight">FREE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything parents need to know about HopinCab&apos;s child car seat safety, regulations, and cleanliness.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-black/40 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus:bg-gray-900/30 transition-colors"
                  >
                    <span className="font-semibold text-white text-base md:text-lg pr-4">{faq.question}</span>
                    <ChevronDownIcon 
                      className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-orange-500' : ''
                      }`} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-gray-800' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-gray-300 text-sm md:text-base leading-relaxed bg-gray-900/10">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-black text-white border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#ea580c0d,transparent_50%)]" />
        <div className="container mx-auto px-4 max-w-4xl rounded-3xl border border-orange-500/40 bg-orange-500/10 p-10 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Family Transfer Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Make traveling with your little ones completely stress-free. Secure your HopinCab ride with a complimentary, premium child safety seat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/booknow" 
              className="bg-white text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-200 transition shadow-lg w-full sm:w-auto"
            >
              Book Now
            </Link>
            <Link 
              href="/contact-us" 
              className="text-white hover:text-orange-400 font-semibold transition flex items-center gap-1.5"
            >
              Have questions? Contact us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
