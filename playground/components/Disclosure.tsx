'use client';

import { useId, useState, type ReactNode } from 'react';

type DisclosureProps = {
  title: string;
  children: ReactNode;
};

export default function Disclosure({
  title,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="w-full max-w-2xl rounded-lg border border-gray-300 bg-white">
      <h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{title}</span>

          <span aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h2>

      <div
        id={contentId}
        role="region"
        aria-labelledby={contentId}
        hidden={!isOpen}
        className="border-t border-gray-200 px-4 py-4 text-gray-700"
      >
        {children}
      </div>
    </div>
  );
}