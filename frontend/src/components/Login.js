import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiUser, HiLockClosed } from 'react-icons/hi';

function LoginPage() {
    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Tambahkan logika untuk lupa password di sini
        console.log('Forgot password clicked');
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-white to-red-400 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <span className="text-2xl font-bold text-gray-800">ZeroWasteMarket</span>
                </div>
                <div className="space-y-5 bg-white">
                    {/* Username Input */}
                    <div className="relative">
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            icon={HiUser}
                            iconPosition="left"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="Password"
                            icon={HiLockClosed}
                            iconPosition="left"
                        />
                    </div>
                </div>

                {/* Forgot Password Link */}
                <div className="mt-5 flex justify-end">
                    {/* Memperbaiki href untuk menghindari masalah ESLint */}
                    <button
                        onClick={handleForgotPassword}
                        className="text-sm text-blue-500 hover:text-blue-700 bg-transparent border-none cursor-pointer p-0"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Login Button */}
                <Button className="mt-10 w-full text-md" color="gray">
                    Login
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;