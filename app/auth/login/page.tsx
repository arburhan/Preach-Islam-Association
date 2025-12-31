'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (submitted) {
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
        }
    }, [submitted, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/auth/send-magic-link', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (data.success) {
                setSubmitted(true);
                toast.success('লগইন লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে');
            } else {
                toast.error(data.message || 'এরর হয়েছে');
            }
        } catch (err) {
            console.error('Login error:', err);
            toast.error('সার্ভার সমস্যা হয়েছে');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
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
                    className="w-full max-w-md"
                >
                    <Card className="shadow-2xl border-2 border-green-200">
                        <CardBody className="p-12 text-center">
                            <FaEnvelope className="text-6xl text-green-600 mx-auto mb-6" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                ইমেইল চেক করুন
                            </h2>
                            <p className="text-gray-600 mb-6">
                                আপনার ইমেইলে একটি লগইন লিঙ্ক পাঠানো হয়েছে। লিঙ্কে ক্লিক করে লগইন করুন।
                            </p>
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

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl border-2 border-primary-200">
                    <CardBody className="p-8">
                        <div className="text-center mb-8">
                            <FaEnvelope className="text-5xl text-primary-600 mx-auto mb-4" />
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                লগইন করুন
                            </h1>
                            <p className="text-gray-600">
                                আপনার ইমেইলে একটি ম্যাজিক লিঙ্ক পাঠানো হবে
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                isRequired
                                type="email"
                                label="ইমেইল"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="bordered"
                                color="primary"
                                size="lg"
                            />

                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                className="w-full font-bold"
                                isLoading={isSubmitting}
                            >
                                {isSubmitting ? 'লিঙ্ক পাঠানো হচ্ছে...' : 'লিঙ্ক পাঠান'}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            নতুন ব্যবহারকারী?{' '}
                            <Link href="/auth/registration" className="text-primary-600 font-semibold hover:underline">
                                রেজিস্ট্রেশন করুন
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
}
