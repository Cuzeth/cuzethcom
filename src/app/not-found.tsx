"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import fourOhFour from '../../public/images/404.svg';

export default function NotFoundPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
                <div className="relative w-64 h-64 mx-auto mb-8">
                    <Image
                        src={fourOhFour}
                        alt="404 Error"
                        width={400}
                        height={400}
                        className="object-contain animate-float"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white animate-pulse">404</h1>
                <p className="text-xl md:text-2xl font-bold mb-2 text-gray-200">Page Not Found</p>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have disappeared into the digital abyss.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
                        <FaHome />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-transparent hover:bg-dark-700 text-white border border-gray-700 px-4 py-2 rounded-md transition-colors duration-300 inline-flex items-center justify-center gap-2"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-700 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-700 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
        </div>
    );
}