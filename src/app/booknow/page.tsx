import PageLayout from '../../components/layout/PageLayout';

export const metadata = {
  title: 'Book a Cab | HopInCab',
  description: 'Book your next ride or airport transfer with HopInCab. Fast, easy, and reliable cab booking in Auckland.'
};

import BookNowForm from './BookNowForm';

export default function BookNow() {
  return (
    <PageLayout>
      <section className="py-12 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Book a Cab</h1>
          <BookNowForm />
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-gray-400 font-bold">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 mb-6 text-lg text-gray-300 text-center">
            <div className="mb-1">
              <span className="font-semibold text-orange-500">Mobile:</span> <a href="tel:+64212458155" className="hover:underline">+64 21 245 8155</a>
            </div>
            <div>
              <span className="font-semibold text-orange-500">Email:</span> <a href="mailto:Resv@hopincab.com" className="hover:underline">Resv@hopincab.com</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
