"use client";

import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaHeart, FaRing, FaGlobe, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { FaLock } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";


export default function MarriagePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 text-pink-500 text-6xl">
                        <FaHeart />
                    </div>
                    <div className="absolute top-40 right-20 text-purple-500 text-5xl">
                        <FaRing />
                    </div>
                    <div className="absolute bottom-20 left-1/4 text-blue-500 text-7xl">
                        <FaHeart />
                    </div>
                    <div className="absolute bottom-40 right-1/3 text-pink-400 text-6xl">
                        <FaRing />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Main Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-2xl">
                                <FaRing className="text-6xl text-white" />
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                        >
                            শীঘ্রই আসছে
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                বিবাহ ডটকম
                            </h2>
                            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-700">
                                <FaGlobe className="text-primary-600" />
                                <span className="font-semibold">bi-baho.com</span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
                        >
                            ইসলামিক বিবাহের জন্য একটি নিরাপদ ও বিশ্বস্ত প্ল্যাটফর্ম।
                            <br />
                            <span className="font-semibold text-primary-600">ইনশাআল্লাহ</span>, আমরা শীঘ্রই চালু করছি
                            একটি সম্পূর্ণ নতুন ওয়েবসাইট যেখানে মুসলিম ভাই-বোনেরা হালাল পথে জীবনসঙ্গী খুঁজে পাবেন।
                        </motion.p>

                        {/* Coming Soon Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="mb-12"
                        >
                            <Card className="inline-block shadow-xl bg-gradient-to-r from-pink-500 to-purple-600">
                                <CardBody className="px-4 md:px-8 py-4">
                                    <p className="text-white text-lg md:text-xl font-bold flex items-center gap-3">
                                        <FaHeart />
                                        <span>শীঘ্রই চালু হবে ইনশাআল্লাহ</span>
                                        <FaHeart />
                                    </p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Preview Section */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            যা থাকছে আমাদের প্ল্যাটফর্মে
                        </h3>
                        <p className="text-gray-600 text-lg">ইসলামিক নীতিমালা অনুসরণ করে তৈরি</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <FaLock />,
                                title: 'নিরাপদ ও সুরক্ষিত',
                                description: 'সম্পূর্ণ গোপনীয়তা এবং নিরাপত্তা নিশ্চিত',
                            },
                            {
                                icon: '☪️',
                                title: 'ইসলামিক নীতিমালা',
                                description: 'শরীয়াহ অনুসরণ করে ম্যাচিং',
                            },
                            {
                                icon: <FaCircleCheck />,
                                title: 'যাচাইকৃত প্রোফাইল',
                                description: 'সকল প্রোফাইল যাচাই করা এবং বিশ্বস্ত',
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                                    <CardBody className="p-8 text-center">
                                        <div className="flex justify-center text-5xl mb-6 text-green-700">
                                            {feature.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <Card className="shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
                            <CardBody className="p-12">
                                <FaEnvelope className="text-5xl text-primary-600 mx-auto mb-6" />
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                    আপডেট পেতে চান?
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    ওয়েবসাইট চালু হওয়ার সাথে সাথে আপডেট পেতে আমাদের সাথে যোগাযোগ করুন
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        as={Link}
                                        href="/contacts"
                                        color="primary"
                                        size="lg"
                                        className="font-bold"
                                        startContent={<FaEnvelope />}
                                    >
                                        যোগাযোগ করুন
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="/"
                                        variant="bordered"
                                        size="lg"
                                        className="font-bold"
                                    >
                                        হোম এ ফিরে যান
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Footer Note */}
            <section className="py-8 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-sm"
                >
                    &quot;আর তাঁর নিদর্শনাবলীর মধ্যে রয়েছে যে, তিনি তোমাদের জন্য তোমাদের
                    মধ্য থেকে তোমাদের সঙ্গিনীদের সৃষ্টি করেছেন&quot;
                    <br />
                    <span className="font-semibold">- সূরা রূম, আয়াত ২১</span>
                </motion.p>
            </section>
        </div>
    );
}
