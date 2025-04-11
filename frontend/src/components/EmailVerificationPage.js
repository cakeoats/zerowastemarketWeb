import React from 'react';
import { Button } from 'flowbite-react';
import { HiMail, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function EmailVerificationPage() {
    return (
        <div className="min-h-screen w-full bg-amber-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg max-w-md w-full border border-amber-200 text-center">
                {/* Verification Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full">
                        <HiCheckCircle className="h-12 w-12 text-blue   -600" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Verify Your Email
                </h1>

                {/* Message */}
                <p className="text-gray-600 mb-6">
                    We've sent a verification link to <span className="font-medium">user@example.com</span>.
                    Please check your inbox and click the link to verify your account.
                </p>

                {/* Resend Button */}
                <Button
                    color="gray"
                    className="w-full mb-6 py-1 font-semibold"
                >
                    <HiMail className="mr-2 h-5 w-5" />
                    Resend Verification Email
                </Button>

                {/* Additional Help */}
                <div className="text-sm text-gray-500">
                    Didn't receive the email? Check your spam folder or{' '}
                    <Link
                        to="/contact"
                        className="text-blue-800 hover:underline font-medium"
                    >
                        contact support
                    </Link>
                </div>

                {/* Continue Button (if already verified) */}
                <div className="mt-8 pt-6 border-t border-amber-100">
                    <Link to="/login">
                        <Button
                            outline
                            color="gray"
                            className="w-full font-medium"
                        >
                            Continue to Login
                            <HiArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default EmailVerificationPage;