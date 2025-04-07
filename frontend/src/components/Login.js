import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiUser } from 'react-icons/hi';

function LoginPage() {
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
                            placeholder="username"
                            icon={HiUser}
                            iconPosition="left"
                            className="rounded-lg border border-black"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="username"
                            icon={HiUser}
                            iconPosition="left"
                            className="rounded-lg border-2 border-black focus:border-black"
                        />
                    </div>
                </div>


                {/* Forgot Password Link */}
                <div className="mt-5 flex justify-end">
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot password?</a>
                </div>

                {/* Login Button */}
                <Button className=" mt-10 w-full text-md" color="gray">
                    Login
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
