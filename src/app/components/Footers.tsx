'use client';

import Link from 'next/link';
import React from 'react';
import "./styles.css"



const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Unleashi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-2">
              <Link href="https://twitter.com" target="_blank" className="text-sm hover:underline">
                Twitter
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-sm hover:underline">
                Facebook
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-sm hover:underline">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  