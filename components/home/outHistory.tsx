'use client';

import { useEffect, useState, useRef } from 'react';
import {
  FiTarget,
  FiUsers,
  FiGlobe,
  FiHeart,
} from 'react-icons/fi';
import { IoIosRocket } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { title, subtitle } from '@/components/primitives';



const icons = [IoIosRocket, FiTarget, FiUsers, FiHeart, FaAward, FiGlobe];

const milestones = [
  {
    year: '২০১৭',
    title: 'অঙ্কুর',
    description: 'রোহিঙ্গা ক্রাইসিসে সেবামুলক কাজ করা দিয়ে শুরু হয় আমাদের যাত্রা।',
    icon: 0,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '২০২০',
    title: 'সম্প্রসারণ',
    description: 'করোনা মহামারীর সময় বিভিন্ন সেবামূলক কার্যক্রমে অংশগ্রহণের মাধ্যমে আমাদের কার্যক্রম সম্প্রসারিত হয়।',
    icon: 1,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '১১ নভেম্বর ২০২৩',
    title: 'প্রাতিষ্ঠানিক কার্যক্রম',
    description: 'অফিস ভাড়া নিয়ে প্রাতিষ্ঠানিক সেবামুলক প্রতিষ্ঠানের কার্যক্রম শুরু । ',
    icon: 2,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '২৪ জুন ২০২৪',
    title: 'নামকরন',
    description: 'সেবামুলক কাজ আরো বেগবান করতে অনুষ্ঠিত সভায় "প্রিচ ইসলাম অ্যাসোসিয়েশন" নাম প্রস্তাব করা হয় । ',
    icon: 3,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    year: '৩১ আগস্ট ২০২৪',
    title: 'স্বীকৃতি',
    description: 'সেচ্ছাসেবী সংগঠন হিশেবে সমাজ সেবা অধিদপ্তর থেকে নিবন্ধন প্রাপ্ত ।',
    icon: 4,
    color: 'from-yellow-500 to-orange-500',
  }/* ,
  {
    year: '২৪ জুন ২০২৪',
    title: 'আন্তর্জাতিক সম্প্রসারণ',
    description: 'বিদেশী সংস্থা এবং আন্তর্জাতিক নেটওয়ার্কের সাথে যোগাযোগ স্থাপন করা হয়।',
    icon: 5,
    color: 'from-red-500 to-rose-500',
  }, */

];

export const OurHistory = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(Array(milestones.length).fill(true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={title({ size: "sm", class: "mb-4" })}>আমাদের যাত্রা</h2>
          <p className={subtitle({ size: "sm" })}>প্রিচ ইসলাম অ্যাসোসিয়েশনের প্রতিষ্ঠা থেকে আজকের অবস্থান পর্যন্ত একটি অনুপ্রেরণামূলক যাত্রা</p>
        </div>


        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => {
              const IconComponent = icons[milestone.icon];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className={`flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  style={{
                    animation: visibleItems[index] ? `slideInWithBounce 0.6s ease-out ${index * 150}ms forwards` : 'none',
                    opacity: visibleItems[index] ? 1 : 0,
                  }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="md:hidden mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-br ${milestone.color}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50">
                      <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${milestone.color} mb-2`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon - Desktop Only */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full shadow-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center relative z-20 border-4 border-white transform hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Pulse animation */}
                    <div
                      className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} blur-lg opacity-50`}
                      style={{
                        animation: visibleItems[index] ? `pulse 2s ease-in-out infinite` : 'none',
                      }}
                    />
                  </div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden md:flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            আমরা এই যাত্রায় আপনাদের সকলকে সাথে নিতে চাই। আমাদের লক্ষ্য অর্জনে অংশীদার হোন।
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            আমাদের সাথে যোগ দিন
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInWithBounce {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};
