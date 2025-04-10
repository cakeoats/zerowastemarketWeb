import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiUser, HiMail, HiPhone, HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className="min-h-screen w-full bg-amber-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full border border-amber-200">
                {/* Judul */}
                <div className="flex justify-center mb-8">
                    <span className="text-3xl font-bold">
                        <span className="text-gray-600">Register Here!</span>
                    </span>
                </div>

                {/* Form Register */}
                <div className="space-y-5">
                    {/* Full Name */}
                    <TextInput
                        id="fullname"
                        type="text"
                        placeholder="Full Name"
                        icon={HiUser}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Email */}
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Email"
                        icon={HiMail}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Phone */}
                    <TextInput
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        icon={HiPhone}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Password */}
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        icon={HiLockClosed}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Confirm Password */}
                    <TextInput
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        icon={HiLockClosed}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                    />
                </div>

                {/* Register Button */}
                <Button
                    color="gray"
                    className="w-full py-1.5 mt-6 font-bold"
                >
                    REGISTER
                </Button>

                {/* Link Sign In */}
                <div className="mt-4 text-center text-sm text-gray-600">
                    Have an account?{' '}
                    <Link
                        to="/login"
                        className="text-blue-600 hover:underline font-medium"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;