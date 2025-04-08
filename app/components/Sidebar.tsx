'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const mainMenuItems = [
    { name: 'Inbox', path: '/inbox', icon: '📨', count: 26 },
    { name: 'Teams', path: '/teams', icon: '👥' },
];

const adminMenuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🔍' },
    {
        name: 'Reports',
        path: '/reports',
        icon: '📊',
        hasSubmenu: true,
        submenuItems: [
            { name: 'Duplicate Report', path: '/reports/duplicate' },
            { name: 'Pending Workflows Report', path: '/reports/pending-workflows' },
            { name: 'Retention End Report', path: '/reports/retention-end' },
            { name: 'Due Date Report', path: '/reports/due-date' },
            { name: 'Archived Docs Report', path: '/reports/archived-docs' },
            { name: 'All Files Report', path: '/reports/all-files' },
            { name: 'Users Report', path: '/reports/users' },
            { name: 'Specific Doc Log Report', path: '/reports/doc-log' },
        ],
    },
    {
        name: 'User Management',
        path: '/user-management',
        icon: '👤',
        hasSubmenu: true,
        submenuItems: [
            { name: 'Manage Users', path: '/user-management/users' },
            { name: 'Password Management', path: '/user-management/password' },
            { name: 'Roles Management', path: '/user-management/roles' },
            { name: 'Permission Management', path: '/user-management/permissions' },
            { name: 'Manage User Teams', path: '/user-management/teams' },
        ],
    },
    { name: 'Recycle Bin', path: '/recycle-bin', icon: '🗑️' },
    { name: 'Numbering', path: '/numbering', icon: '🔢' },
    { name: 'Metadata', path: '/metadata', icon: '📋' },
    { name: 'Tags', path: '/tags', icon: '🏷️' },
    { name: 'Audit Log', path: '/audit-log', icon: '📝' },
    {
        name: 'Configuration',
        path: '/configuration',
        icon: '⚙️',
        hasSubmenu: true,
        submenuItems: [],
    },
    {
        name: 'Notifications',
        path: '/notifications',
        icon: '🔔',
        hasSubmenu: true,
        submenuItems: [],
    },
];

export default function Sidebar() {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        Reports: false,
        'User Management': false,
        Configuration: false,
        Notifications: false,
    });
    const pathname = usePathname();

    const toggleSection = (sectionName: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionName]: !prev[sectionName],
        }));
    };

    return (
        <div
            className="w-64 bg-[#1E1E1E] fixed left-0 top-0 h-screen overflow-y-auto"
            data-oid="d66h5__"
        >
            {/* Main Menu Items */}
            <div className="py-4 px-4 space-y-3" data-oid="-_drfwf">
                {mainMenuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center text-white py-2 px-2 rounded hover:bg-gray-800 ${
                            pathname === item.path ? 'bg-gray-800' : ''
                        }`}
                        data-oid="xe:re.a"
                    >
                        <span className="mr-3" data-oid="w6zc4z:">
                            {item.icon}
                        </span>
                        <span data-oid="s765_7v">{item.name}</span>
                        {item.count && (
                            <span
                                className="ml-2 bg-gray-700 px-2 py-0.5 rounded-full text-xs"
                                data-oid="ute.xw5"
                            >
                                {item.count}
                            </span>
                        )}
                    </Link>
                ))}
            </div>

            {/* Admin Tools Divider */}
            <div className="px-4 py-2" data-oid="nd0l5pv">
                <div className="flex items-center" data-oid="g0pvr:7">
                    <div className="flex-grow border-t border-gray-600" data-oid="l6tdneh"></div>
                    <span className="px-2 text-gray-400 text-sm" data-oid="b-mmukd">
                        Admin Tools
                    </span>
                    <div className="flex-grow border-t border-gray-600" data-oid="enke9ky"></div>
                </div>
            </div>

            {/* Admin Menu Items */}
            <div className="px-4 space-y-1" data-oid="vnabbau">
                {adminMenuItems.map((item) => (
                    <div key={item.path} data-oid="2cbkxnj">
                        <Link
                            href={item.hasSubmenu ? '#' : item.path}
                            onClick={item.hasSubmenu ? () => toggleSection(item.name) : undefined}
                            className={`flex items-center text-white py-2 px-2 rounded hover:bg-gray-800 ${
                                pathname === item.path || pathname.startsWith(item.path + '/')
                                    ? 'bg-gray-800'
                                    : ''
                            }`}
                            data-oid="fvhjhsz"
                        >
                            <span className="mr-3" data-oid="nndmwnb">
                                {item.icon}
                            </span>
                            <span data-oid="pz5dg:t">{item.name}</span>
                            {item.hasSubmenu && (
                                <svg
                                    className={`ml-auto w-5 h-5 transform transition-transform ${
                                        expandedSections[item.name] ? 'rotate-180' : ''
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    data-oid="pyn3a2y"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                        data-oid="sxkjjou"
                                    />
                                </svg>
                            )}
                        </Link>

                        {/* Submenu Items */}
                        {item.hasSubmenu && expandedSections[item.name] && item.submenuItems && (
                            <div className="ml-8 space-y-1 mt-1" data-oid="z8q-lvs">
                                {item.submenuItems.map((subItem) => (
                                    <Link
                                        key={subItem.path}
                                        href={subItem.path}
                                        className={`block py-2 text-sm ${
                                            pathname === subItem.path
                                                ? 'text-white'
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                        data-oid="syqb3fq"
                                    >
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
