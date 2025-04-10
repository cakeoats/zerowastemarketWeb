import React from 'react';
import { TextInput, Button } from 'flowbite-react';
import { HiMail, HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk mengirim reset password
        console.log('Reset password requested');
    };

    return (
        <div className="min-h-screen w-full bg-amber-50 flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full border border-amber-200">
                {/* Header */}
                <div className="flex flex-col items-center mb-8">
                    <Link to="/login" className="self-start mb-4 flex items-center text-gray-600 hover:text-blue-800">
                        <HiArrowLeft className="mr-1" />
                        Back to Login
                    </Link>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
                        <p className="text-gray-600">Enter your email to receive reset instructions</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        icon={HiMail}
                        iconPosition="left"
                        className="focus:ring-2 focus:ring-amber-500"
                        required
                    />

                    {/* Submit Button */}
                    <Button
                        color="blue"
                        type="submit"
                        className="w-full py-1.5 font-bold "
                    >
                        Send Reset Link
                    </Button>

                    {/* Additional Help */}
                    <div className="text-center text-sm text-gray-600">
                        Need help?{' '}
                        <Link to="/contact" className="text-blue-600 hover:underline font-medium">
                            Contact Support
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;