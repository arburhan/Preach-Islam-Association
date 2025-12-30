"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import { FaCheckCircle } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";


import missionData from "@/public/missionVission.json";
// Get first 6 missions from JSON
const missions = missionData.mission.slice(0, 6);

const OurMV = () => {
    return (
        <section className="py-12 md:py-20 w-full px-4">
            <div className="text-center mb-16">
                <h2 className={title({ size: "sm", class: "mb-4" })}>
                    আমাদের লক্ষ্য ও উদ্দেশ্য
                </h2>
                <p className={subtitle({ size: "sm" })}>
                    অসহায়-প্রান্তিক-গরীব-দুঃখীর কল্যাণে আমাদের ২৭ টি লক্ষ্য ও উদ্দেশ্য
                </p>
            </div>

            {/* Mission Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
                {missions.map((mission, index) => (
                    <motion.div
                        key={mission.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}>
                        <Card
                            className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-default-200"
                            shadow="sm">
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
                                        <span className="text-success font-bold text-lg">
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

            {/* View More Button */}
            <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Button
                    as={Link}
                    href="/mission-vision"
                    size="lg"
                    color="success"
                    variant="shadow"
                    className="px-8 py-6 text-lg font-semibold text-white"
                >
                    আরো দেখুন
                </Button>
            </motion.div>
        </section>
    );
};

export default OurMV;
