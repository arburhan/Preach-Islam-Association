'use client';

import { useSession } from 'next-auth/react';
import { Card, CardBody } from '@heroui/card';
import { FaUsers, FaUserCheck, FaClock, FaDonate, FaHandHoldingHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function AdminDashboardPage() {
    const { data: session } = useSession();
    const [stats, setStats] = useState({
        totalUsers: 0,
        pendingUsers: 0,
        approvedUsers: 0,
        totalVolunteers: 0,
        totalDonations: 0,
        totalDonationAmount: 0,
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [usersRes, volunteersRes, donationsRes] = await Promise.all([
                fetch('/api/admin/users'),
                fetch('/api/admin/volunteers'),
                fetch('/api/admin/donations'),
            ]);

            const usersData = await usersRes.json();
            const volunteersData = await volunteersRes.json();
            const donationsData = await donationsRes.json();

            setStats({
                totalUsers: usersData.users?.length || 0,
                pendingUsers: usersData.users?.filter((u: any) => !u.isApproved).length || 0,
                approvedUsers: usersData.users?.filter((u: any) => u.isApproved).length || 0,
                totalVolunteers: volunteersData.volunteers?.length || 0,
                totalDonations: donationsData.donations?.length || 0,
                totalDonationAmount: donationsData.stats?.totalAmount || 0,
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const statCards = [
        {
            title: 'Total Users',
            value: stats.totalUsers,
            icon: FaUsers,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            title: 'Pending Approval',
            value: stats.pendingUsers,
            icon: FaClock,
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50',
        },
        {
            title: 'Approved Users',
            value: stats.approvedUsers,
            icon: FaUserCheck,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
        },
        {
            title: 'Volunteers',
            value: stats.totalVolunteers,
            icon: FaHandHoldingHeart,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            title: 'Total Donations',
            value: stats.totalDonations,
            icon: FaDonate,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50',
        },
        {
            title: 'Donation Amount',
            value: `৳${stats.totalDonationAmount.toLocaleString()}`,
            icon: FaDonate,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back, {session?.user.name}!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                            <CardBody className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                    <div className={`p-4 rounded-full ${stat.bgColor}`}>
                                        <Icon className={`text-3xl ${stat.color}`} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <CardBody className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pending User Approvals</h3>
                            <p className="text-gray-600 mb-4">
                                {stats.pendingUsers} users waiting for approval
                            </p>
                            <a
                                href="/dashboard/admin/users"
                                className="text-primary-600 font-semibold hover:underline"
                            >
                                View Pending →
                            </a>
                        </CardBody>
                    </Card>

                    <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <CardBody className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Recent Donations</h3>
                            <p className="text-gray-600 mb-4">
                                {stats.totalDonations} total donations received
                            </p>
                            <a
                                href="/dashboard/admin/donations"
                                className="text-primary-600 font-semibold hover:underline"
                            >
                                View All →
                            </a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
