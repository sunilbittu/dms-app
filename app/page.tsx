'use client';

import { useState } from 'react';

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', username);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
            data-oid="eyln7::"
        >
            {/* Semi-transparent overlay */}

            <div className="w-full max-w-md relative z-10" data-oid="w7jumof" key="olk-1SB6">
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
                <h1 className="text-3xl font-medium text-center mb-6" data-oid="vwxp4li">
                    Sign in
                </h1>

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
                        <a
                            href="#"
                            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            data-oid="wtmk_lr"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        data-oid="h6syint"
                    >
                        Sign in
                    </button>
                </form>
            </div>
            <div className="absolute inset-0 bg-black/60" data-oid="m0j-j4m"></div>

            {/* Bottom gradient accent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                data-oid="7urh1_k"
            ></div>
        </div>
    );
}
