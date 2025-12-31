"use client";

import { useEffect, useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import { FaEnvelope, FaPhone, FaTrash, FaCheckCircle, FaReply } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

interface ContactMessage {
    _id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    status: 'new' | 'read' | 'replied';
    createdAt: string;
}

export default function MessagesPage() {
    const { data: session } = useSession();
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, [filter]);

    const fetchMessages = async () => {
        try {
            setLoading(true);
            const url =
                filter === 'all'
                    ? '/api/admin/messages'
                    : `/api/admin/messages?status=${filter}`;
            const res = await fetch(url);
            const data = await res.json();
            setMessages(data.messages || []);
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (messageId: string, status: string) => {
        try {
            const res = await fetch('/api/admin/messages', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messageId, status }),
            });

            if (res.ok) {
                fetchMessages();
            }
        } catch (error) {
            console.error('Error updating message:', error);
        }
    };

    const handleDelete = async (messageId: string) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            const res = await fetch(`/api/admin/messages?messageId=${messageId}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                fetchMessages();
            }
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new':
                return 'warning';
            case 'read':
                return 'primary';
            case 'replied':
                return 'success';
            default:
                return 'default';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'new':
                return 'নতুন';
            case 'read':
                return 'পড়া হয়েছে';
            case 'replied':
                return 'উত্তর দেয়া হয়েছে';
            default:
                return status;
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
                <p className="text-gray-600 mt-2">View and manage contact form messages</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-4 mb-6">
                <Button
                    color={filter === 'all' ? 'primary' : 'default'}
                    variant={filter === 'all' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('all')}
                >
                    All Messages
                </Button>
                <Button
                    color={filter === 'new' ? 'primary' : 'default'}
                    variant={filter === 'new' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('new')}
                >
                    New
                </Button>
                <Button
                    color={filter === 'read' ? 'primary' : 'default'}
                    variant={filter === 'read' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('read')}
                >
                    Read
                </Button>
                <Button
                    color={filter === 'replied' ? 'primary' : 'default'}
                    variant={filter === 'replied' ? 'solid' : 'bordered'}
                    onClick={() => setFilter('replied')}
                >
                    Replied
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-600">Loading...</p>
                </div>
            ) : messages.length === 0 ? (
                <Card>
                    <CardBody className="p-12 text-center">
                        <p className="text-gray-600">No messages found</p>
                    </CardBody>
                </Card>
            ) : (
                <div className="space-y-4">
                    {messages.map((message) => (
                        <Card key={message._id} className="shadow-md hover:shadow-lg transition-shadow">
                            <CardBody className="p-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {message.name}
                                                </h3>
                                                <Chip color={getStatusColor(message.status)} size="sm" variant="flat">
                                                    {getStatusLabel(message.status)}
                                                </Chip>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <Link href={`mailto:${message.email}`} className="group w-fit">
                                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                                        <FaEnvelope />
                                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                                            {message.email}
                                                        </span>
                                                    </p>
                                                </Link>
                                                <Link href={`tel:${message.phone}`} className="group w-fit">
                                                    <p className="text-sm text-gray-600 flex items-center gap-2">
                                                        <FaPhone />
                                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-gray-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                                            {message.phone}
                                                        </span>
                                                    </p>
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            {new Date(message.createdAt).toLocaleDateString('bn-BD', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-1">
                                            বিষয়: {message.subject}
                                        </p>
                                        <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                            {message.message}
                                        </p>
                                    </div>

                                    <div className="flex gap-2">
                                        {message.status === 'new' && (
                                            <Button
                                                color="primary"
                                                size="sm"
                                                startContent={<FaCheckCircle />}
                                                onClick={() => handleStatusChange(message._id, 'read')}
                                            >
                                                Mark as Read
                                            </Button>
                                        )}
                                        {message.status !== 'replied' && (
                                            <Button
                                                color="success"
                                                size="sm"
                                                startContent={<FaReply />}
                                                onClick={() => handleStatusChange(message._id, 'replied')}
                                            >
                                                Mark as Replied
                                            </Button>
                                        )}
                                        {session?.user.role === 'superadmin' && (
                                            <Button
                                                color="danger"
                                                size="sm"
                                                startContent={<FaTrash />}
                                                onClick={() => handleDelete(message._id)}
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
