"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { title, subtitle } from "@/components/primitives";
import { BsLightbulb, BsCheckCircleFill } from "react-icons/bs";
import { Divider } from "@heroui/divider";
import projectData from "@/public/projectManagement.json";
import { Donate, JoinUs } from "@/components/shared/buttons";

export default function ProjectManagementPage() {
    return (
        <div className="w-full px-4 py-12">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className={title({ size: "lg", class: "mb-4" })}>
                    কার্য পরিচালনা প্রকল্প
                </h1>
                <p className={subtitle({ size: "md", color: "cyan" })}>
                    অসহায় সাহায্যপ্রার্থীদের সমস্যা চিহ্নিতকরণ এবং কার্যকরী সমাধান
                </p>
                <div className="mt-4 inline-block px-6 py-2 bg-warning/10 rounded-full">
                    <p className="text-warning font-bold">মোট {projectData.length}টি প্রজেক্ট</p>
                </div>
            </div>

            {/* All Projects */}
            <div className="max-w-7xl mx-auto space-y-6">
                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                    >
                        <Card
                            className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-warning"
                            shadow="lg"
                        >
                            <CardHeader className="flex gap-4 bg-gradient-to-r from-warning/10 via-warning/5 to-transparent pb-4">
                                <div className="p-4 rounded-xl bg-warning/20">
                                    <BsLightbulb className="text-warning text-3xl" />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <p className="text-sm text-warning font-bold mb-1">প্রজেক্ট #{project.id}</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                        {project.problem}
                                    </h3>
                                </div>
                            </CardHeader>

                            <Divider />

                            <CardBody className="pt-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="p-2 rounded-full bg-success/10">
                                            <BsCheckCircleFill className="text-success text-2xl" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-base font-bold text-success mb-3 flex items-center gap-2">
                                            <span className="inline-block w-12 h-1 bg-success rounded"></span>
                                            সমাধান
                                        </p>
                                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                            {project.solution}
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
                transition={{ duration: 0.5 }}
            >
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        প্রতিটি প্রজেক্ট অসহায় সাহায্যপ্রার্থীদের কল্যাণে পরিকল্পিত এবং বাস্তবায়িত হচ্ছে।
                        আপনিও আমাদের এই মানবিক উদ্যোগে অংশীদার হতে পারেন।
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 py-4">
                        <JoinUs />
                        <Donate />
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
