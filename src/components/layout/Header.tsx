'use client';

import { Button } from '@/components/ui/Button';
import { headerNavigation } from '@/lib/constants';
import { ChevronDown, Menu, Upload, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    // Close dropdown on Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="text-2xl font-bold text-gray-900">Software Recruitment co.</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {headerNavigation.map((item) => (
            <div
              key={item.name}
              className="relative group"
            >
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                onClick={() => toggleDropdown(item.name)}
              >
                {item.name}
                <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-400" />
              </button>
              <div
                ref={dropdownRef}
                className={`absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 ${
                  openDropdown === item.name ? 'block' : 'hidden'
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block rounded-lg px-4 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Upload CV
          </Button>
          <Button variant="primary">Contact us</Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-black/25"
          aria-hidden="true"
        />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="-m-1.5 p-1.5"
            >
              <span className="text-xl font-bold text-gray-900">Software Recruitment co.</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {headerNavigation.map((item) => (
                  <div
                    key={item.name}
                    className="space-y-1"
                  >
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 flex-none transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div className={`mt-2 space-y-2 ${openDropdown === item.name ? 'block' : 'hidden'}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-600 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 py-6">
                <Button
                  variant="outline"
                  className="w-full justify-center"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload CV
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
