'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl border border-gray-800 bg-black/40 overflow-hidden transition-all duration-300 hover:border-orange-500/20"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus:bg-gray-900/30 transition-colors"
            >
              <span className="font-semibold text-white text-base md:text-lg pr-4">
                {item.question}
              </span>
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
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
