'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Dummy login check
            if (username === 'admin' && password === 'admin123') {
                router.push('/companies');
            } else {
                alert('Invalid credentials. Please use the demo credentials provided.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
            data-oid="eyln7::"
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/40" data-oid="m0j-j4m"></div>

            <div className="w-full max-w-md relative z-10 mr-16" data-oid="w7jumof" key="olk-1SB6">
                {/* Logo */}
                <div className="flex flex-col items-center mb-12" data-oid="e2t_8o.">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                        data-oid="4ec4c.b"
                    />

                    <div className="text-sm text-orange-500 font-medium" data-oid="plowta-">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-medium text-center mb-2" data-oid="f5dndev">
                    Sign in
                </h1>
                <p className="text-gray-400 text-center mb-8" data-oid="k7ixpp.">
                    Enter your credentials to continue
                </p>

                {/* Dummy Credentials */}
                <div
                    className="mb-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
                    data-oid="bxjcqdj"
                >
                    <h3 className="text-sm font-medium text-gray-300 mb-2" data-oid="2forpf7">
                        Demo Credentials:
                    </h3>
                    <div className="space-y-1 text-sm" data-oid="xkr:pun">
                        <p className="text-gray-400" data-oid="57_ruun">
                            Username:{' '}
                            <span className="text-blue-400" data-oid="p83mqy0">
                                admin
                            </span>
                        </p>
                        <p className="text-gray-400" data-oid=":dwz5h9">
                            Password:{' '}
                            <span className="text-blue-400" data-oid="558ifz2">
                                admin123
                            </span>
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6" data-oid="o.yejn6">
                    <div className="space-y-2" data-oid=".24uy_q">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="pm.3z0."
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
                            data-oid="t80w35f"
                        />
                    </div>

                    <div className="space-y-2" data-oid="0gotgap">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="a5entsd"
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
                            data-oid="-iuma3z"
                        />
                    </div>

                    <div className="flex items-center justify-end" data-oid="1c_sobw">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            data-oid="wtmk_lr"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="h6syint"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center" data-oid="ijst3xm">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    data-oid="zwa-.xg"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        data-oid="t127cp4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        data-oid="vtxko3u"
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
                data-oid="7urh1_k"
            ></div>
        </div>
    );
}
