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
            <div className="min-h-screen bg-white" data-oid="95u.ngc">
                {children}
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-white" data-oid="9g1kbno">
            {showNavigation && <Sidebar data-oid="lvtx56w" />}
            <div className={`flex-1 ${showNavigation ? 'ml-64' : ''}`} data-oid="605y.c6">
                {showNavigation && <TopNav data-oid="ce0._qn" />}
                <main className={`${showNavigation ? 'pt-16 px-6' : ''}`} data-oid="d3-.6br">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider data-oid=":_26n.b">
            <TemplateContent data-oid="re7zgus">{children}</TemplateContent>
        </AuthProvider>
    );
}
