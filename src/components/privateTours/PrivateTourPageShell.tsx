import Link from 'next/link';
import { ReactNode } from 'react';
import PageLayout from '@/components/layout/PageLayout';

type PrivateTourPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  footerTitle?: string;
  footerText?: string;
};

export default function PrivateTourPageShell({
  eyebrow,
  title,
  intro,
  children,
  footerTitle = 'Ready to plan?',
  footerText = 'Tell HopinCab your dates, group size, and preferred stops and we will help shape the right private experience for your trip.',
}: PrivateTourPageShellProps) {
  return (
    <PageLayout>
      <section className="border-b border-gray-800 bg-black px-4 pb-14 pt-24 text-white">
        <div className="container mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
            {eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Enquire About This Tour
            </Link>
            <Link
              href="/booknow"
              className="rounded-lg border border-gray-700 px-6 py-3 text-center font-semibold text-white transition-colors hover:border-white"
            >
              Book Transport
            </Link>
          </div>
        </div>
      </section>

      {children}

      <section className="border-t border-gray-800 bg-gray-950 px-4 py-16 text-white">
        <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-gray-800 bg-black p-8">
            <h2 className="mb-4 text-2xl font-bold">Planning notes</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                The best private tours start with a clear idea of your timing, pickup point, group size,
                and any must-do stops. That helps shape a realistic route and the right vehicle.
              </p>
              <p>
                If you already have a shortlist of places, send it through. If not, HopinCab can suggest a
                route based on your interests and how much time you want to spend on the road.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-orange-500/40 bg-orange-500/10 p-8">
            <h2 className="mb-4 text-2xl font-bold">{footerTitle}</h2>
            <p className="mb-6 text-gray-200">{footerText}</p>
            <div className="space-y-3">
              <Link
                href="/contact-us"
                className="block rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Contact HopinCab
              </Link>
              <a
                href="tel:+64212458155"
                className="block rounded-lg border border-gray-700 px-5 py-3 text-center font-semibold text-white transition-colors hover:border-white"
              >
                +64 21 245 8155
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
