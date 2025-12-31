'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard');
    const isAuth = pathname?.startsWith('/auth');

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
