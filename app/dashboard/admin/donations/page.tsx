"use client";

import { useEffect, useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import Link from 'next/link';

interface Donation {
    _id: string;
    name: string;
    email?: string;
    address: string;
    mobile: string;
    donationType: 'monthly' | 'yearly' | 'oneTime';
    amount: number;
    comment?: string;
    submittedAt: string;
    createdAt: string;
}

interface Stats {
    total: number;
    totalAmount: number;
    monthly: number;
    yearly: number;
    oneTime: number;
}

export default function DonationsPage() {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [stats, setStats] = useState<Stats>({
        total: 0,
        totalAmount: 0,
        monthly: 0,
        yearly: 0,
        oneTime: 0,
    });
    const [filter, setFilter] = useState<'all' | 'monthly' | 'yearly' | 'oneTime'>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonations();
    }, [filter]);

    const fetchDonations = async () => {
        try {
            setLoading(true);
            const url =
                filter === 'all'
                    ? '/api/admin/donations'
                    : `/api/admin/donations?type=${filter}`;
            const res = await fetch(url);
            const data = await res.json();
            setDonations(data.donations || []);
            setStats(data.stats || {});
        } catch (error) {
            console.error('Error fetching donations:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Donations Management</h1>
                <p className="text-gray-600 mt-2">View and manage donation records</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="shadow-md">
                    <CardBody className="p-6">
                        <p className="text-sm text-gray-600">Total Donations</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
                    </CardBody>
                </Card>
                <Card className="shadow-md">
                    <CardBody className="p-6">
                        <p className="text-sm text-gray-600">Total Amount</p>
                        <p className="text-3xl font-bold text-green-600 mt-2">
                            ৳{stats.totalAmount.toLocaleString()}
                        </p>
                    </CardBody>
                </Card>
                <Card className="shadow-md">
                    <CardBody className="p-6">
                        <p className="text-sm text-gray-600">Monthly Donors</p>
                        <p className="text-3xl font-bold text-blue-600 mt-2">{stats.monthly}</p>
                    </CardBody>
                </Card>
                <Card className="shadow-md">
                    <CardBody className="p-6">
                        <p className="text-sm text-gray-600">Yearly Donors</p>
                        <p className="text-3xl font-bold text-purple-600 mt-2">{stats.yearly}</p>
                    </CardBody>
                </Card>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6">
                <Button
                    color={filter === 'all' ? 'primary' : 'default'}
                    variant={filter === 'all' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('all')}
                >
                    All Donations
                </Button>
                <Button
                    color={filter === 'monthly' ? 'primary' : 'default'}
                    variant={filter === 'monthly' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('monthly')}
                >
                    Monthly ({stats.monthly})
                </Button>
                <Button
                    color={filter === 'yearly' ? 'primary' : 'default'}
                    variant={filter === 'yearly' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('yearly')}
                >
                    Yearly ({stats.yearly})
                </Button>
                <Button
                    color={filter === 'oneTime' ? 'primary' : 'default'}
                    variant={filter === 'oneTime' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('oneTime')}
                >
                    One-Time ({stats.oneTime})
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : donations.length === 0 ? (
                <Card>
                    <CardBody className="p-12 text-center">
                        <p className="text-gray-600">No donations found</p>
                    </CardBody>
                </Card>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contact</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Address</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {donations.map((donation) => (
                                <tr key={donation._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-semibold text-gray-900">{donation.name}</p>
                                            {donation.comment && (
                                                <p className="text-xs text-gray-500 mt-1">{donation.comment}</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <Link href={`tel:${donation.mobile}`}>{donation.mobile}</Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-block px-3 py-1 text-sm rounded ${donation.donationType === 'monthly'
                                                ? 'bg-blue-100 text-blue-700'
                                                : donation.donationType === 'yearly'
                                                    ? 'bg-purple-100 text-purple-700'
                                                    : 'bg-green-100 text-green-700'
                                                }`}
                                        >
                                            {donation.donationType === 'monthly'
                                                ? 'মাসিক'
                                                : donation.donationType === 'yearly'
                                                    ? 'বার্ষিক'
                                                    : 'এককালীন'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-green-600">৳{donation.amount.toLocaleString()}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{donation.address}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {new Date(donation.createdAt).toLocaleDateString('bn-BD')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
