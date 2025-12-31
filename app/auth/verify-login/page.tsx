'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { FaSpinner } from 'react-icons/fa';

export default function VerifyLoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        if (token) {
            handleVerification();
        } else {
            router.push('/auth/error');
        }
    }, [token]);

    const handleVerification = async () => {
        try {
            const result = await signIn('magic-link', {
                token,
                redirect: false,
            });

            if (result?.error) {
                if (result.error === 'Email not verified') {
                    router.push('/auth/email-not-verified');
                } else if (result.error === 'Account pending approval') {
                    router.push('/auth/waiting-approval');
                } else {
                    router.push('/auth/error');
                }
            } else if (result?.ok) {
                router.push('/dashboard/admin');
            } else {
                router.push('/auth/error');
            }
        } catch (error) {
            console.error('Verification error:', error);
            router.push('/auth/error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl">
                    <CardBody className="p-12 text-center">
                        <FaSpinner className="text-6xl text-primary-600 mx-auto mb-6 animate-spin" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            লগইন হচ্ছে...
                        </h2>
                        <p className="text-gray-600">
                            অনুগ্রহ করে অপেক্ষা করুন
                        </p>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    );
}
