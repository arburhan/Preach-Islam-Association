'use client';

import { useState } from 'react';
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import Image from 'next/image';
const logoSrc = '/logo.png';

import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
// using Next.js Image for optimized images


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo & Brand */}
            <NextLink href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src={logoSrc} alt="প্রিচ ইসলাম অ্যাসোসিয়েশন | Preach Islam Association" width={50} height={50} />
              
              <div className="flex flex-col">
                <p className="font-bold text-[16px] text-primary">প্রিচ ইসলাম অ্যাসোসিয়েশন</p>
                <p className="text-xs text-gray-600 hidden sm:block   ">স্বেচ্ছাসেবী সংস্থা</p>
              </div>
            </NextLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {siteConfig.navItems.map((item) => (
                <NextLink
                  key={item.href}
                  href={item.href}
                  className="px-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200   "
                >
                  {item.label}
                </NextLink>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                isExternal
                as={Link}
                className="hidden sm:flex   "
                color="primary"
                href={siteConfig.links.sponsor}
                variant="flat"
              >
                সাহায্য করুন
              </Button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <IoCloseSharp className="w-6 h-6" />
                ) : (
                  <TiThMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-2">
                {siteConfig.navItems.map((item) => (
                  <NextLink
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200   "
                  >
                    {item.label}
                  </NextLink>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
