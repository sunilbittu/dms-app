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
    const [viewMode, setViewMode] = useState<'list' | 'table'>('list');
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
        <div className="min-h-screen bg-gray-50" data-oid=":v2hak2">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="in-cu_w">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9x1l908"></div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="u_ue3k-">
                <div className="flex justify-between items-center mb-6" data-oid="db.l883">
                    <h1 className="text-3xl font-bold text-gray-900" data-oid="cw6ttj3">
                        Companies
                    </h1>
                    <div className="flex items-center space-x-4" data-oid="fnt-4cz">
                        <div className="relative" data-oid="d2s793p">
                            <input
                                type="text"
                                placeholder="Search companies..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                data-oid="n113l.x"
                            />

                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid=".0y2is2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    data-oid="1f0qg2n"
                                />
                            </svg>
                        </div>
                        <div className="flex space-x-2" data-oid="n19k7oq">
                            <button
                                onClick={() => setViewMode('list')}
                                title="List View"
                                className={`p-2 rounded-lg ${
                                    viewMode === 'list'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                                data-oid="7-89m04"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="fc9uyo9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        data-oid=":3sl:91"
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
                                data-oid="288zvie"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="5tel-bs"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M3 14h18M3 4h18M3 18h18M3 8h18"
                                        data-oid="ja3n0ix"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === 'table' ? (
                    <div
                        className="bg-white shadow-sm rounded-lg overflow-hidden"
                        data-oid="11_an.h"
                    >
                        <table className="min-w-full divide-y divide-gray-200" data-oid="45g_6hb">
                            <thead className="bg-gray-50" data-oid="1k:ao0d">
                                <tr data-oid="5jkzbwr">
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="j63.wda"
                                    >
                                        Company Name
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="oz08b2g"
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="3r9sewi"
                                    >
                                        Status
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        data-oid="kqt788."
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200" data-oid="gczu7f_">
                                {filteredCompanies.map((company) => (
                                    <tr
                                        key={company.id}
                                        className="hover:bg-gray-50 cursor-pointer"
                                        onClick={(e) => handleCompanyClick(company)}
                                        data-oid="5pa35fp"
                                    >
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="c6kd5c3"
                                        >
                                            <div
                                                className="text-sm font-medium text-gray-900"
                                                data-oid="kl80al9"
                                            >
                                                {company.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4" data-oid="4gdwkwm">
                                            <div
                                                className="text-sm text-gray-500"
                                                data-oid="1d-fykl"
                                            >
                                                {company.description}
                                            </div>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap"
                                            data-oid="kk_zma5"
                                        >
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    company.status === 'Active'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                                data-oid="d7parfl"
                                            >
                                                {company.status}
                                            </span>
                                        </td>
                                        <td
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                            data-oid="4zwzt4v"
                                        >
                                            <button
                                                onClick={(e) => handleCompanyClick(company)}
                                                className="text-blue-600 hover:text-blue-900"
                                                data-oid="ay2zkgj"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="space-y-4" data-oid=".5cnv0p">
                        {displayedCompanies.map((company) => (
                            <div
                                key={company.id}
                                onClick={(e) => handleCompanyClick(company)}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
                                data-oid="_2tj_.-"
                            >
                                <h2
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="ngth53y"
                                >
                                    {company.name}
                                </h2>
                                <p className="text-gray-600" data-oid="9t9sso_">
                                    {company.description}
                                </p>
                            </div>
                        ))}
                        <div ref={observerTarget} className="h-4" data-oid="mei1pki"></div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto" data-oid="l.20.u4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="y2edcfi">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid=":fruxog"
                    >
                        <p className="text-gray-500 text-sm" data-oid="166:-:a">
                            © {new Date().getFullYear()} Datadot. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0" data-oid="oa1zpz3">
                            <Link
                                href="/privacy"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="h1ueuet"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-500 hover:text-gray-700 text-sm"
                                data-oid="a2ufozx"
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
