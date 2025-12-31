'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckEmailPage() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4">
            {/* Home Button */}
            <Link href="/" className="absolute top-6 left-6 z-10">
                <Button
                    color="primary"
                    variant="light"
                    startContent={<FaHome />}
                    className="font-semibold"
                >
                    হোম এ ফিরে যান
                </Button>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl border-2 border-green-200">
                    <CardBody className="p-12 text-center">
                        <FaEnvelope className="text-6xl text-green-600 mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            ইমেইল চেক করুন
                        </h1>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            আপনার ইমেইলে একটি যাচাইকরণ লিঙ্ক পাঠানো হয়েছে।
                            লিঙ্কে ক্লিক করে আপনার ইমেইল যাচাই করুন।
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-700">
                                <strong>গুরুত্বপূর্ণ:</strong> ইমেইল যাচাইয়ের পর আপনার অ্যাকাউন্ট
                                অ্যাডমিন দ্বারা অনুমোদিত হতে হবে।
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 mb-4">
                            ইমেইল না পেলে স্প্যাম ফোল্ডার চেক করুন
                        </p>

                        {/* Countdown */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200">
                            <p className="text-sm text-gray-600">
                                {countdown} সেকেন্ডে হোম পেজে ফিরে যাবেন...
                            </p>
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                                    style={{ width: `${(countdown / 10) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
}
