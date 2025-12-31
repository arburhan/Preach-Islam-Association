"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { FaUserPlus } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                router.push('/auth/check-email');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('সার্ভার সমস্যা হয়েছে');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <FaUserPlus className="text-5xl text-primary-600 mx-auto mb-4" />
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                রেজিস্ট্রেশন করুন
                            </h1>
                            <p className="text-gray-600">
                                প্রিচ ইসলাম অ্যাসোসিয়েশনে যোগ দিন
                            </p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                isRequired
                                type="text"
                                label="পূর্ণ নাম"
                                placeholder="আপনার পূর্ণ নাম লিখুন"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                variant="bordered"
                                color="primary"
                                size="lg"
                            />

                            <Input
                                isRequired
                                type="email"
                                label="ইমেইল"
                                placeholder="example@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                variant="bordered"
                                color="primary"
                                size="lg"
                            />

                            <Input
                                isRequired
                                type="tel"
                                label="মোবাইল নম্বর"
                                placeholder="01XXX-XXXXXX"
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
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
                                {isSubmitting ? 'রেজিস্ট্রেশন হচ্ছে...' : 'রেজিস্ট্রেশন করুন'}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                            <Link href="/auth/login" className="text-primary-600 font-semibold hover:underline">
                                লগইন করুন
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
}
