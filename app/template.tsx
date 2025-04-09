'use client';

import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import { usePathname } from 'next/navigation';
import { AuthProvider, useAuth, isAuthRoute } from './context/AuthContext';

function TemplateContent({ children }: { children: React.ReactNode }) {
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
            <div className="min-h-screen bg-white" data-oid="zzjqcvv">
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-white" data-oid="fct0b5k">
            {showNavigation && <Sidebar data-oid="0xahc5b" />}
            <div className={`flex-1 ${showNavigation ? 'ml-64' : ''}`} data-oid="1w7dfeg">
                {showNavigation && <TopNav data-oid="-akh73x" />}
                <main className={`${showNavigation ? 'pt-16 px-6' : ''}`} data-oid="g_rwibc">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider data-oid="g99tgui">
            <TemplateContent data-oid=".r4vjbp">{children}</TemplateContent>
        </AuthProvider>
    );
}
