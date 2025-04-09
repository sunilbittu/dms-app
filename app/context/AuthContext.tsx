'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
    isAuthenticated: boolean;
    selectedCompany: number | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    setSelectedCompany: (companyId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    // Check authentication status on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        const savedCompany = localStorage.getItem('selectedCompany');

        if (token) {
            setIsAuthenticated(true);
            if (savedCompany) {
                setSelectedCompany(JSON.parse(savedCompany));
            }
        }

        // Redirect if not authenticated and not on auth pages
        if (!token && !isAuthRoute(pathname)) {
            router.push('/');
        }
    }, [pathname, router]);

    const login = async (username: string, password: string) => {
        // TODO: Implement actual authentication logic
        if (username && password) {
            setIsAuthenticated(true);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setSelectedCompany(null);
        localStorage.removeItem('token');
        localStorage.removeItem('selectedCompany');
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                selectedCompany,
                login,
                logout,
                setSelectedCompany,
            }}
            data-oid="0_7dvx3"
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function isAuthRoute(pathname: string) {
    const authRoutes = ['/', '/forgot-password'];
    return authRoutes.includes(pathname);
}
