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
        <div className="min-h-screen bg-gray-50" data-oid="hvnhic2">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-sm" data-oid="qaape1p">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="vxfv.w5">
                    <div className="flex justify-between h-16" data-oid="7v8c_m9">
                        {/* Back Arrow and Logo */}
                        <div className="flex items-center" data-oid="koshl8l">
                            <button
                                onClick={() => router.push('/companies')}
                                className="mr-4 p-1 rounded-full hover:bg-gray-100"
                                title="Back to Companies"
                                data-oid="j2nkvl5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="00wu31z"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        data-oid="6rp7zz2"
                                    />
                                </svg>
                            </button>
                            <div className="flex-shrink-0 flex items-center" data-oid="ouo.fwp">
                                <img
                                    src="/images/datadot-logo.png"
                                    alt="Datadot Logo"
                                    className="h-8 w-auto"
                                    data-oid="qlpu5hm"
                                />

                                <span
                                    className="ml-2 text-sm text-orange-500 font-medium"
                                    data-oid="5u:kkgm"
                                >
                                    Business Re-engineering
                                </span>
                            </div>
                        </div>

                        {/* User Profile */}
                        <div className="flex items-center space-x-4" data-oid="pfi-9xr">
                            <div className="relative" data-oid="ls.roj1">
                                <button
                                    className="flex items-center space-x-2 focus:outline-none"
                                    data-oid="221lwtg"
                                >
                                    <div
                                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                                        data-oid="p8azd85"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="lxw:hx7"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                clipRule="evenodd"
                                                data-oid="ow0_n5_"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden" data-oid="5eamdqf">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                data-oid="3sxdzen"
                            >
                                <span className="sr-only" data-oid="sw2yg3v">
                                    Open main menu
                                </span>
                                {isMobileMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="b4.07ea"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="qvx-2-u"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="m5064hz"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="j.sfh-w"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden" data-oid="h7kpbj6">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="9m.he_o">
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
                                    data-oid="h_kzr5_"
                                >
                                    <span className="mr-2" data-oid="an:ql8f">
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="d5xvyi-">
                <div className="bg-white shadow-sm rounded-lg p-6" data-oid="hpf31vt">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4" data-oid="qzxog8u">
                        Company Dashboard
                    </h1>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        data-oid="clqst4z"
                    >
                        {/* Dashboard Cards */}
                        <div className="bg-blue-50 p-6 rounded-lg" data-oid="u0ec0.0">
                            <h3 className="text-lg font-semibold text-blue-700" data-oid="ivlj-9_">
                                Documents
                            </h3>
                            <p className="text-blue-600 text-3xl font-bold mt-2" data-oid="7b5t94m">
                                24
                            </p>
                            <p className="text-blue-500 text-sm mt-1" data-oid="dw01h_l">
                                Total documents
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg" data-oid="hbnwo:h">
                            <h3 className="text-lg font-semibold text-green-700" data-oid="6znfvhm">
                                Users
                            </h3>
                            <p
                                className="text-green-600 text-3xl font-bold mt-2"
                                data-oid="0386kz7"
                            >
                                12
                            </p>
                            <p className="text-green-500 text-sm mt-1" data-oid="cqhgrer">
                                Active users
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg" data-oid="lss5s_0">
                            <h3
                                className="text-lg font-semibold text-purple-700"
                                data-oid="he32zmr"
                            >
                                Reports
                            </h3>
                            <p
                                className="text-purple-600 text-3xl font-bold mt-2"
                                data-oid="z8s0-:6"
                            >
                                8
                            </p>
                            <p className="text-purple-500 text-sm mt-1" data-oid="ug6:yz3">
                                Generated this month
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
