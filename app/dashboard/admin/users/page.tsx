'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

interface User {
    _id: string;
    name: string;
    email: string;
    mobile: string;
    emailVerified: boolean;
    isApproved: boolean;
    role: string;
    createdAt: string;
}

export default function UsersManagementPage() {
    const { data: session } = useSession();
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState<'pending' | 'approved' | 'all'>('pending');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [filter]);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const url =
                filter === 'all'
                    ? '/api/admin/users'
                    : `/api/admin/users?status=${filter}`;
            const res = await fetch(url);
            const data = await res.json();
            setUsers(data.users || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (userId: string, isApproved: boolean) => {
        try {
            const res = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, isApproved }),
            });

            if (res.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error approving user:', error);
        }
    };

    const handleDelete = async (userId: string) => {
        if (!confirm('Are you sure you want to delete this user?')) return;

        try {
            const res = await fetch(`/api/admin/users?userId=${userId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const filteredUsers =
        filter === 'all'
            ? users
            : filter === 'pending'
                ? users.filter((u) => !u.isApproved)
                : users.filter((u) => u.isApproved);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600 mt-2">Manage and approve user accounts</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6">
                <Button
                    color={filter === 'pending' ? 'primary' : 'default'}
                    variant={filter === 'pending' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </Button>
                <Button
                    color={filter === 'approved' ? 'primary' : 'default'}
                    variant={filter === 'approved' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('approved')}
                >
                    Approved
                </Button>
                <Button
                    color={filter === 'all' ? 'primary' : 'default'}
                    variant={filter === 'all' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('all')}
                >
                    All Users
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : filteredUsers.length === 0 ? (
                <Card>
                    <CardBody className="p-12 text-center">
                        <p className="text-gray-600">No users found</p>
                    </CardBody>
                </Card>
            ) : (
                <div className="space-y-4">
                    {filteredUsers.map((user) => (
                        <Card key={user._id} className="shadow-md hover:shadow-lg transition-shadow">
                            <CardBody className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            📧 {user.email}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">
                                            📱 {user.mobile}
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            <span
                                                className={`inline-block px-2 py-1 text-xs rounded ${user.emailVerified
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                    }`}
                                            >
                                                {user.emailVerified ? '✓ Email Verified' : 'Email Not Verified'}
                                            </span>
                                            <span
                                                className={`inline-block px-2 py-1 text-xs rounded ${user.isApproved
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                    }`}
                                            >
                                                {user.isApproved ? '✓ Approved' : 'Pending Approval'}
                                            </span>
                                            <span className="inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                                                {user.role.toUpperCase()}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Registered: {new Date(user.createdAt).toLocaleDateString('bn-BD')}
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        {!user.isApproved && (
                                            <Button
                                                color="success"
                                                size="sm"
                                                startContent={<FaCheck />}
                                                onClick={() => handleApprove(user._id, true)}
                                            >
                                                Approve
                                            </Button>
                                        )}
                                        {user.isApproved && (
                                            <Button
                                                color="warning"
                                                size="sm"
                                                startContent={<FaTimes />}
                                                onClick={() => handleApprove(user._id, false)}
                                            >
                                                Revoke
                                            </Button>
                                        )}
                                        {session?.user.role === 'superadmin' && (
                                            <Button
                                                color="danger"
                                                size="sm"
                                                startContent={<FaTrash />}
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
