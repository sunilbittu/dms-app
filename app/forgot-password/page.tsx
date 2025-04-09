'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setMessage('Password reset instructions have been sent to your email.');
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
            data-oid="cqpapn1"
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/40" data-oid="v:_l43j"></div>

            <div className="w-full max-w-md relative z-10 mr-16" data-oid="f84jduj">
                {/* Logo */}
                <div className="flex flex-col items-center mb-12" data-oid="f4l06w5">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                        data-oid="l9ne-_4"
                    />

                    <div className="text-sm text-orange-500 font-medium" data-oid="d7bco8:">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-medium text-center mb-6" data-oid="63nszbf">
                    Reset Password
                </h1>

                {message ? (
                    <div
                        className="p-4 mb-6 bg-green-500/20 border border-green-500 rounded-lg text-center"
                        data-oid="r2.zf:b"
                    >
                        {message}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="_gd26-8">
                        <div className="space-y-2" data-oid="1u6knej">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300"
                                data-oid="tkc.xur"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white"
                                placeholder="Enter your email"
                                data-oid="fq2i6xq"
                            />
                        </div>

                        <div
                            className="flex items-center justify-between space-x-4"
                            data-oid="43.k2y3"
                        >
                            <Link
                                href="/"
                                className="px-4 py-3 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                data-oid="ox5nqb9"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                                data-oid=":v8lpdz"
                            >
                                {isSubmitting ? 'Sending...' : 'Reset Password'}
                            </button>
                        </div>

                        <div className="text-center" data-oid="zvc7tyt">
                            <Link
                                href="/"
                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                data-oid="ilz30eb"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </form>
                )}
            </div>

            {/* Bottom gradient accent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                data-oid="ascnhfc"
            ></div>
        </div>
    );
}
