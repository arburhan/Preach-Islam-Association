"use client";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";

import { IoDiamondSharp } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
import missionData from "@/public/missionVission.json";
import { Donate, JoinUs } from "@/components/shared/buttons";

export default function VissionMissionPage() {
    // Get all 27 missions
    const missions = missionData.mission;

    return (
        <div className="w-full px-4 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className={title({ size: "lg", class: "mb-4" })}>
                    আমাদের লক্ষ্য ও উদ্দেশ্য
                </h1>
                <p className={subtitle({ size: "md", color: "blue" })}>
                    অসহায়-প্রান্তিক-গরীব-দুঃখীর কল্যাণে আমাদের ২৭ টি লক্ষ্য ও উদ্দেশ্য বিস্তারিত
                </p>
            </div>

            {/* All Mission Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {missions.map((mission, index) => (
                    <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                    >
                        <Card
                            className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-default-200"
                            shadow="sm"
                        >
                            <CardBody className="p-6">
                                {/* Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 rounded-full bg-success/10">
                                        <IoDiamondSharp className="text-success text-3xl" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start gap-2">
                                        <span className="text-success font-bold text-lg flex-shrink-0">
                                            {mission.id}.
                                        </span>
                                        <p className="text-default-700 leading-relaxed text-base">
                                            {mission.txt}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Section */}
            <motion.div
                className="mt-16 text-center max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p className="text-lg text-default-600 leading-relaxed">
                    এই ২৭টি লক্ষ্য ও উদ্দেশ্য বাস্তবায়নের মাধ্যমে আমরা সমাজের সকল শ্রেণীর মানুষের কল্যাণে
                    কাজ করে যাচ্ছি। আপনিও আমাদের এই মহতী উদ্যোগে অংশীদার হতে পারেন।
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 py-4">
                    <JoinUs />
                    <Donate />
                </div>
            </motion.div>
        </div>
    );
}
