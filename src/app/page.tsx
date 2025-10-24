import { ClockIcon, ShieldCheckIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon, PhoneIcon, EnvelopeIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../components/layout/PageLayout';
import BookNowInlineForm from '@/components/BookNowInlineForm';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const services: Service[] = [
  {
    title: 'Airport Transfer',
    description: 'Prompt and reliable airport transfers with professional drivers ensuring a smooth journey to or from Auckland Airport.',
    icon: <MapPinIcon className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'Private Tours',
    description: 'Discover Auckland with our tailored tours. Experience the best sights with our knowledgeable drivers.',
    icon: <ClockIcon className="h-10 w-10 text-blue-600" />
  },
  {
    title: 'Cab & Van Services',
    description: 'Spacious and comfortable cabs and vans for all your group transportation needs in Auckland.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
  }
];

const testimonials: Testimonial[] = [
  {
    quote: "Rahul was great to deal with, kept us updated on timing and the car was clean, good child car seats as well. Thanks Rahul!",
    author: "Amy Yeap",
    role: "Satisfied Customer"
  },
  {
    quote: "Super friendly and professional. We were traveling with a new baby, who was crying, and they took all the bags in the rain without blinking.",
    author: "Patrick Gamble",
    role: "Happy Traveler"
  },
  {
    quote: "Awesome service and great to have the car seat! Made traveling with our little one so much easier.",
    author: "Anita Hogan",
    role: "Family Traveler"
  }
];

export default function Home() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-black text-white text-center px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Auckland Airport Transfers<br className="hidden md:inline" /> & City Rides, 24/7</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-medium opacity-90">
          Hopincab makes getting to and from Auckland Airport fast, reliable, and affordable. Book a cab, van, or tour in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booknow" className="bg-white text-black font-bold px-8 py-4 rounded-lg text-lg shadow hover:bg-gray-100 transition">Book a Cab</Link>
          <Link href="/services" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-lg text-lg shadow hover:bg-orange-600 transition border border-orange-500">See Services</Link>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-gray-400 mb-4">Trusted by Auckland travelers</span>
          <hr className="w-48 border-gray-700 mb-2" />
          <div className="flex flex-wrap justify-center gap-10">
            <a href="https://www.tripadvisor.com/Attraction_Review-g1811027-d26857756-Reviews-HOPinCAB-Auckland_North_Island.html" target="_blank" rel="noopener noreferrer" title="TripAdvisor">
              <div className="bg-white p-2 rounded-xl shadow flex items-center justify-center">
                <img src="/images/tripadvisor.svg" alt="TripAdvisor" className="h-20 w-20 object-contain" />
              </div>
            </a>
            <a href="https://share.google/FupZw4azw8OOKMMWQ" target="_blank" rel="noopener noreferrer" title="Google Reviews">
              <div className="bg-white p-2 rounded-xl shadow flex items-center justify-center">
                <img src="/images/GoogleBusiness.png" alt="Google Reviews" className="h-20 w-20 object-contain" />
              </div>
            </a>
            <a href="https://www.viator.com/tours/Auckland/Unveiling-Aucklands-Treasures-A-4-Hour-City-Excursion/d391-444023P5" target="_blank" rel="noopener noreferrer" title="Viator">
              <div className="bg-white p-2 rounded-xl shadow flex items-center justify-center">
                <img src="/images/viator.png" alt="Viator" className="h-20 w-20 object-contain" />
              </div>
            </a>
            <a href="https://www.getyourguide.com/-s356637" target="_blank" rel="noopener noreferrer" title="GetYourGuide">
              <div className="bg-white p-2 rounded-xl shadow flex items-center justify-center">
                <img src="/images/getyourguide.svg" alt="GetYourGuide" className="h-20 w-20 object-contain" />
              </div>
            </a>
            <a href="https://www.kayak.com.au/Auckland.2575.guide" target="_blank" rel="noopener noreferrer" title="Kayak">
              <div className="bg-white p-2 rounded-xl shadow flex items-center justify-center">
                <img src="/images/kayak-logo.png" alt="Kayak" className="h-20 w-20 object-contain" />
              </div>
            </a>
          </div>
        </div> 
      </section>

      {/* BOOK NOW INLINE FORM */}
      {/* <BookNowInlineForm /> */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="rounded-xl p-8 mb-10 w-full text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Book Your Ride</h2>
            <p className="text-gray-400 mb-6">For instant bookings or queries, contact:</p>
            <div className="flex flex-col gap-3 items-center">
              <a href="tel:+64212458155" className="flex items-center gap-2 text-lg font-semibold text-orange-500 hover:underline">
                <PhoneIcon className="h-5 w-5 text-orange-500" />
                +64 21 245 8155
              </a>
              <a href="mailto:Resv@hopincab.com" className="flex items-center gap-2 text-lg font-semibold text-orange-500 hover:underline">
                <EnvelopeIcon className="h-5 w-5 text-orange-500" />
                Resv@hopincab.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition">
              <MapPinIcon className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-white">Airport Transfer</h3>
              <p className="text-gray-400">Prompt and reliable rides to and from Auckland Airport. Always on time, always comfortable.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition">
              <CalendarIcon className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-white">Tours</h3>
              <p className="text-gray-400">Discover Auckland with our tailored tours, guided by friendly, knowledgeable drivers.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow hover:shadow-lg transition">
              <UserGroupIcon className="h-10 w-10 text-white mb-4 mx-auto" />
              <h3 className="font-bold text-lg mb-2 text-white">Cab & Vans</h3>
              <p className="text-gray-400">Need more space? Our cabs and vans fit families, groups, or lots of luggage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Why Choose Hopincab?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Door 2 Door Service at the Price of Shuttle</h4>
              <p className="text-gray-400">Dependable, punctual, and stress-free. Get picked up and dropped off anywhere.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Affordability</h4>
              <p className="text-gray-400">Budget-friendly fares with no compromise on quality or comfort.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Convenience</h4>
              <p className="text-gray-400">Easy online booking, quick pickups, and a variety of vehicles for every need.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Friendly Service</h4>
              <p className="text-gray-400">Our drivers are local, professional, and genuinely care about your experience.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Versatility</h4>
              <p className="text-gray-400">Solo, family, or group—Hopincab adapts to your journey.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Safety</h4>
              <p className="text-gray-400">Experienced drivers and well-maintained vehicles for total peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT ABOUT */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-2 text-white">About Hopincab</h2>
          <p className="text-lg text-gray-400 mb-4">Hopincab is Auckland&apos;s trusted airport transfer and tour provider. We deliver safe, reliable, and affordable rides—24/7, anywhere in the city.</p>
          <Link href="/about-us" className="text-orange-500 font-semibold underline hover:text-orange-600">Learn more about us →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
