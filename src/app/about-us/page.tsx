import PageLayout from '../../components/layout/PageLayout';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | HopInCab',
  description: 'Learn more about HopInCab, Auckland’s trusted cab and tour provider. Discover our mission, values, and commitment to customer satisfaction.'
};

export default function AboutUs() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[40vh] bg-black text-white text-center px-4 pt-24 pb-10 border-b border-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">About Hopincab</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6 text-gray-300">Auckland’s trusted airport transfer and tour provider. Reliable, safe, and affordable rides—24/7.</p>
        <div className="flex gap-6 mt-4 justify-center">
          <a href="https://www.kayak.com.au/Auckland.2575.guide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-5 py-2 rounded-lg shadow transition border border-gray-700">
            <img src="/images/kayak-logo.png" alt="Kayak" className="h-7" />
            <span className="font-semibold text-gray-200">Featured on Kayak</span>
          </a>
          <a href="https://www.getyourguide.com/-s356637" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-5 py-2 rounded-lg shadow transition border border-gray-700">
            <img src="/images/getyourguide.svg" alt="GetYourGuide" className="h-7 w-7 rounded" />
            <span className="font-semibold text-gray-200">GetYourGuide Partner</span>
          </a>
        </div>
      </section>

      {/* ABOUT & WHAT WE DO */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="mb-8 text-gray-300">We specialize in efficient and reliable transportation solutions, ensuring you reach your destination comfortably and on time. Our courteous drivers and well-maintained vehicles guarantee a safe and enjoyable journey. Whether it&apos;s a ride to the airport, a city tour, or everyday travel, Hopincab is here to serve you with convenience and affordability. Experience seamless rides with us—your satisfaction is our priority.</p>
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="mb-8 text-gray-300">From swift airport transfers to personalized tours, our dedicated team ensures a comfortable and reliable travel experience. Our fleet includes cabs and spacious vans to cater to various needs. Whether you&apos;re arriving or departing, count on us for safe, affordable, and punctual transportation. Your journey is our priority, and we strive to make every ride with us a smooth and enjoyable one.</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Hopincab?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">24/7 Service</h4>
              <p className="text-gray-300">We’re always available for airport transfers, tours, and city rides—day or night.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Professional Drivers</h4>
              <p className="text-gray-300">Our team is experienced, courteous, and dedicated to your safety and comfort.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Transparent Pricing</h4>
              <p className="text-gray-300">No surprises—just honest, competitive fares for every ride.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Modern Fleet</h4>
              <p className="text-gray-300">Clean, well-maintained cabs and vans for every group size and need.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Easy Booking</h4>
              <p className="text-gray-300">Book online in seconds, and get instant confirmation for your ride.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-500">Customer First</h4>
              <p className="text-gray-300">We go the extra mile to ensure every trip is smooth, safe, and enjoyable.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

