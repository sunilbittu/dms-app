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
        <div className="min-h-screen bg-gray-50" data-oid="p-pwh7q">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="-f_uokr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s3parwy"></div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="ykze_hf">
                <div className="flex justify-between items-center mb-6" data-oid="xyt48ro">
                    <h1 className="text-3xl font-bold text-gray-900" data-oid="_dyr_ou">
                        Companies
                    </h1>
                    <div className="flex items-center space-x-4" data-oid="hdqqj2a">
                        <div className="relative" data-oid="vn5q6or">
                            <input
                                type="text"
                                placeholder="Search companies..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                data-oid="kl2nfjd"
                            />

                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="vzlypdk"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    data-oid="1.dz:cu"
                                />
                            </svg>
                        </div>
                        <div className="flex space-x-2" data-oid="unsgwdt">
                            <button
                                onClick={() => setViewMode('list')}
                                title="List View"
                                className={`p-2 rounded-lg ${
                                    viewMode === 'list'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                data-oid="zztmy4j"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="hny4:::"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        data-oid="q_3fa:z"
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
                                data-oid="3j8p1bk"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="l-yal0t"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M3 14h18M3 4h18M3 18h18M3 8h18"
                                        data-oid="v7sbaxn"
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
                                data-oid="voyujyt"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":psmw8n"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                                        data-oid="g9bk9j-"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === 'table' ? (
                    <div
                        className="bg-white shadow-sm rounded-lg overflow-hidden"
                        data-oid="gab7yab"
                    >
                        <table className="min-w-full divide-y divide-gray-200" data-oid="-wxld.w">
                            <thead className="bg-gray-50" data-oid="cydww7h">
                                <tr data-oid="im297u-">
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="sb14tlo"
                                    >
                                        Company Name
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="x.dbeaw"
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="2dhzjs:"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="u07jemr">
                                {filteredCompanies.map((company) => (
                                    <tr
                                        key={company.id}
                                        className="hover:bg-gray-50 cursor-pointer"
                                        onClick={(e) => handleCompanyClick(company)}
                                        data-oid="p2g8dic"
                                    >
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="vc3pt:l"
                                        >
                                            <div
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="3hqisoc"
                                            >
                                                {company.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4" data-oid="hs0a68d">
                                            <div
                                                className="text-sm text-gray-500"
                                                data-oid="7og7u88"
                                            >
                                                {company.description}
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="532nji4"
                                        >
                                            <button
                                                onClick={(e) => handleCompanyClick(company)}
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="_20yxip"
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
                    <div className="space-y-4" data-oid="h2clv83">
                        {displayedCompanies.map((company) => (
                            <div
                                key={company.id}
                                onClick={(e) => handleCompanyClick(company)}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                                data-oid="sr3:dsm"
                            >
                                <h2
                                    className="text-xl font-semibold text-gray-900"
                                    data-oid="se4168c"
                                >
                                    {company.name}
                                </h2>
                            </div>
                        ))}
                        <div ref={observerTarget} className="h-4" data-oid="2xv7x1q"></div>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        data-oid="9rerr7o"
                    >
                        {filteredCompanies.map((company) => (
                            <div
                                key={company.id}
                                onClick={(e) => handleCompanyClick(company)}
                                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 flex items-center justify-center h-32"
                                data-oid="16lp:70"
                            >
                                <h3
                                    className="text-lg font-medium text-gray-900 text-center"
                                    data-oid="crp2cxs"
                                >
                                    {company.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto" data-oid="pg7_8sk">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="salck_7">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="i1d:1o6"
                    >
                        <p className="text-gray-500 text-sm" data-oid="oamdk2q">
                            © {new Date().getFullYear()} Datadot. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0" data-oid="zwx7i8j">
                            <Link
                                href="/privacy"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="412di67"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="0yn.thd"
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
