'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    { name: 'Dashboard', icon: '📊', path: 'dashboard' },
    { name: 'Documents', icon: '📄', path: 'documents' },
    { name: 'Reports', icon: '📈', path: 'reports' },
    { name: 'Settings', icon: '⚙️', path: 'settings' },
    { name: 'Users', icon: '👥', path: 'users' },
    { name: 'Logout', icon: '🚪', path: '/' },
];

export default function CompanyDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    // Redirect to dashboard by default
    useEffect(() => {
        router.push(`/companies/${params.id}/dashboard`);
    }, [params.id, router]);

    const handleMenuClick = (path: string) => {
        if (path === '/') {
            router.push('/');
        } else {
            setActiveMenu(path);
        }
    };

    return null; // No need to render anything as we're redirecting
}
