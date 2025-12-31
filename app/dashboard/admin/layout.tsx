'use client';

import { useSession, signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { FaUsers, FaUsersCog, FaDonate, FaHandHoldingHeart, FaBars, FaTimes, FaSignOutAlt, FaHome, FaEnvelope } from 'react-icons/fa';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (!session) {
        router.push('/auth/login');
        return null;
    }

    if (!session.user.isApproved) {
        router.push('/auth/waiting-approval');
        return null;
    }

    const menuItems = [
        {
            name: 'Dashboard',
            href: '/dashboard/admin',
            icon: FaHome,
            roles: ['admin', 'superadmin'],
        },
        {
            name: 'Pending Users',
            href: '/dashboard/admin/users',
            icon: FaUsers,
            roles: ['admin', 'superadmin'],
        },
        {
            name: 'Volunteers',
            href: '/dashboard/admin/volunteers',
            icon: FaHandHoldingHeart,
            roles: ['admin', 'superadmin'],
        },
        {
            name: 'Donations',
            href: '/dashboard/admin/donations',
            icon: FaDonate,
            roles: ['admin', 'superadmin'],
        },
        {
            name: 'Messages',
            href: '/dashboard/admin/messages',
            icon: FaEnvelope,
            roles: ['admin', 'superadmin'],
        },
        {
            name: 'Admin Management',
            href: '/dashboard/admin/manage-admins',
            icon: FaUsersCog,
            roles: ['superadmin'],
        },
    ];

    const filteredMenuItems = menuItems.filter((item) =>
        item.roles.includes(session.user.role)
    );

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile Header */}
            <div className="lg:hidden bg-primary-600 text-white p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div className="flex h-screen pt-16 lg:pt-0">
                {/* Sidebar */}
                <aside
                    className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } lg:translate-x-0 fixed lg:relative top-16 lg:top-0 bottom-0 left-0 z-40 w-64 bg-primary-700 text-white transition-transform duration-300 ease-in-out flex flex-col`}
                >
                    <div className="p-6 flex-shrink-0">
                        <Link href="/" className="flex items-center mb-4">
                            <FaHome className="mr-3" size={20} />
                            Home
                        </Link>
                        <h2 className="text-2xl font-bold mb-2">PIA Admin</h2>
                        <p className="text-sm text-primary-200">Welcome, {session.user.name}</p>
                        <p className="text-xs text-primary-300 mt-1">
                            Role: {session.user.role === 'superadmin' ? 'Super Admin' : 'Admin'}
                        </p>
                    </div>

                    <nav className="mt-6 flex-1 overflow-y-auto">
                        {filteredMenuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-primary-800 border-l-4 border-white'
                                        : 'hover:bg-primary-600'
                                        }`}
                                >
                                    <Icon className="mr-3" size={18} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-6 flex-shrink-0">
                        {/* Logout Button */}
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="flex items-center w-full px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 rounded-lg transition-colors cursor-pointer"
                        >
                            <FaSignOutAlt className="mr-3" size={18} />
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 w-full overflow-y-auto">
                    <div className="p-4 lg:p-6 w-full min-h-full">{children}</div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
