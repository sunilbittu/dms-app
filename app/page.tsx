'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from './context/AuthContext';

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(username, password);
        } catch (error) {
            alert('Invalid credentials. Please use the demo credentials provided.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
            data-oid="uy.3-jj"
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/40" data-oid="u6_sh33"></div>

            <div className="w-full max-w-md relative z-10 mr-16" data-oid="lsh5oao">
                {/* Logo */}
                <div className="flex flex-col items-center mb-12" data-oid="rslr69w">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                        data-oid="atys7e4"
                    />

                    <div className="text-sm text-orange-500 font-medium" data-oid="j0mdoqp">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-medium text-center mb-2" data-oid="d.i1gug">
                    Sign in
                </h1>
                <p className="text-gray-400 text-center mb-8" data-oid="2t71nzq">
                    Enter your credentials to continue
                </p>

                {/* Dummy Credentials */}
                <div
                    className="mb-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
                    data-oid="9csud0p"
                >
                    <h3 className="text-sm font-medium text-gray-300 mb-2" data-oid="dt9l9ee">
                        Demo Credentials:
                    </h3>
                    <div className="space-y-1 text-sm" data-oid=":w8x.i8">
                        <p className="text-gray-400" data-oid="3qzemvu">
                            Username:{' '}
                            <span className="text-blue-400" data-oid="o1yo77f">
                                admin
                            </span>
                        </p>
                        <p className="text-gray-400" data-oid="jifysbm">
                            Password:{' '}
                            <span className="text-blue-400" data-oid="wge.a9h">
                                admin123
                            </span>
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6" data-oid="2_nu44w">
                    <div className="space-y-2" data-oid="9l1fh88">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="51118r1"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white"
                            placeholder="Enter your username"
                            data-oid="k1p9pxq"
                        />
                    </div>

                    <div className="space-y-2" data-oid="534rl9m">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="4vz3cdf"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white"
                            placeholder="Enter your password"
                            data-oid="1rn14nx"
                        />
                    </div>

                    <div className="flex items-center justify-end" data-oid="noqvo7q">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            data-oid=":hn6f87"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="dhc9gu4"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center" data-oid="al6cz78">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    data-oid="jon_75x"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        data-oid="rybmybi"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        data-oid="tk8xltb"
                                    ></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>
            </div>

            {/* Bottom gradient accent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                data-oid="--ji01d"
            ></div>
        </div>
    );
}
