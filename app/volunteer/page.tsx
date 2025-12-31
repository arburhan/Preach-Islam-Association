'use client';

import { title, subtitle } from "@/components/primitives";
import { motion } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';
import { Select, SelectItem } from '@heroui/select';
import { useState } from 'react';
import { FaUserPlus, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
import { GoHeartFill } from "react-icons/go";
import { FaHandshakeSimple } from "react-icons/fa6";


export default function VolunteerPage() {
    const locale = 'bn';
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        location: '',
        profession: '',
        skills: '',
        availability: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        try {
            const res = await fetch('/api/volunteer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                console.log('Volunteer form submitted:', formData);
                setIsSubmitted(true);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        age: '',
                        location: '',
                        profession: '',
                        skills: '',
                        availability: '',
                    });
                }, 3000);
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error submitting volunteer form:', error);
            alert('সার্ভার সমস্যা হয়েছে');
        }
    };

    const availabilityOptions = [
        { key: 'weekdays', label: locale === 'bn' ? 'সপ্তাহের দিন' : 'Weekdays' },
        { key: 'weekends', label: locale === 'bn' ? 'ছুটির দিনে' : 'Weekends' },
        { key: 'flexible', label: locale === 'bn' ? 'নমনীয়' : 'Flexible' },
        { key: 'full-time', label: locale === 'bn' ? 'পূর্ণ সময়' : 'Full-time' },
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Card className="max-w-md mx-auto shadow-2xl">
                        <CardBody className="p-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            >
                                <FaCheckCircle className="text-6xl text-green-600 mx-auto mb-6" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {locale === 'bn' ? 'ধন্যবাদ!' : 'Thank You!'}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {locale === 'bn'
                                    ? 'আপনার নিবন্ধন সফল হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
                                    : 'Your registration was successful. We will contact you soon.'}
                            </p>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-blue-600 text-white py-16 md:py-20 rounded-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mx-auto"
                    >
                        <FaUserPlus className="text-5xl md:text-6xl mx-auto mb-6" />

                        <h1 className={title({ size: "sm", class: "mb-4" })}>
                            স্বেচ্ছাসেবক নিবন্ধন
                        </h1>
                        <p className={`${subtitle({ size: "md" })} text-white`}>
                            আমাদের সাথে যুক্ত হোন এবং সমাজের কল্যাণে অবদান রাখুন। আপনার ছোট প্রচেষ্টা বড় পরিবর্তন আনতে পারে।
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section className="py-8">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="shadow-2xl border-2 border-primary-200">
                            <CardBody className="p-8 md:p-12">
                                <div className="mb-8 text-center">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {locale === 'bn' ? 'নিবন্ধন ফর্ম' : 'Registration Form'}
                                    </h2>
                                    <p className="text-gray-600">
                                        {locale === 'bn'
                                            ? 'নিচের ফর্মটি পূরণ করুন এবং আমাদের সাথে যুক্ত হন'
                                            : 'Fill out the form below to join us'}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-200 pb-2">
                                            {locale === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal Information'}
                                        </h3>

                                        <Input
                                            isRequired
                                            type="text"
                                            name="name"
                                            label={locale === 'bn' ? 'পূর্ণ নাম' : 'Full Name'}
                                            placeholder={locale === 'bn' ? 'আপনার পূর্ণ নাম লিখুন' : 'Enter your full name'}
                                            value={formData.name}
                                            onChange={handleChange}
                                            variant="bordered"
                                            color="primary"
                                            size="lg"
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input
                                                isRequired
                                                type="email"
                                                name="email"
                                                label={locale === 'bn' ? 'ইমেইল' : 'Email'}
                                                placeholder="example@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                variant="bordered"
                                                color="primary"
                                                size="lg"
                                            />

                                            <Input
                                                isRequired
                                                type="tel"
                                                name="phone"
                                                label={locale === 'bn' ? 'মোবাইল নম্বর' : 'Phone Number'}
                                                placeholder="01XXX-XXXXXX"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                variant="bordered"
                                                color="primary"
                                                size="lg"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <Input
                                                isRequired
                                                type="number"
                                                name="age"
                                                label={locale === 'bn' ? 'বয়স' : 'Age'}
                                                placeholder={locale === 'bn' ? 'আপনার বয়স' : 'Your age'}
                                                value={formData.age}
                                                onChange={handleChange}
                                                variant="bordered"
                                                color="primary"
                                                size="lg"
                                                min="18"
                                                max="100"
                                            />

                                            <Input
                                                isRequired
                                                type="text"
                                                name="location"
                                                label={locale === 'bn' ? 'ঠিকানা' : 'Location'}
                                                placeholder={locale === 'bn' ? 'শহর, জেলা' : 'City, District'}
                                                value={formData.location}
                                                onChange={handleChange}
                                                variant="bordered"
                                                color="primary"
                                                size="lg"
                                            />
                                        </div>
                                    </div>

                                    {/* Professional Information */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-200 pb-2">
                                            {locale === 'bn' ? 'পেশাগত তথ্য' : 'Professional Information'}
                                        </h3>

                                        <Input
                                            isRequired
                                            type="text"
                                            name="profession"
                                            label={locale === 'bn' ? 'পেশা' : 'Profession'}
                                            placeholder={locale === 'bn' ? 'আপনার পেশা লিখুন' : 'Enter your profession'}
                                            value={formData.profession}
                                            onChange={handleChange}
                                            variant="bordered"
                                            color="primary"
                                            size="lg"
                                        />

                                        <Textarea
                                            isRequired
                                            name="skills"
                                            label={locale === 'bn' ? 'দক্ষতা ও অভিজ্ঞতা' : 'Skills & Experience'}
                                            placeholder={
                                                locale === 'bn'
                                                    ? 'আপনার দক্ষতা এবং অভিজ্ঞতা সম্পর্কে লিখুন'
                                                    : 'Write about your skills and experience'
                                            }
                                            value={formData.skills}
                                            onChange={handleChange}
                                            variant="bordered"
                                            color="primary"
                                            minRows={4}
                                        />

                                        <Select
                                            isRequired
                                            label={locale === 'bn' ? 'সময় উপলব্ধতা' : 'Availability'}
                                            placeholder={
                                                locale === 'bn' ? 'আপনার সময় নির্বাচন করুন' : 'Select your availability'
                                            }
                                            selectedKeys={formData.availability ? [formData.availability] : []}
                                            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                                            variant="bordered"
                                            color="primary"
                                            size="lg"
                                        >
                                            {availabilityOptions.map((option) => (
                                                <SelectItem key={option.key}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            color="primary"
                                            size="lg"
                                            className="w-full font-bold text-lg"
                                            startContent={<FaUserPlus />}
                                        >
                                            {locale === 'bn' ? 'নিবন্ধন করুন' : 'Register Now'}
                                        </Button>
                                    </div>

                                    {/* Note */}
                                    <p className="text-center text-sm text-gray-600 mt-4">
                                        {locale === 'bn'
                                            ? '* নিবন্ধন করার পর আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব'
                                            : '* We will contact you soon after registration'}
                                    </p>
                                </form>
                            </CardBody>
                        </Card>
                    </motion.div>

                    {/* Why Join Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
                            <CardBody className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                    {locale === 'bn' ? 'কেন স্বেচ্ছাসেবক হবেন?' : 'Why Become a Volunteer?'}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="text-4xl mb-3">
                                            <FaHandshakeSimple className='text-primary-500' />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {locale === 'bn' ? 'সমাজসেবা' : 'Community Service'}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {locale === 'bn'
                                                ? 'সমাজের উন্নয়নে অবদান রাখুন'
                                                : 'Contribute to community development'}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-4xl mb-3">
                                            <FaLightbulb className='text-yellow-500' />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {locale === 'bn' ? 'নতুন অভিজ্ঞতা' : 'New Experience'}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {locale === 'bn'
                                                ? 'নতুন দক্ষতা ও অভিজ্ঞতা অর্জন করুন'
                                                : 'Gain new skills and experience'}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="text-4xl mb-3">
                                            <GoHeartFill className='text-red-500' />
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            {locale === 'bn' ? 'সওয়াব অর্জন' : 'Spiritual Reward'}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {locale === 'bn'
                                                ? 'মানবসেবার মাধ্যমে সওয়াব লাভ করুন'
                                                : 'Earn rewards through service'}
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
