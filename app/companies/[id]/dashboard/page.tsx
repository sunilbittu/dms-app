'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';

const menuItems = [
    { name: 'Dashboard', path: 'dashboard', icon: '📊' },
    { name: 'Documents', path: 'documents', icon: '📄' },
    { name: 'Reports', path: 'reports', icon: '📈' },
    { name: 'Settings', path: 'settings', icon: '⚙️' },
    { name: 'Users', path: 'users', icon: '👥' },
    { name: 'Logout', path: 'logout', icon: '🚪' },
];

export default function CompanyDashboardPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const handleMenuClick = (path: string) => {
        if (path === 'logout') {
            logout();
            router.push('/');
            return;
        }
        setActiveMenu(path);
        router.push(`/companies/${params.id}/${path}`);
    };

    return (
        <div className="min-h-screen bg-gray-50" data-oid="f743814">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm" data-oid="eq6:fz6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="90e98_x">
                    <div className="flex justify-between h-16" data-oid="6eqom:u">
                        {/* Logo and Company Name */}
                        <div className="flex items-center" data-oid="jry0u08">
                            <div className="flex-shrink-0 flex items-center" data-oid="j:k2m5l">
                                <img
                                    src="/images/datadot-logo.png"
                                    alt="Datadot Logo"
                                    className="h-8 w-auto"
                                    data-oid="5--l.re"
                                />

                                <span
                                    className="ml-2 text-sm text-orange-500 font-medium"
                                    data-oid="8.fv3op"
                                >
                                    Business Re-engineering
                                </span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-4" data-oid="p:hb9xx">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleMenuClick(item.path)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 ${
                                        activeMenu === item.path
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    data-oid="v.9.7qw"
                                >
                                    <span data-oid="a::7291">{item.icon}</span>
                                    <span data-oid="yxeqw3g">{item.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden" data-oid="s3n4tkb">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                data-oid="dg070tv"
                            >
                                <span className="sr-only" data-oid="whfn1p2">
                                    Open main menu
                                </span>
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="3.cmbry"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="ba9vjcf"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="8qok6cv"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="9.10o4i"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden" data-oid="g5ltt6x">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="o-fx7no">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        handleMenuClick(item.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium ${
                                        activeMenu === item.path
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                    data-oid="nhmqnvw"
                                >
                                    <span className="mr-2" data-oid="0tcc87s">
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="-n7hl1t">
                <div className="bg-white shadow-sm rounded-lg p-6" data-oid="qo_9a9.">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4" data-oid="6fjabjl">
                        Company Dashboard
                    </h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="3l-k:1."
                    >
                        {/* Dashboard Cards */}
                        <div className="bg-blue-50 p-6 rounded-lg" data-oid="bgse6af">
                            <h3 className="text-lg font-semibold text-blue-700" data-oid="85sgsk-">
                                Documents
                            </h3>
                            <p className="text-blue-600 text-3xl font-bold mt-2" data-oid="nwf7d9x">
                                24
                            </p>
                            <p className="text-blue-500 text-sm mt-1" data-oid="qvv0:f1">
                                Total documents
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg" data-oid="_-57z:8">
                            <h3 className="text-lg font-semibold text-green-700" data-oid="jx9kdba">
                                Users
                            </h3>
                            <p
                                className="text-green-600 text-3xl font-bold mt-2"
                                data-oid="wnnu4pj"
                            >
                                12
                            </p>
                            <p className="text-green-500 text-sm mt-1" data-oid="2x_kib7">
                                Active users
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg" data-oid="3lgc5n3">
                            <h3
                                className="text-lg font-semibold text-purple-700"
                                data-oid="w.ev_kj"
                            >
                                Reports
                            </h3>
                            <p
                                className="text-purple-600 text-3xl font-bold mt-2"
                                data-oid="l-naztm"
                            >
                                8
                            </p>
                            <p className="text-purple-500 text-sm mt-1" data-oid="0a-k4go">
                                Generated this month
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
