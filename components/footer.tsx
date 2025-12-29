'use client';

import NextLink from 'next/link';
import { siteConfig } from '@/config/site';

import { FaSquarePhoneFlip, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Image } from '@heroui/image';



// Mosque Icon Component
const MosqueIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 -64 640 640" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160H0v320zm579.16-192c17.86-17.39 28.84-37.34 28.84-58.91 0-52.86-41.79-93.79-87.92-122.9-41.94-26.47-80.63-57.77-111.96-96.22L400 0l-8.12 9.97c-31.33 38.45-70.01 69.76-111.96 96.22C233.79 135.3 192 176.23 192 229.09c0 21.57 10.98 41.52 28.84 58.91h358.32zM608 320H192c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h32v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h32c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM64 0S0 32 0 96v32h128V96c0-64-64-96-64-96z" />
  </svg>
);

// Facebook Icon Component
const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "আমাদের সম্পর্কে", href: "/" },
    { name: "লক্ষ্য ও উদ্দেশ্য", href: "/docs" },
    { name: "সেবা সমূহ", href: "/pricing" },
    { name: "পরিচালনা কমিটি", href: "/blog" },
    { name: "যোগাযোগ", href: "/about" },
  ];

  const supportLinks = [
    { name: "সেবা সমূহ", href: "/pricing" },
    { name: "যোগাযোগ", href: "/about" },
    { name: "ইভেন্টস", href: "/blog" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Image src={siteConfig.logoSrc} alt="প্রিচ ইসলাম অ্যাসোসিয়েশন | Preach Islam Association" width={50} height={50} />
                
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">প্রিচ ইসলাম অ্যাসোসিয়েশন</h3>
                <p className="text-blue-400 font-semibold">স্বেচ্ছাসেবী সংস্থা</p>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <FaSquarePhoneFlip  className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">যোগাযোগ</p>               
                  <NextLink
                href={`tel:${siteConfig.mobile}`} >
                    <span className="text-blue-400 font-bold text-lg">{siteConfig.mobile} </span>
              </NextLink>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-blue-400" />
                </div>
                <div>
               
                  <p className="text-white font-semibold">ইমেইল</p>
                <NextLink
                href={`mailto:${siteConfig.email}`} >
                    <span className="text-gray-300">{siteConfig.email} </span>
              </NextLink>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt  className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">অফিস</p>
                  <p className="text-gray-300">{siteConfig.location}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <FaClock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">সেবার সময়</p>
                  <p className="text-gray-300">২৪/৭ উপলব্ধ</p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">ফেসবুক</p>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors duration-200">
                    facebook.com/preach-islam
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NextLink
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">সহায়তা</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <NextLink
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </NextLink>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-red-600/20 border-2 border-red-500/30 rounded-xl">
              <h5 className="font-bold text-red-300 mb-3 text-lg">জরুরি সাহায্য</h5>
              <NextLink
                href={`tel:${siteConfig.mobile}`}
                className="text-red-200 hover:text-white transition-colors duration-200 flex items-center space-x-2 font-semibold"
              >
                <span>এখনই কল করুন <br /> +8801772-084789 </span>
                
              </NextLink>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-center md:text-left">
              © {year} প্রিচ ইসলাম অ্যাসোসিয়েশন। সকল অধিকার সংরক্ষিত।
            </div>

            <div className="flex items-center space-x-8">
              <NextLink
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                গোপনীয়তা নীতি
              </NextLink>
              <NextLink
                href="/"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                শর্তাবলী
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
