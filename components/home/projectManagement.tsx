"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import { BsLightbulb, BsCheckCircleFill } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import projectData from "@/public/projectManagement.json";

const ProjectManagement = () => {
    // Get first 6 projects
    const projects = projectData.slice(0, 6);

    return (
        <section className="py-12 md:py-20 w-full px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={title({ size: "sm", class: "mb-4" })}>
                        কার্য পরিচালনা প্রকল্প
                    </h2>
                    <p className={subtitle({ size: "sm", color: "cyan" })}>
                        সমস্যা চিহ্নিতকরণ এবং কার্যকরী সমাধান
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                className="h-full hover:shadow-2xl transition-all duration-300 border-l-4 border-l-warning"
                                shadow="md"
                            >
                                <CardHeader className="flex gap-3 bg-gradient-to-r from-warning/10 to-warning/5 pb-4">
                                    <div className="p-3 rounded-full bg-warning/20">
                                        <BsLightbulb className="text-warning text-2xl" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <p className="text-sm text-warning font-bold">প্রজেক্ট #{project.id}</p>
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                                            {project.problem}
                                        </h3>
                                    </div>
                                </CardHeader>

                                <CardBody className="pt-4">
                                    <div className="flex gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <BsCheckCircleFill className="text-success text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-success mb-2">সমাধান:</p>
                                            <p className="text-gray-700 leading-relaxed line-clamp-4">
                                                {project.solution}
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
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button
                        as={Link}
                        href="/project-management"
                        size="lg"
                        color="warning"
                        variant="shadow"
                        endContent={<MdArrowForward className="text-2xl" />}
                        className="px-8 py-6 text-lg font-semibold text-white"
                    >
                        সব প্রজেক্ট দেখুন ({projectData.length}টি)
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectManagement;
