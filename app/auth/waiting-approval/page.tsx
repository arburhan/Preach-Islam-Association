'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaClock, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WaitingApprovalPage() {
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
                <Card className="shadow-2xl border-2 border-yellow-200">
                    <CardBody className="p-12 text-center">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            className="inline-block mb-6"
                        >
                            <FaClock className="text-6xl text-yellow-600" />
                        </motion.div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            অনুমোদনের অপেক্ষায়
                        </h1>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            আপনার ইমেইল সফলভাবে যাচাই হয়েছে!
                        </p>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                            <p className="text-gray-700 font-semibold mb-2">
                                আপনার অ্যাকাউন্ট বর্তমানে পেন্ডিং অবস্থায় রয়েছে
                            </p>
                            <p className="text-sm text-gray-600">
                                অ্যাডমিন আপনার অ্যাকাউন্ট পর্যালোচনা করে অনুমোদন দিলে আপনি একটি
                                ইমেইল পাবেন। তারপর আপনি লগইন করতে পারবেন।
                            </p>
                        </div>

                        <div className="text-sm text-gray-500 mb-4">
                            <p>ধৈর্য ধরার জন্য ধন্যবাদ</p>
                            <p className="mt-2">
                                যোগাযোগ: <a href="tel:+8801772084789" className="text-primary-600 hover:underline">
                                    +8801772-084789
                                </a>
                            </p>
                        </div>

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
