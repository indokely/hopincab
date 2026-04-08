'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { privateTourItems } from '@/lib/privateTours';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivateToursOpen, setIsPrivateToursOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsPrivateToursOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-md py-2' : 'bg-black py-4'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tight text-white">HopinCab</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link>
          <Link href="/private-transfers" className="text-gray-200 hover:text-white transition-colors">Private Transfers</Link>
          <div className="group relative flex items-center">
            <button
              type="button"
              className="flex items-center gap-2 text-gray-200 transition-colors hover:text-white"
              aria-haspopup="true"
            >
              Private Tours
              <svg className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[32rem] rounded-xl border border-gray-800 bg-black/95 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <Link
                href="/private-tours"
                className="block rounded-lg px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-900"
              >
                All Private Tours
              </Link>
              {privateTourItems.map((tour) => (
                <Link
                  key={tour.slug}
                  href={`/private-tours/${tour.slug}`}
                  className="block rounded-lg px-4 py-3 leading-snug text-gray-200 transition-colors hover:bg-gray-900 hover:text-white"
                >
                  {tour.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about-us" className="text-gray-200 hover:text-white transition-colors">About Us</Link>
          <Link href="/contact-us" className="text-gray-200 hover:text-white transition-colors">Contact</Link>
          <Link 
            href="/booknow" 
            className="ml-4 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center shadow"
          >
            Book Now <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg border-t border-gray-800">
          <div className="px-4 py-2 space-y-4 pb-4">
            <Link href="/services" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">Services</Link>
            <Link href="/private-transfers" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">Private Transfers</Link>
            <div className="rounded-md border border-gray-800 bg-gray-950">
              <button
                type="button"
                onClick={() => setIsPrivateToursOpen((open) => !open)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-gray-200"
                aria-expanded={isPrivateToursOpen}
              >
                <span>Private Tours</span>
                <svg className={`h-4 w-4 transition-transform ${isPrivateToursOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isPrivateToursOpen && (
                <div className="space-y-1 border-t border-gray-800 px-2 py-2">
                  <Link
                    href="/private-tours"
                    onClick={closeMobileMenu}
                    className="block rounded-md px-3 py-2 font-semibold text-white hover:bg-gray-900"
                  >
                    All Private Tours
                  </Link>
                  {privateTourItems.map((tour) => (
                    <Link
                      key={tour.slug}
                      href={`/private-tours/${tour.slug}`}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-2 text-sm leading-snug text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      {tour.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about-us" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">About Us</Link>
            <Link href="/contact-us" onClick={closeMobileMenu} className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">Contact</Link>
            <Link 
              href="/booknow" 
              onClick={closeMobileMenu}
              className="block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center shadow"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
