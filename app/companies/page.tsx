'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Static list of companies
const companies = [
    'DSS Software Solutions Sdn. Bhd.',
    'Datadot Software Solution Pvt. Ltd. (INDIA)',
    'APEC',
    'DSS23',
    'DSSsssddd',
    'DSa',
    'sdfds',
    'company-1',
    'cdss',
    'DSS Software Solutions Sdn. Bhd. SG',
    'Testcompanyy',
    'Testcompany1',
    'Example1',
    'Testcompany1',
];

export default function CompaniesPage() {
    const router = useRouter();

    const handleLogout = () => {
        // In a real app, you would clear authentication state here
        router.push('/');
    };

    return (
        <div
            className="min-h-screen bg-blue-600 flex flex-col items-center justify-center px-4"
            data-oid="mvo4jga"
        >
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6" data-oid="fm2cynl">
                {/* Logo */}
                <div className="flex flex-col items-center mb-8" data-oid="626qfc0">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-12 w-auto mb-1"
                        data-oid="oy7iztf"
                    />

                    <div className="text-xs text-orange-500 font-medium" data-oid="w1_sz6q">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1
                    className="text-2xl font-medium text-center mb-6 text-gray-800"
                    data-oid="yuharny"
                >
                    Select your Company
                </h1>

                {/* Companies List */}
                <div className="space-y-2 mb-6" data-oid="6q_77-w">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="text-center py-2 hover:bg-gray-100 cursor-pointer rounded transition-colors"
                            onClick={() => console.log(`Selected company: ${company}`)}
                            data-oid="cwb6ko5"
                        >
                            {company}
                        </div>
                    ))}
                </div>

                {/* Logout Button */}
                <div className="flex justify-center mt-6" data-oid="za65y8d">
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors flex items-center"
                        data-oid="psn37fi"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-oid="u5mc7vc"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z"
                                clipRule="evenodd"
                                data-oid="0w0:nng"
                            />
                        </svg>
                        Logout
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div
                className="mt-4 text-xs text-white flex justify-between w-full max-w-2xl px-2"
                data-oid="3cqscoi"
            >
                <div data-oid="_9j8:tj">Copyright © DMS 2024</div>
                <div data-oid="tcb-7nn">Privacy Policy Terms & Conditions</div>
            </div>
        </div>
    );
}
