'use client';

import Link from 'next/link';
import React from 'react';
import "./styles.css"
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
];

const Headers = () => {
  const pathname = usePathname();

  return (
    <header className="shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <nav className="flex space-x-4 w-full justify-between">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex-1 text-center px-4 py-2 rounded-md text-lg font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-700'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Headers;
