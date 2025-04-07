import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiUser, HiMail, HiPhone, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

function RegisterPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-white to-red-400 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
                {/* Judul */}
                <div className="flex justify-center mb-6">
                    <span className="text-2xl font-bold text-gray-800">ZeroWasteMarket</span>
                </div>

                {/* Form Register */}
                <div className="space-y-4">
                    {/* Full Name */}
                    <TextInput
                        id="fullname"
                        type="text"
                        placeholder="FULL NAME"
                        icon={HiUser}
                        iconPosition="left"
                        className=""
                    />

                    {/* Email */}
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="E-MAIL"
                        icon={HiMail}
                        iconPosition="left"
                        className=""
                    />

                    {/* Phone */}
                    <TextInput
                        id="phone"
                        type="tel"
                        placeholder="PHONE"
                        icon={HiPhone}
                        iconPosition="left"
                        className=""
                    />

                    {/* Password */}
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="PASSWORD"
                        icon={HiLockClosed}
                        iconPosition="left"
                        className=""
                    />

                    {/* Confirm Password */}
                    <TextInput
                        id="confirmPassword"
                        type="password"
                        placeholder="CONFIRM PASSWORD"
                        icon={HiLockClosed}
                        iconPosition="left"
                        className=""
                    />
                </div>

                {/* Register Button */}
                <Button color="red" className="mt-6 w-full bg-gray-800 hover:bg-gray-900">
                    REGISTER
                </Button>

                {/* Link Sign In */}
                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-600">
                        HAVE ACCOUNT?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            SIGN IN
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;