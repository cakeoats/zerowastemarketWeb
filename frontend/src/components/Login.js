import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiUser, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="min-h-screen w-full bg-amber-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full border border-amber-200">
                {/* Logo/Header */}
                <div className="flex justify-center mb-8">
                    <span className="text-3xl font-bold text-gray-500">
                        Welcome Back
                    </span>
                </div>

                {/* Form */}
                <div className="space-y-6">
                    {/* Username Input */}
                    <TextInput
                        id="username"
                        type="text"
                        placeholder="Username"
                        icon={HiUser}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                        required
                    />

                    {/* Password Input */}
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        icon={HiLockClosed}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                        required
                    />

                    {/* Forgot Password Link */}
                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600 hover:text-amber-800 transition-colors font-medium"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <Button
                        color="gray"
                        className="w-full py-1.5 mt-6 font-semibold"
                        type="submit"
                    >
                        Login
                    </Button>

                    {/* Register Prompt */}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;