'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const menuItems = {
    reports: [
        { name: 'Duplicate Report', path: '/reports/duplicate' },
        { name: 'Pending Workflows Report', path: '/reports/pending-workflows' },
        { name: 'Retention End Report', path: '/reports/retention-end' },
        { name: 'Due Date Report', path: '/reports/due-date' },
        { name: 'Archived Docs Report', path: '/reports/archived-docs' },
        { name: 'All Files Report', path: '/reports/all-files' },
        { name: 'Users Report', path: '/reports/users' },
        { name: 'Specific Doc Log Report', path: '/reports/doc-log' },
    ],

    userManagement: [
        { name: 'Manage Users', path: '/user-management/users' },
        { name: 'Password Management', path: '/user-management/password' },
        { name: 'Roles Management', path: '/user-management/roles' },
        { name: 'Permission Management', path: '/user-management/permissions' },
        { name: 'Manage User Teams', path: '/user-management/teams' },
    ],
};

export default function Sidebar() {
    const [expandedSections, setExpandedSections] = useState({
        reports: true,
        userManagement: true,
    });
    const pathname = usePathname();

    const toggleSection = (section: 'reports' | 'userManagement') => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="w-64 bg-[#1E1E1E] fixed left-0 top-0 h-screen" data-oid="d66h5__">
            {/* Logo Section */}
            <div className="h-16 flex items-center px-4" data-oid="o6_iyxj">
                <Link href="/" className="flex items-center" data-oid="gi4yw6s">
                    <Image
                        src="/images/datadot-logo.png"
                        alt="Datadot"
                        width={24}
                        height={24}
                        className="h-6 w-auto"
                        data-oid="y8p6f3v"
                    />

                    <span className="ml-2 text-orange-500 font-medium" data-oid="esnl.hx">
                        DMS
                    </span>
                </Link>
            </div>

            {/* Menu Sections */}
            <div className="py-2" data-oid="zcw6dji">
                {/* Reports Section */}
                <div data-oid="6uq5o:h">
                    <button
                        onClick={() => toggleSection('reports')}
                        className="flex items-center w-full text-white py-2 px-4 hover:bg-gray-800"
                        data-oid="ssxbajp"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" data-oid="tuena35">
                            <path
                                d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                data-oid="c9njaf:"
                            />

                            <path
                                d="M13 2v7h7"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                data-oid="dg_tsv3"
                            />
                        </svg>
                        <span className="ml-3" data-oid="c.yltux">
                            Reports
                        </span>
                        <svg
                            className={`ml-auto w-5 h-5 transform transition-transform ${
                                expandedSections.reports ? 'rotate-180' : ''
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            data-oid="67g4qn4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                data-oid="22jrn_l"
                            />
                        </svg>
                    </button>
                    {expandedSections.reports && (
                        <div className="space-y-1" data-oid="-:boz_t">
                            {menuItems.reports.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block py-2 pl-11 pr-4 text-sm ${
                                        pathname === item.path
                                            ? 'text-white bg-gray-800'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                                    data-oid="wq5qgpc"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* User Management Section */}
                <div data-oid="p2t40oa">
                    <button
                        onClick={() => toggleSection('userManagement')}
                        className="flex items-center w-full text-white py-2 px-4 hover:bg-gray-800"
                        data-oid="e_d6w_1"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" data-oid="j1sx8n4">
                            <path
                                d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                data-oid="tg:24:l"
                            />

                            <path
                                d="M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                data-oid="9._s5f9"
                            />
                        </svg>
                        <span className="ml-3" data-oid="ni-.gbx">
                            User Management
                        </span>
                        <svg
                            className={`ml-auto w-5 h-5 transform transition-transform ${
                                expandedSections.userManagement ? 'rotate-180' : ''
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            data-oid="_ch_viw"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                data-oid="34h4p5_"
                            />
                        </svg>
                    </button>
                    {expandedSections.userManagement && (
                        <div className="space-y-1" data-oid="o6mztv3">
                            {menuItems.userManagement.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block py-2 pl-11 pr-4 text-sm ${
                                        pathname === item.path
                                            ? 'text-white bg-gray-800'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                                    data-oid="c_di:b8"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
