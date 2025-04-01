'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Link One', href: '/link-one' },
    { title: 'Link Two', href: '/link-two' },
    { title: 'Link Three', href: '/link-three' },
    { title: 'Link Four', href: '/link-four', hasDropdown: true },
  ];

  const dropdownLinks = [
    {
      group: 'Page group one',
      pages: [
        { title: 'Page One', href: '/page-one' },
        { title: 'Page Two', href: '/page-two' },
        { title: 'Page Three', href: '/page-three' },
        { title: 'Page Four', href: '/page-four' },
      ],
    },
    {
      group: 'Page group two',
      pages: [
        { title: 'Page Five', href: '/page-five' },
        { title: 'Page Six', href: '/page-six' },
        { title: 'Page Seven', href: '/page-seven' },
        { title: 'Page Eight', href: '/page-eight' },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  {link.title}
                  {link.hasDropdown && <span className="ml-1">▼</span>}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
                    {dropdownLinks.map((group, groupIndex) => (
                      <div key={groupIndex}>
                        <div className="px-4 py-2 text-sm text-gray-700 font-semibold bg-gray-50">
                          {group.group}
                        </div>
                        {group.pages.map((page, pageIndex) => (
                          <Link
                            key={pageIndex}
                            href={page.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {page.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.title}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4">
                    {dropdownLinks.map((group, groupIndex) => (
                      <div key={groupIndex} className="mt-2">
                        <div className="px-3 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                          {group.group}
                        </div>
                        {group.pages.map((page, pageIndex) => (
                          <Link
                            key={pageIndex}
                            href={page.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {page.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
