"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import {
  FaCalendarAlt,
  FaCertificate,
  FaMapMarkerAlt,
  FaBullseye,
  FaProjectDiagram,
  FaUsers,
  FaHandHoldingHeart
} from "react-icons/fa";
import { MdVerified, MdArrowForward } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Divider } from "@heroui/divider";
import missionData from "@/public/missionVission.json";
import projectData from "@/public/projectManagement.json";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  const stats = [
    {
      icon: FaBullseye,
      count: missionData.mission.length,
      label: "লক্ষ্য ও উদ্দেশ্য",
      color: "success",
      gradient: "from-success to-green-600",
      link: "/vission-mission"
    },
    {
      icon: FaProjectDiagram,
      count: projectData.length,
      label: "কার্য পরিচালনা প্রকল্প",
      color: "warning",
      gradient: "from-warning to-orange-600",
      link: "/project-management"
    },
    {
      icon: FaUsers,
      count: "0+",
      label: "সেবাপ্রাপ্ত মানুষ",
      color: "primary",
      gradient: "from-blue-500 to-cyan-500",
      link: null
    },
    {
      icon: FaHandHoldingHeart,
      count: "0+",
      label: "স্বেচ্ছাসেবক",
      color: "secondary",
      gradient: "from-purple-500 to-pink-500",
      link: null
    }
  ];

  const milestones = [
    {
      date: "২০১৭",
      title: "অঙ্কুর",
      description: "রোহিঙ্গা ক্রাইসিসে সেবামূলক কাজের মাধ্যমে যাত্রা শুরু"
    },
    {
      date: "১১ নভেম্বর ২০২৩",
      title: "প্রাতিষ্ঠানিক কার্যক্রম",
      description: "অফিস ভাড়া নিয়ে প্রাতিষ্ঠানিক সেবামূলক কার্যক্রম শুরু"
    },
    {
      date: "২৪ জুন ২০২৪",
      title: "নামকরণ",
      description: "সংগঠনের নাম 'প্রিচ ইসলাম অ্যাসোসিয়েশন' নির্ধারণ"
    },
    {
      date: "৩১ আগস্ট ২০২৪",
      title: "স্বীকৃতি",
      description: "সমাজ সেবা অধিদপ্তর থেকে সেচ্ছাসেবী সংগঠন হিসেবে নিবন্ধন প্রাপ্ত"
    }
  ];

  return (
    <div className="w-full px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className={title({ size: "lg", class: "mb-4" })}>
          আমাদের সম্পর্কে
        </h1>
        <p className={subtitle({ size: "md", color: "green" })}>
          দেশ ও জনগণের কল্যাণে নিবেদিত একটি সেচ্ছাসেবী সংগঠন
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-success/30" shadow="lg">
            <CardBody className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Organization Name */}
                <div className="md:col-span-2 text-center mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    প্রিচ ইসলাম অ্যাসোসিয়েশন
                  </h2>
                  <p className="text-lg text-gray-600">Preach Islam Association</p>
                </div>

                {/* Registration Info */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-success/10">
                    <FaCertificate className="text-success text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">নিবন্ধন নং</p>
                    <p className="text-xl font-bold text-gray-900">রাজ-০০১১৩</p>
                  </div>
                </div>

                {/* Establishment Date */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <FaCalendarAlt className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">নিবন্ধনের তারিখ</p>
                    <p className="text-xl font-bold text-gray-900">৩১ আগস্ট ২০২৪</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100">
                    <FaMapMarkerAlt className="text-purple-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">কার্যক্ষেত্র</p>
                    <p className="text-xl font-bold text-gray-900">রাজশাহী জেলা</p>
                  </div>
                </div>

                {/* Verification */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <MdVerified className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">স্বীকৃতি প্রদানকারী</p>
                    <p className="text-xl font-bold text-gray-900">সমাজ সেবা অধিদপ্তর</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Statistics Cards - Clickable */}
        <div>
          <h2 className={title({ size: "sm", class: "text-center mb-12" })}>
            আমাদের কার্যক্রম এক নজরে
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full w-full"
                >
                  <div
                    onClick={() => stat.link && router.push(stat.link)}
                    className="block h-full w-full"
                  >
                    <Card
                      className={`h-full w-full ${stat.link ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-2' : ''} transition-all duration-300 border border-default-200`}
                      shadow="md"
                      isPressable={!!stat.link}
                    >
                      <CardBody className="p-8 text-center flex flex-col items-center justify-center">
                        <div className="mb-6">
                          <div className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient}`}>
                            <IconComponent className="text-white text-4xl" />
                          </div>
                        </div>
                        <h3 className="text-5xl font-black text-gray-900 mb-4">
                          {stat.count}
                        </h3>
                        <p className="text-base font-semibold text-gray-700 mb-3 min-h-[3rem] flex items-center">
                          {stat.label}
                        </p>
                        {stat.link && (
                          <div className="flex items-center justify-center gap-1 text-sm text-primary mt-2">
                            <span>বিস্তারিত দেখুন</span>
                            <MdArrowForward />
                          </div>
                        )}
                        {!stat.link && (
                          <div className="h-6"></div>
                        )}
                      </CardBody>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* History Timeline */}
        <div>
          <h2 className={title({ size: "sm", class: "text-center mb-8" })}>
            আমাদের পথচলা
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-blue-500" shadow="md">
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-48 flex-shrink-0">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                          <p className="text-blue-600 font-bold">{milestone.date}</p>
                        </div>
                      </div>
                      <Divider orientation="vertical" className="hidden md:block h-16" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transparency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200" shadow="lg">
            <CardHeader className="flex gap-3 pb-0 pt-6 px-6">
              <BiWorld className="text-blue-600 text-3xl" />
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">স্বচ্ছতা ও জবাবদিহিতা</h3>
                <p className="text-sm text-gray-600">আমরা সম্পূর্ণ স্বচ্ছতার সাথে কাজ করি</p>
              </div>
            </CardHeader>
            <CardBody className="px-6 pb-6">
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">সমাজ সেবা অধিদপ্তর কর্তৃক নিবন্ধিত সংগঠন</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">নিয়মিত কার্যক্রম প্রতিবেদন প্রকাশ</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">সকল প্রকল্প ও কার্যক্রমের বিস্তারিত তথ্য প্রকাশ</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">অসহায়দের যাচাই-বাছাইয়ে নিরপেক্ষতা ও জবাবদিহিতা</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-success/10 to-green-50 border border-success/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              আমাদের সাথে যুক্ত হন
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl">
              অসহায়-প্রান্তিক-গরীব-দুঃখীর কল্যাণে আমাদের এই মহৎ উদ্যোগে আপনিও অংশীদার হতে পারেন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/contact"
                size="lg"
                color="success"
                variant="shadow"
                className="font-semibold"
              >
                যোগাযোগ করুন
              </Button>
              <Button
                as={Link}
                href="/vission-mission"
                size="lg"
                color="primary"
                variant="bordered"
                className="font-semibold"
              >
                আমাদের লক্ষ্য দেখুন
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
