'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
    isAuthenticated: boolean;
    selectedCompany: { id: string; name: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    selectCompany: (company: { id: string; name: string }) => void;
    clearSelectedCompany: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState<{ id: string; name: string } | null>(
        null,
    );
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
        // For demo purposes, using dummy credentials
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('token', 'dummy_token');
            setIsAuthenticated(true);
            router.push('/companies');
        } else {
            throw new Error('Invalid credentials');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        clearSelectedCompany();
        router.push('/');
    };

    const selectCompany = (company: { id: string; name: string }) => {
        setSelectedCompany(company);
        localStorage.setItem('selectedCompany', JSON.stringify(company));
    };

    const clearSelectedCompany = () => {
        setSelectedCompany(null);
        localStorage.removeItem('selectedCompany');
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                selectedCompany,
                login,
                logout,
                selectCompany,
                clearSelectedCompany,
            }}
            data-oid="2:93ra9"
        >
            {children}
        </AuthContext.Provider>
    );
};

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
