import React, { useState } from 'react';

function EmailVerification() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(null);
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValid(false);   // Reset isValid state
        setIsLoading(false); // Reset isLoading state
        setIsVerified(null); // Reset isVerified state
        setMessage('');      // Reset message state

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setIsValid(emailRegex.test(newEmail));
    };

    const handleVerify = () => {
        if (isValid) {
            setIsLoading(true);

            // Make a request to the ZeroBounce API for email verification
            fetch(`https://api.zerobounce.net/v2/validate?api_key=219bd519adfa4c1baafbc65fbef752e2&email=${encodeURIComponent(email)}`)
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    if (data.status === 'valid') {
                        setIsVerified(true);
                        setMessage('Email Verified Successfully!');
                    } else {
                        setIsVerified(false);
                        setMessage('Invalid Email');
                    }
                })
                .catch((error) => {
                    setIsLoading(false);
                    console.error('Error verifying email:', error);
                    setMessage('Error verifying email. Please try again later.');
                });
        } else {
            setMessage('Please enter a valid email address.');
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
            <div className={`flex items-center border  ${isVerified === null ? 'border-gray-300' : isVerified ? 'border-green-500' : 'border-red-600'} rounded-lg p-2`}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className='w-full p-3 rounded-lg outline-none bg-transparent'
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </button>
            </div>
            {message && <p className={`${isVerified ? 'text-green-600' : 'text-red-600'} text-center mt-2`}>{message}</p>}
        </div>
    );
}

export default EmailVerification;
