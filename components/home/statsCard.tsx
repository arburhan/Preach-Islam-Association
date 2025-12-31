"use client";

import { useEffect, useState, useRef } from 'react';
import {
  FiUsers,
  FiHeart,
  FiAward,
  FiMapPin,
} from 'react-icons/fi';
import { title, subtitle } from '@/components/primitives';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isVisible?: boolean;
}

function Counter({ end, duration = 2000, suffix = '', isVisible = false }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: FiUsers,
      value: 0,
      label: 'সেবাপ্রাপ্ত',
      suffix: '+',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      description: 'সমাজের সকল মানুষ',
    },
    {
      icon: FiHeart,
      value: 0,
      label: 'স্বেচ্ছাসেবক',
      suffix: '+',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      description: 'সংগঠিত দল',
    },
    {
      icon: FiAward,
      value: 20,
      label: 'প্রকল্প',
      suffix: '+',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
      description: 'সক্রিয় উদ্যোগ',
    },
    {
      icon: FiMapPin,
      value: 1,
      label: 'জেলা',
      suffix: '+',
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-50 to-violet-50',
      description: 'সেবার পরিধি',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/20 relative overflow-hidden w-full">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={title({ size: "sm", class: "mb-4" })}>আমাদের অর্জন</h2>
          <p className={subtitle({ size: "sm" })}>প্রিচ ইসলাম অ্যাসোসিয়েশন সমাজের সকল শ্রেণীর মানুষের কল্যাণে নিবেদিত</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group relative bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                style={{
                  animation: isVisible ? `slideUp 0.6s ease-out ${index * 150}ms forwards` : 'none',
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.gradient} rounded-full transform translate-x-12 -translate-y-12`} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="text-center mb-4">
                    <div className="text-5xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                      <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                    </div>
                    <div className="text-lg font-bold text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.description}
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
