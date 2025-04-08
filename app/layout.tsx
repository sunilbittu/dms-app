'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { usePathname } from 'next/navigation';
import { AuthProvider, useAuth, isAuthRoute } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

function RootLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { isAuthenticated, selectedCompany } = useAuth();
    const isLoginPage = isAuthRoute(pathname);

    // Check if we're on the companies page
    const isCompaniesPage = pathname === '/companies';

    // Don't show navigation on login pages or the companies page
    const showNavigation = isAuthenticated && !isLoginPage && selectedCompany && !isCompaniesPage;

    // For companies page, return a different layout without sidebar
    if (isCompaniesPage) {
        return (
            <div className="min-h-screen bg-white" data-oid="d01bovx">
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-white" data-oid="nn_z97g">
            {showNavigation && <Sidebar data-oid="hsd9iz6" />}
            <div className={`flex-1 ${showNavigation ? 'ml-64' : ''}`} data-oid="02t7vwg">
                {showNavigation && <TopNav data-oid="s4f0nvp" />}
                <main className={`${showNavigation ? 'pt-16 px-6' : ''}`} data-oid="t7dag6h">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-oid="wvn2841">
            <body className={inter.className} data-oid="cp8o0px">
                <AuthProvider data-oid="j.6_uw9">
                    <RootLayoutContent data-oid="j5_:hnm">{children}</RootLayoutContent>
                </AuthProvider>
            </body>
        </html>
    );
}
