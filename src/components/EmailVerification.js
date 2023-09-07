import React, { useState } from 'react';

function EmailVerification() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(false);
        setIsLoading(false);
        setIsVerified(false);

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setIsValid(emailRegex.test(newEmail));
    };

    const handleVerify = () => {
        if (isValid) {
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                setIsVerified(true);
            }, 2000);
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <div className="bg-transparent bg-opacity-90 rounded-lg p-8 shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-extrabold capitalize text-center text-gray-800 mb-6">
                Validate Your Email
            </h1>
            <p className="text-sm text-gray-600 text-center mb-8">
                Please enter your email address below to initiate the verification process.
            </p>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full p-3 rounded-lg outline-none ${isVerified ? 'border-green-500' : 'border-gray-300 bg-transparent'
                        }`}
                    placeholder="Enter your email"
                    required
                />
                <button
                    onClick={handleVerify}
                    className={`p-3 ml-3 ${isValid
                        ? 'cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full'
                        : 'cursor-not-allowed bg-slate-900 text-white opacity-50 rounded-full'
                        }`}
                    disabled={!isValid || isLoading}
                >
                    {isLoading ? (
                        <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </button>
            </div>
            {isVerified && (
                <p className="text-green-600 text-center mt-4">Email Verified Successfully!</p>
            )}
        </div>
    );
}

export default EmailVerification;
