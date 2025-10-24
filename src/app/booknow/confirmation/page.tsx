import PageLayout from '../../../components/layout/PageLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Booking Confirmed | HopInCab',
  description: 'Your Auckland cab booking has been received. Thank you for choosing HopInCab!'
};

export default function Confirmation() {
  return (
    <PageLayout>
      <section className="py-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <div className="bg-gray-900 rounded-2xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 shadow-lg flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
          <svg className="w-16 h-16 text-green-500 mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Booking Confirmed!</h1>
          <p className="text-base sm:text-lg text-gray-300 mb-6 text-center">Thank you for booking your ride with HopInCab.<br />We have received your details and will contact you soon to confirm your booking.</p>
          <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors w-full text-center">Back to Home</Link>
        </div>
      </section>
    </PageLayout>
  );
}
