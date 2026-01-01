'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <Card className="shadow-2xl border-2 border-primary-200">
          <CardBody className="p-12 md:p-16 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full">
                <FaCalendarAlt className="text-6xl text-primary-600" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              কোন ইভেন্ট নেই
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              বর্তমানে কোনো ইভেন্ট সংযোজিত হয়নি।
              <br />
              নতুন ইভেন্ট শীঘ্রই যোগ করা হবে, ইনশাআল্লাহ।
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-8"
            />

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8"
            >
              <p className="text-gray-700 text-sm md:text-base">
                💡 <strong>আপডেট পেতে:</strong> আমাদের সোশ্যাল মিডিয়া ফলো করুন এবং
                নতুন ইভেন্ট সম্পর্কে সবার আগে জানুন।
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                as={Link}
                href="/"
                color="primary"
                size="lg"
                startContent={<FaHome />}
                className="font-bold"
              >
                হোম এ ফিরে যান
              </Button>
              <Button
                as={Link}
                href="/contacts"
                variant="bordered"
                color="primary"
                size="lg"
                className="font-bold"
              >
                যোগাযোগ করুন
              </Button>
            </motion.div>

            {/* Footer Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-sm text-gray-500 mt-8"
            >
              প্রতিদিন আপডেট চেক করুন নতুন ইভেন্ট এর জন্য
            </motion.p>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
}
