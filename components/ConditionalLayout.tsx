"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const isDashboard = pathname?.startsWith('/dashboard');
    const isAuth = pathname?.startsWith('/auth');

    // Ensure component is mounted on client before checking pathname
    useEffect(() => {
        setMounted(true);
    }, []);

    // During SSR or before hydration, render with default layout to avoid mismatch
    if (!mounted) {
        return <>{children}</>;
    }

    if (isDashboard || isAuth) {
        return <>{children}</>;
    }

    return (
        <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
