import { ClockIcon, ShieldCheckIcon, MapPinIcon, UserGroupIcon, CalendarIcon, CurrencyDollarIcon, CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';

export const metadata = {
  title: 'Services | HopInCab',
  description: 'Explore HopInCab&apos;s full range of services: airport transfers, guided tours, cruise ship transfers, luxury vehicle hire, MICE, weddings, multilingual drivers, and car rentals in Auckland.'
};

const services = [
  {
    title: 'Tours',
    description: 'Discover Auckland&apos;s wonders with Hopincab&apos;s guided tours. Our friendly drivers offer insightful commentary, ensuring you experience the city&apos;s highlights and hidden gems comfortably and informatively.',
    icon: <MapPinIcon className="h-10 w-10 text-blue-600" />,
    price: 'From $99'
  },
  {
    title: 'Transfers',
    description: 'Seamlessly transition from Auckland Airport to your destination with our reliable transfer services. Our prompt and courteous drivers guarantee a stress-free journey, whether you&apos;re heading to a hotel, business meeting, or tourist attraction.',
    icon: <ClockIcon className="h-10 w-10 text-blue-600" />,
    price: 'From $70'
  },
  {
    title: 'Cruise Ship Transfers',
    description: 'Ensure a smooth start and end to your cruise adventure with Hopincab&apos;s efficient cruise ship transfer services. Our drivers ensure timely pickups and drop-offs at Auckland&apos;s cruise terminals, allowing you to embark and disembark with ease.',
    icon: <UserGroupIcon className="h-10 w-10 text-blue-600" />,
    price: 'From $39'
  },
  {
    title: 'MICE (Meetings, Incentives, Conferences, Exhibitions) Services',
    description: 'Trust Hopincab to facilitate your corporate event transportation needs in Auckland. From airport transfers for delegates to shuttle services between venues, we ensure seamless logistics for your MICE activities.',
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
    price: 'Enquire'
  },
  {
    title: 'Luxury Vehicle Hire',
    description: 'Elevate your travel experience with Hopincab&apos;s luxury vehicle hire service in Auckland. Whether it&apos;s a special occasion or you simply prefer premium transportation, our fleet of upscale vehicles ensures comfort and style.',
    icon: <CalendarIcon className="h-10 w-10 text-blue-600" />,
    price: 'From $199'
  },
  {
    title: 'Weddings',
    description: 'Make your wedding day unforgettable with Hopincab&apos;s wedding transportation services. Our reliable drivers and elegant vehicles cater to your every need, ensuring you arrive at your venue in style and on time.',
    icon: <CheckCircleIcon className="h-10 w-10 text-blue-600" />,
    price: 'Enquire'
  },
  {
    title: 'Multilingual Driver Guides',
    description: 'Experience personalized service with Hopincab&apos;s multilingual driver guides. Whether you speak English, Spanish, Mandarin, or another language, our drivers ensure clear communication and enhanced experiences for all travelers.',
    icon: <PhoneIcon className="h-10 w-10 text-blue-600" />,
    price: 'Enquire'
  },
  {
    title: 'Hire a Car',
    description: 'Looking for convenient transportation? Choose Hopincab&apos;s car rental service. With a simple booking process and a variety of vehicle options, renting a car with us is easy and hassle-free. Enjoy the freedom to explore Auckland and beyond at your own pace.',
    icon: <MapPinIcon className="h-10 w-10 text-blue-600" />,
    price: 'From $69 Per Day'
  }
];

export default function Services() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-black text-white border-b border-gray-800">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">Premium transportation solutions, 24/7. Book a cab, van, or tour in seconds.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-800 flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-800 p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 flex-1">{service.description}</p>
                  <div className="flex gap-2 mt-4">
                    <span className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold cursor-default">
                      {service.price}
                    </span>
                    <Link 
                      href="/contact-us" 
                      className="inline-flex items-center bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">We offer customized transportation services to meet your specific requirements. Contact us to discuss your needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact-us" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="tel:+64212458155" 
              className="bg-transparent border-2 border-white hover:bg-gray-800 px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +64 21 245 8155
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
