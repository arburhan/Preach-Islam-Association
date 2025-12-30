"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { title, subtitle } from "@/components/primitives";
import { FaMapMarkedAlt, FaGlobeAsia, FaHandsHelping } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const OurBoundaries = () => {
    return (
        <section className="py-12 md:py-20 w-full px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>
                        সংস্থার কার্যক্রমের সীমানা/পরিধি
                    </h2>
                    <p className={subtitle({ size: "sm", color: "blue" })}>
                        দেশ ও জনগণের কল্যাণে নিবেদিত সেবা কার্যক্রম
                    </p>
                </div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Card className="border border-default-200" shadow="md">
                        <CardBody className="p-8 md:p-12">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-full bg-blue-100">
                                    <FaHandsHelping className="text-blue-600 text-3xl" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                        আমাদের প্রতিশ্রুতি
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        দেশ ও জনগণের কল্যাণে আত্মনিয়োগ করার প্রয়োজনীয়তা ও গুরুত্ব উপলব্ধি করে,
                                        এবং নিজেদের সামর্থ্য ও শক্তিতে বিশ্বাস রেখে মহান আল্লাহ তায়ালার ওপর ভরসা করে—
                                        আমরা সমাজসেবায় নিবেদিত।
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>

                {/* Scope Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Current Scope */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card
                            className="h-full border-2 border-success/30 hover:border-success hover:shadow-xl transition-all duration-300"
                            shadow="sm"
                        >
                            <CardBody className="p-8">
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="p-5 rounded-full bg-gradient-to-br from-success/20 to-success/10">
                                        <FaMapMarkedAlt className="text-success text-4xl" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        বর্তমান কার্যক্রম
                                    </h3>
                                    <div className="inline-block px-4 py-2 bg-success/10 rounded-full">
                                        <span className="text-success font-semibold">রাজশাহী জেলা</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-center">
                                    নিবন্ধন কর্তৃপক্ষের অনুমোদন সাপেক্ষে রাজশাহী জেলার সমগ্র এলাকায়
                                    সেবা কার্যক্রম পরিচালনা করা হচ্ছে।
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* Future Expansion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Card
                            className="h-full border-2 border-blue-300 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                            shadow="sm"
                        >
                            <CardBody className="p-8">
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="p-5 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/10">
                                        <BiWorld className="text-blue-600 text-4xl" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        ভবিষ্যৎ পরিকল্পনা
                                    </h3>
                                    <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                                        <span className="text-blue-600 font-semibold">সারা দেশ ও আন্তর্জাতিক</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-center">
                                    যথাযথ কর্তৃপক্ষের অনুমোদনক্রমে ভবিষ্যতে সারা দেশে এবং
                                    দেশের বাইরে কার্যক্রম সম্প্রসারণ করা যাবে।
                                </p>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-success/5 rounded-full border border-blue-200">
                        <FaGlobeAsia className="text-blue-600 text-2xl" />
                        <p className="text-gray-700 font-medium">
                            নিবন্ধন নং: <span className="text-blue-600 font-bold">রাজ-০০১১৩</span> |
                            <span className="ml-2">তারিখ: <span className="font-semibold">৩১ আগস্ট ২০২৪</span></span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurBoundaries;
