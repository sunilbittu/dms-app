'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './context/AuthContext';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(username, password);
            router.push('/companies');
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
            data-oid="f.47f2z"
        >
            <div className="absolute inset-0 bg-black/40" data-oid="cl3h57_"></div>

            <div className="w-full max-w-md relative z-10 mr-16" data-oid="cr_3q3t">
                <div className="flex flex-col items-center mb-12" data-oid="h-od5ek">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                        data-oid="pbnkgy4"
                    />

                    <div className="text-sm text-orange-500 font-medium" data-oid="acyr4fs">
                        Business Re-engineering
                    </div>
                </div>

                <h1 className="text-3xl font-medium text-center mb-2" data-oid="6c.bl8a">
                    Sign in
                </h1>
                <p className="text-gray-400 text-center mb-8" data-oid=":sm.v61">
                    Enter your credentials to continue
                </p>

                <div
                    className="mb-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg"
                    data-oid=".8g1ljm"
                >
                    <h3 className="text-sm font-medium text-gray-300 mb-2" data-oid="ex_xn:7">
                        Demo Credentials:
                    </h3>
                    <div className="space-y-1 text-sm" data-oid=":tv16ei">
                        <p className="text-gray-400" data-oid="fl0.4-o">
                            Username:{' '}
                            <span className="text-blue-400" data-oid="wyuct_.">
                                admin
                            </span>
                        </p>
                        <p className="text-gray-400" data-oid="o0aw-za">
                            Password:{' '}
                            <span className="text-blue-400" data-oid="ac.w13h">
                                admin123
                            </span>
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" data-oid="x1.i:x-">
                    <div className="space-y-2" data-oid="ek-c.e:">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="84hdwub"
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
                            data-oid="sv59s_t"
                        />
                    </div>

                    <div className="space-y-2" data-oid="-g4cv9q">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                            data-oid="eh:i8d6"
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
                            data-oid="o.9wu-n"
                        />
                    </div>

                    <div className="flex items-center justify-end" data-oid="x.nevl2">
                        <a
                            href="/forgot-password"
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            data-oid="uvijro3"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="_w4v5qy"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center" data-oid="e:q_73j">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    data-oid="nwcscye"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        data-oid="1gixy7p"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        data-oid="f3chi94"
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

            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                data-oid="zd1:hpn"
            ></div>
        </div>
    );
}
