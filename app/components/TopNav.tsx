'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function TopNav() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const router = useRouter();
    const { logout } = useAuth();

    const handleSignOut = (e) => {
        e.preventDefault();
        logout();
        router.push('/');
    };

    return (
        <div
            className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-30 flex items-center justify-end px-6"
            data-oid="srh:1i5"
        >
            {/* Right Section */}
            <div className="flex items-center space-x-4" data-oid="jrrwusl">
                {/* Email */}
                <button
                    className="p-2 text-gray-600 hover:text-gray-900 relative"
                    title="Messages"
                    data-oid="jvf69cz"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        data-oid="y268hdi"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            data-oid="4sffwxy"
                        />
                    </svg>
                    <span
                        className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
                        data-oid="91hg4.z"
                    ></span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative" data-oid="1n6jcwp">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center space-x-3 focus:outline-none"
                        data-oid=":vwqva."
                    >
                        <div
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                            data-oid="mwc7o5k"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                data-oid=".:.sdo9"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                    data-oid="6i0wjtn"
                                />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700" data-oid="01-jqe0">
                            Admin User
                        </span>
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            data-oid="m:dzuex"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                data-oid="v40xias"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5"
                            data-oid="woavb5m"
                        >
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                data-oid="7805839"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                data-oid="_d4h02c"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                data-oid="6ai5hzk"
                            >
                                Help
                            </a>
                            <div className="border-t border-gray-100" data-oid="xv0fhcb"></div>
                            <a
                                href="#"
                                onClick={handleSignOut}
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                data-oid="3g1kekx"
                            >
                                Sign out
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
