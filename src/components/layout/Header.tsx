'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-md py-2' : 'bg-black py-4'}`}>
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-tight text-white">HopInCab</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-gray-200 hover:text-white transition-colors">Services</Link>
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
            <Link href="/services" className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">Services</Link>
            <Link href="/about-us" className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">About Us</Link>
            <Link href="/contact-us" className="block px-4 py-2 text-gray-200 hover:bg-gray-900 rounded-md">Contact</Link>
            <Link 
              href="/booknow" 
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
