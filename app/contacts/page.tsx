"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Card, CardBody } from '@heroui/card';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        toast.success('আপনার বার্তা সফলভাবে পাঠানো হয়েছে');
      } else {
        toast.error(data.message || 'Error occurred');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('সার্ভার সমস্যা হয়েছে');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'মোবাইল নম্বর',
      content: siteConfig.mobile,
      link: `tel:${siteConfig.mobile}`,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: FaEnvelope,
      title: 'ইমেইল',
      content: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'ঠিকানা',
      content: siteConfig.location,
      link: null,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: FaClock,
      title: 'কার্যক্রম সময়',
      content: 'শনিবার - বৃহস্পতিবার: সকাল ৯টা - সন্ধ্যা ৬টা',
      link: null,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, label: 'Twitter', href: '#', color: 'hover:text-sky-500' },
    { icon: FaInstagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: FaYoutube, label: 'YouTube', href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-blue-600 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="text-lg md:text-xl opacity-90">
              আমরা সবসময় আপনার সেবায় প্রস্তুত। যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardBody className="flex flex-col items-center text-center p-6">
                    <div className={`${info.bgColor} p-4 rounded-full mb-4`}>
                      <info.icon className={`text-3xl ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className={`${info.color} hover:underline text-sm md:text-base`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base text-gray-600">{info.content}</p>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    আমাদের লিখুন
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      isRequired
                      type="text"
                      name="name"
                      label="আপনার নাম"

                      value={formData.name}
                      onChange={handleChange}
                      variant="bordered"
                      color="primary"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        isRequired
                        type="email"
                        name="email"
                        label="ইমেইল"

                        value={formData.email}
                        onChange={handleChange}
                        variant="bordered"
                        color="primary"
                      />
                      <Input
                        isRequired
                        type="tel"
                        name="phone"
                        label="মোবাইল নম্বর"

                        value={formData.phone}
                        onChange={handleChange}
                        variant="bordered"
                        color="primary"
                      />
                    </div>
                    <Input
                      isRequired
                      type="text"
                      name="subject"
                      label="বিষয়"

                      value={formData.subject}
                      onChange={handleChange}
                      variant="bordered"
                      color="primary"
                    />
                    <Textarea
                      isRequired
                      name="message"
                      label="বার্তা"

                      value={formData.message}
                      onChange={handleChange}
                      variant="bordered"
                      color="primary"
                      minRows={5}
                    />

                    {submitSuccess && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        ✅ আপনার বার্তা সফলভাবে পাঠানো হয়েছে!
                      </div>
                    )}

                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      className="w-full font-semibold"
                      isLoading={isSubmitting}
                    >
                      {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            {/* Map and Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Google Map */}
              <Card className="shadow-xl">
                <CardBody className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      allowFullScreen
                      className="rounded-lg"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2891234567!2d88.6!3d24.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIyJzEyLjAiTiA4OMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                      style={{ border: 0 }}
                      title="আমাদের অফিসের অবস্থান - Google Maps"
                      width="100%"
                    />
                  </div>
                </CardBody>
              </Card>

              {/* Social Media */}
              <Card className="shadow-xl">
                <CardBody className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    সোশ্যাল মিডিয়ায় আমরা
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 ${social.color} transform hover:scale-110`}
                        aria-label={social.label}
                      >
                        <social.icon className="text-2xl" />
                      </a>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আমাদের সাথে যুক্ত হন
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              মানবতার সেবায় আপনিও অংশীদার হতে পারেন। আজই যোগ দিন আমাদের সাথে।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="/donation"
                size="lg"
                className="bg-white text-primary-600 font-bold hover:bg-gray-100"
              >
                দান করুন
              </Button>
              <Button
                as="a"
                href="/volunteer"
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-bold"
              >
                স্বেচ্ছাসেবক হন
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
