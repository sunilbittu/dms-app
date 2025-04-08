'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!username.trim() || username.length < 3) {
            setFormError('Please enter a valid username (at least 3 characters)');
            return;
        }
        
        setIsSubmitting(true);
        setFormError('');
        
        // Simulate API call
        setTimeout(() => {
            setMessage('Password reset instructions have been sent to your email.');
            setUsername('');
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="w-full max-w-md relative z-10 mr-16">
                {/* Logo */}
                <div className="flex flex-col items-center mb-12">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                    />
                    <div className="text-sm text-orange-500 font-medium">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-medium text-center mb-6">
                    DMS - Forgot Password
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {message && (
                        <div className="bg-blue-900/50 text-blue-200 p-3 rounded-md text-sm">
                            {message}
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
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
                            className={`w-full px-4 py-3 bg-gray-800 border ${
                                formError ? 'border-red-500' : 'border-gray-700'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white`}
                            placeholder="Enter your username"
                        />
                        {formError && (
                            <p className="text-red-500 text-sm mt-1">{formError}</p>
                        )}
                        <p className="text-sm text-gray-400 mt-1">
                            Enter your username and we'll send you instructions to reset your password.
                        </p>
                    </div>

                    <div className="flex items-center justify-between space-x-4 pt-2">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Back to Sign In
                    </Link>
                </div>
            </div>

            {/* Bottom gradient accent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            ></div>
        </div>
    );
}'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [validationError, setValidationError] = useState('');

    const validateForm = () => {
        // Reset errors
        setValidationError('');
        
        // Validate username
        if (!username.trim()) {
            setValidationError('Username is required');
            return false;
        }
        
        // You can add more validation rules here
        // For example, minimum length, format requirements, etc.
        if (username.trim().length < 3) {
            setValidationError('Username must be at least 3 characters long');
            return false;
        }
        
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validate form before submission
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        setMessage('');
        
        try {
            // Here you would typically call your API to handle password reset
            console.log('Password reset requested for:', username);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setMessage('Password reset instructions have been sent to your email.');
            setUsername('');
        } catch (err) {
            setMessage('An error occurred. Please try again.');
            console.error('Error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative"
            style={{ backgroundImage: 'url("/images/bg.png")' }}
        >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="w-full max-w-md relative z-10 mr-16">
                {/* Logo */}
                <div className="flex flex-col items-center mb-12">
                    <img
                        src="/images/datadot-logo.png"
                        alt="Datadot Logo"
                        className="h-16 w-auto mb-2"
                    />
                    <div className="text-sm text-orange-500 font-medium">
                        Business Re-engineering
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-medium text-center mb-6">
                    DMS - Forgot Password
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {message && (
                        <div className="bg-blue-900/50 text-blue-200 p-3 rounded-md text-sm">
                            {message}
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
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
                            className={`w-full px-4 py-3 bg-gray-800 border ${
                                validationError ? 'border-red-500' : 'border-gray-700'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white`}
                            placeholder="Enter your username"
                            onBlur={() => validateForm()}
                        />
                        {validationError && (
                            <p className="text-red-500 text-sm mt-1">{validationError}</p>
                        )}
                        <p className="text-sm text-gray-400 mt-1">
                            Enter your username and we'll send you instructions to reset your password.
                        </p>
                    </div>

                    <div className="flex items-center justify-between space-x-4 pt-2">
                        <Link
                            href="/"
                            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Back to Sign In
                    </Link>
                </div>
            </div>

            {/* Bottom gradient accent */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            ></div>
        </div>
    );
}'use client'; import { useState } from 'react'; import Link from 'next/link'; export default function ForgotPassword() { const [username, setUsername] = useState(''); const [isSubmitting, setIsSubmitting] = useState(false); const [message, setMessage] = useState(''); const [validationError, setValidationError] = useState(''); const validateForm = () => { // Reset errors setValidationError(''); // Validate username if (!username.trim()) { setValidationError('Username is required'); return false; } // You can add more validation rules here // For example, minimum length, format requirements, etc. if (username.trim().length < 3) { setValidationError('Username must be at least 3 characters long'); return false; } return true; }; const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); // Validate form before submission if (!validateForm()) { return; } setIsSubmitting(true); setMessage(''); try { // Here you would typically call your API to handle password reset console.log('Password reset requested for:', username); // Simulate API call await new Promise((resolve) => setTimeout(resolve, 1000)); setMessage('Password reset instructions have been sent to your email.'); setUsername(''); } catch (error) { setMessage('An error occurred. Please try again.'); console.error('Error:', error); } finally { setIsSubmitting(false); } }; return ( <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative" style={{ backgroundImage: 'url("/images/bg.png")' }} > {/* Semi-transparent overlay */} <div className="absolute inset-0 bg-black/60"></div> <div className="w-full max-w-md relative z-10 mr-16"> {/* Logo */} <div className="flex flex-col items-center mb-12"> <img src="/images/datadot-logo.png" alt="Datadot Logo" className="h-16 w-auto mb-2" /> <div className="text-sm text-orange-500 font-medium"> Business Re-engineering </div> </div> {/* Heading */} <h1 className="text-3xl font-medium text-center mb-6">DMS - Forgot Password</h1> {/* Form */} <form onSubmit={handleSubmit} className="space-y-6"> {message && ( <div className="bg-blue-900/50 text-blue-200 p-3 rounded-md text-sm"> {message} </div> )} <div className="space-y-2"> <label htmlFor="username" className="block text-sm font-medium text-gray-300" > Username </label> <input id="username" name="username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className={`w-full px-4 py-3 bg-gray-800 border ${ validationError ? 'border-red-500' : 'border-gray-700' } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white`} placeholder="Enter your username" onBlur={() => validateForm()} /> {error && <p className="text-red-500 text-sm mt-1">{error}</p>} <p className="text-sm text-gray-400 mt-1"> Enter your username and we'll send you instructions to reset your password. </p> </div> <div className="flex items-center justify-between space-x-4 pt-2"> <Link href="/" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900" > Cancel </Link> <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed" > {isSubmitting ? 'Submitting...' : 'Submit'} </button> </div> </form> <div className="mt-6 text-center"> <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors" > Back to Sign In </Link> </div> </div> {/* Bottom gradient accent */} <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> </div> ); } ('use client'); import { useState } from 'react'; import Link from 'next/link'; export default function ForgotPassword() { const [username, setUsername] = useState(''); const [isSubmitting, setIsSubmitting] = useState(false); const [message, setMessage] = useState(''); const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setIsSubmitting(true); setMessage(''); try { // Here you would typically call your API to handle password reset console.log('Password reset requested for:', username); // Simulate API call await new Promise((resolve) => setTimeout(resolve, 1000)); setMessage('Password reset instructions have been sent to your email.'); setUsername(''); } catch (error) { setMessage('An error occurred. Please try again.'); console.error('Error:', error); } finally { setIsSubmitting(false); } }; return ( <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-end px-4 relative" style={{ backgroundImage: 'url("/images/bg.png")' }} data-oid="oi5wf9a" > {/* Semi-transparent overlay */} <div className="absolute inset-0 bg-black/60" data-oid="w4c8vp6"></div> <div className="w-full max-w-md relative z-10 mr-16" data-oid="4hhh9hr"> {/* Logo */} <div className="flex flex-col items-center mb-12" data-oid="cdmpb--"> <img src="/images/datadot-logo.png" alt="Datadot Logo" className="h-16 w-auto mb-2" data-oid="2g:zjzu" /> <div className="text-sm text-orange-500 font-medium" data-oid="skfd675"> Business Re-engineering </div> </div> {/* Heading */} <h1 className="text-3xl font-medium text-center mb-6" data-oid="6mihkmy"> Forgot Password </h1> {/* Form */} <form onSubmit={handleSubmit} className="space-y-6" data-oid="fbjf5bp"> {message && ( <div className="bg-blue-900/50 text-blue-200 p-3 rounded-md text-sm" data-oid="f.bf9n-" > {message} </div> )} <div className="space-y-2" data-oid="gsugekx"> <label htmlFor="username" className="block text-sm font-medium text-gray-300" data-oid="-7hh7up" > Username </label> <input id="username" name="username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white" placeholder="Enter your username" data-oid="96c49by" /> <p className="text-sm text-gray-400 mt-1" data-oid="m1oddwo"> Enter your username and we'll send you instructions to reset your password. </p> </div> <div className="flex items-center justify-between space-x-4 pt-2" data-oid="qabv-sd" > <Link href="/" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900" data-oid="u2dgx2." > Cancel </Link> <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70 disabled:cursor-not-allowed" data-oid="n9vk:qe" > {isSubmitting ? 'Submitting...' : 'Submit'} </button> </div> </form> <div className="mt-6 text-center" data-oid="lknqzce"> <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors" data-oid="xk84ip." > Back to Sign In </Link> </div> </div> {/* Bottom gradient accent */} <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" data-oid="u1vxc:s" ></div> </div> ); }