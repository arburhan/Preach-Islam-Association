'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface Volunteer {
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    location: string;
    profession: string;
    skills: string;
    availability: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
}

export default function VolunteersPage() {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVolunteers();
    }, [filter]);

    const fetchVolunteers = async () => {
        try {
            setLoading(true);
            const url =
                filter === 'all'
                    ? '/api/admin/volunteers'
                    : `/api/admin/volunteers?status=${filter}`;
            const res = await fetch(url);
            const data = await res.json();
            setVolunteers(data.volunteers || []);
        } catch (error) {
            console.error('Error fetching volunteers:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (volunteerId: string, status: string) => {
        try {
            const res = await fetch('/api/admin/volunteers', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ volunteerId, status }),
            });

            if (res.ok) {
                fetchVolunteers();
            }
        } catch (error) {
            console.error('Error updating volunteer:', error);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Volunteers Management</h1>
                <p className="text-gray-600 mt-2">Manage volunteer applications</p>
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
                    color={filter === 'rejected' ? 'primary' : 'default'}
                    variant={filter === 'rejected' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('rejected')}
                >
                    Rejected
                </Button>
                <Button
                    color={filter === 'all' ? 'primary' : 'default'}
                    variant={filter === 'all' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('all')}
                >
                    All
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : volunteers.length === 0 ? (
                <Card>
                    <CardBody className="p-12 text-center">
                        <p className="text-gray-600">No volunteers found</p>
                    </CardBody>
                </Card>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {volunteers.map((volunteer) => (
                        <Card key={volunteer._id} className="shadow-md hover:shadow-lg transition-shadow">
                            <CardBody className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{volunteer.name}</h3>
                                    <span
                                        className={`inline-block mt-2 px-3 py-1 text-sm rounded ${volunteer.status === 'approved'
                                                ? 'bg-green-100 text-green-700'
                                                : volunteer.status === 'rejected'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                    >
                                        {volunteer.status.toUpperCase()}
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>
                                        <strong>Email:</strong> {volunteer.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> {volunteer.phone}
                                    </p>
                                    <p>
                                        <strong>Age:</strong> {volunteer.age} years
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {volunteer.location}
                                    </p>
                                    <p>
                                        <strong>Profession:</strong> {volunteer.profession}
                                    </p>
                                    <p>
                                        <strong>Availability:</strong> {volunteer.availability}
                                    </p>
                                    <p>
                                        <strong>Skills:</strong> {volunteer.skills}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-4">
                                        Applied: {new Date(volunteer.createdAt).toLocaleDateString('bn-BD')}
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-6">
                                    {volunteer.status !== 'approved' && (
                                        <Button
                                            color="success"
                                            size="sm"
                                            startContent={<FaCheck />}
                                            onClick={() => handleStatusChange(volunteer._id, 'approved')}
                                        >
                                            Approve
                                        </Button>
                                    )}
                                    {volunteer.status !== 'rejected' && (
                                        <Button
                                            color="danger"
                                            size="sm"
                                            startContent={<FaTimes />}
                                            onClick={() => handleStatusChange(volunteer._id, 'rejected')}
                                        >
                                            Reject
                                        </Button>
                                    )}
                                    {volunteer.status !== 'pending' && (
                                        <Button
                                            color="warning"
                                            size="sm"
                                            onClick={() => handleStatusChange(volunteer._id, 'pending')}
                                        >
                                            Mark as Pending
                                        </Button>
                                    )}
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
