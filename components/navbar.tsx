'use client';

import { useState } from 'react';
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import Image from 'next/image';


import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo & Brand */}
            <NextLink href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <Image src={siteConfig.logoSrc} alt="প্রিচ ইসলাম অ্যাসোসিয়েশন | Preach Islam Association" width={50} height={50} />
              
              <div className="flex flex-col">
                <p className="font-bold text-[16px] text-primary">প্রিচ ইসলাম অ্যাসোসিয়েশন</p>
                <p className="text-xs text-gray-600 hidden sm:block">স্বেচ্ছাসেবী সংস্থা</p>
              </div>
            </NextLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {siteConfig.navItems.map((item, idx) => (
                item.children ? (
                  <div key={item.href || idx} className="relative group">
                    <NextLink
                      href={item.href}
                      className="px-3 py-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </NextLink>

                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="flex flex-col py-1">
                        {item.children.map((child: any) => (
                          <NextLink
                            key={child.href}
                            href={child.href}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {child.label}
                          </NextLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NextLink
                    key={item.href || idx}
                    href={item.href}
                    className="px-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </NextLink>
                )
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
                দান করুন
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
                {siteConfig.navItems.map((item, idx) => (
                  <div key={item.href || idx}>
                    <NextLink
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200 flex items-center justify-between"
                    >
                      {item.label}
                    </NextLink>
                    {item.children && (
                      <div className="flex flex-col pl-4 mt-1">
                        {item.children.map((child: any) => (
                          <NextLink
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors duration-200"
                          >
                            {child.label}
                          </NextLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
