'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';

interface Company {
    id: number;
    name: string;
    description: string;
    status: 'Active' | 'Inactive';
}

const companies: Company[] = [
    {
        id: 1,
        name: 'Acme Corporation',
        description: 'Global leader in innovative solutions',
        status: 'Active',
    },
    {
        id: 2,
        name: 'TechCorp Industries',
        description: 'Pioneering technology solutions',
        status: 'Active',
    },
    {
        id: 3,
        name: 'Global Dynamics',
        description: 'Revolutionary research and development',
        status: 'Inactive',
    },
    {
        id: 4,
        name: 'Quantum Enterprises',
        description: 'Next-generation quantum computing',
        status: 'Active',
    },
    {
        id: 5,
        name: 'Stellar Systems',
        description: 'Space technology and exploration',
        status: 'Active',
    },
];

const ITEMS_PER_PAGE = 5;

export default function CompaniesPage() {
    const router = useRouter();
    const { logout, selectCompany } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState<'list' | 'table' | 'tiles'>('list');
    const [displayedCompanies, setDisplayedCompanies] = useState(
        companies.slice(0, ITEMS_PER_PAGE),
    );
    const observerTarget = useRef(null);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const handleCompanyClick = (company: Company) => {
        selectCompany({ id: company.id.toString(), name: company.name });
        router.push(`/companies/${company.id}/dashboard`);
    };

    // Filter companies based on search term
    const filteredCompanies = companies.filter(
        (company) =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Infinite scroll effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && viewMode === 'list') {
                    setDisplayedCompanies((prev) => {
                        const nextIndex = prev.length;
                        const nextItems = filteredCompanies.slice(
                            nextIndex,
                            nextIndex + ITEMS_PER_PAGE,
                        );
                        return [...prev, ...nextItems];
                    });
                }
            },
            { threshold: 1.0 },
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [filteredCompanies, viewMode]);

    // Reset displayed companies when search term changes
    useEffect(() => {
        setDisplayedCompanies(filteredCompanies.slice(0, ITEMS_PER_PAGE));
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-gray-50" data-oid="1ffe8w-">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="c4e_blo">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="kcn2a2t"></div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="bsw:iqk">
                <div className="flex justify-between items-center mb-6" data-oid="vuh8klb">
                    <h1 className="text-3xl font-bold text-gray-900" data-oid="4:ctdwg">
                        Companies
                    </h1>
                    <div className="flex items-center space-x-4" data-oid="w7o-kr8">
                        <div className="relative" data-oid="xckoo.x">
                            <input
                                type="text"
                                placeholder="Search companies..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                data-oid="21hxztz"
                            />

                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="uc2:zpa"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    data-oid="pe_ra34"
                                />
                            </svg>
                        </div>
                        <div className="flex space-x-2" data-oid="ozlvakv">
                            <button
                                onClick={() => setViewMode('list')}
                                title="List View"
                                className={`p-2 rounded-lg ${
                                    viewMode === 'list'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                data-oid="00532o7"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="vxa.kq."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        data-oid="ysnij-b"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('table')}
                                title="Table View"
                                className={`p-2 rounded-lg ${
                                    viewMode === 'table'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                data-oid="0:m402t"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="-n.4j64"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M3 14h18M3 4h18M3 18h18M3 8h18"
                                        data-oid="5yeesz0"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('tiles')}
                                title="Tiles View"
                                className={`p-2 rounded-lg ${
                                    viewMode === 'tiles'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                data-oid="2-lmosl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="7fxu01n"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                                        data-oid="ntyz6jq"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === 'table' ? (
                    <div
                        className="bg-white shadow-sm rounded-lg overflow-hidden"
                        data-oid="nhumvl:"
                    >
                        <table className="min-w-full divide-y divide-gray-200" data-oid="j4v529h">
                            <thead className="bg-gray-50" data-oid="27on-pp">
                                <tr data-oid="ien47dw">
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="48tw0ar"
                                    >
                                        Company Name
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="g.rxi76"
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="9n67ma3"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="7kcoc1m">
                                {filteredCompanies.map((company) => (
                                    <tr
                                        key={company.id}
                                        className="hover:bg-gray-50 cursor-pointer"
                                        onClick={(e) => handleCompanyClick(company)}
                                        data-oid="rlv-fm4"
                                    >
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="fkx10q1"
                                        >
                                            <div
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="ueb8oh_"
                                            >
                                                {company.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4" data-oid="sc4t9st">
                                            <div
                                                className="text-sm text-gray-500"
                                                data-oid="7.rve3i"
                                            >
                                                {company.description}
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="qac87qv"
                                        >
                                            <button
                                                onClick={(e) => handleCompanyClick(company)}
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="b.8yj6i"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : viewMode === 'list' ? (
                    <div className="space-y-4" data-oid="d31omvn">
                        {displayedCompanies.map((company) => (
                            <div
                                key={company.id}
                                onClick={(e) => handleCompanyClick(company)}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                                data-oid="a:ft1up"
                            >
                                <h2
                                    className="text-xl font-semibold text-gray-900"
                                    data-oid="ncz032b"
                                >
                                    {company.name}
                                </h2>
                            </div>
                        ))}
                        <div ref={observerTarget} className="h-4" data-oid="zwq3sj3"></div>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        data-oid="-upimg-"
                    >
                        {filteredCompanies.map((company) => (
                            <div
                                key={company.id}
                                onClick={(e) => handleCompanyClick(company)}
                                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 flex items-center justify-center h-32"
                                data-oid="9y2r5nk"
                            >
                                <h3
                                    className="text-lg font-medium text-gray-900 text-center"
                                    data-oid="2:twxf6"
                                >
                                    {company.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto" data-oid="f-i5c.7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="np97aq0">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="jy.3ppk"
                    >
                        <p className="text-gray-500 text-sm" data-oid="pe7aie1">
                            © {new Date().getFullYear()} Datadot. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0" data-oid="l.koc_u">
                            <Link
                                href="/privacy"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="u0ek_cu"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="8e4d-.l"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
