import PageLayout from '../../components/layout/PageLayout';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Contact Us | HopInCab',
  description: 'Contact HopInCab for bookings, questions, or feedback. Phone, email, and address for Auckland’s trusted cab service.'
};

export default function ContactUs() {
  return (
    <PageLayout>
      {/* HERO */}
      {/* <section className="relative flex flex-col items-center justify-center min-h-[22vh] bg-black text-white text-center px-4 pt-24 pb-8 border-b border-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">Contact Us</h1>
      </section> */}

      {/* CONTACT INFO & FORM - Rajkumar */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 max-w-xl">
          {/* Contact Info */}
          <div className="mb-10 space-y-4 text-center">
            <div className="flex items-center justify-center">
              <MapPinIcon className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-gray-300">47 Garton Drive, Massey, Auckland, 0614 </span>
            </div>
            <div className="flex items-center justify-center">
              <PhoneIcon className="h-6 w-6 text-orange-500 mr-2" />
              <a href="tel:+64212458155" className="hover:underline text-gray-300">+64 21 245 8155</a>
            </div>
            <div className="flex items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 text-orange-500 mr-2" />
              <a href="mailto:Rahul@hopincab.com" className="hover:underline text-gray-300">Rahul@hopincab.com</a>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-6 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/></svg>
              <a href="https://www.facebook.com/people/HOP-in-CAB/61550752243172/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">Facebook</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1 text-gray-200">Name</label>
              <input id="name" name="name" type="text" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label htmlFor="mobile" className="block font-medium mb-1 text-gray-200">Mobile Number</label>
              <input id="mobile" name="mobile" type="tel" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="e.g. +64 21 245 8155" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1 text-gray-200">Email</label>
              <input id="email" name="email" type="email" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label htmlFor="service" className="block font-medium mb-1 text-gray-200">Service</label>
              <select id="service" name="service" required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500">
                <option value="">Select a service</option>
                <option value="Tours">Tours</option>
                <option value="Transfers">Transfers</option>
                <option value="Cruise Ship Transfers">Cruise Ship Transfers</option>
                <option value="MICE">MICE (Meetings, Incentives, Conferences, Exhibitions)</option>
                <option value="Luxury Vehicle Hire">Luxury Vehicle Hire</option>
                <option value="Weddings">Weddings</option>
                <option value="Multilingual Driver Guides">Multilingual Driver Guides</option>
                <option value="Hire a Car">Hire a Car</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1 text-gray-200">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">Send Message</button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
