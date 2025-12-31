'use client';

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function AuthErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl border-2 border-red-200">
                    <CardBody className="p-12 text-center">
                        <FaTimes className="text-6xl text-red-600 mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            লগইন ব্যর্থ
                        </h1>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            আপনার লগইন লিঙ্কটি মেয়াদ উত্তীর্ণ হয়ে গেছে অথবা অবৈধ।
                            অনুগ্রহ করে আবার চেষ্টা করুন।
                        </p>

                        <div className="space-y-3">
                            <Button
                                as={Link}
                                href="/auth/login"
                                color="primary"
                                size="lg"
                                className="w-full font-bold"
                            >
                                আবার লগইন করুন
                            </Button>
                            <Button
                                as={Link}
                                href="/"
                                variant="bordered"
                                size="lg"
                                className="w-full"
                            >
                                হোম পেজে ফিরে যান
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
}
