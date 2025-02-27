"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../../public/images/8bit.gif';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setClick(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(10,18,27,0.9)] backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <div className="relative h-12 w-12 mr-2 transition-transform duration-300 hover:scale-110">
                        <Image
                            src={logo}
                            alt="Cuzeth"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h1 className="cuzeth text-3xl md:text-4xl">C</h1>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/" isActive={isActive('/')}>
                        Home
                    </NavLink>
                    <NavLink href="/mywork" isActive={isActive('/mywork')}>
                        My Work
                    </NavLink>
                    <NavLink href="/daboiz" isActive={isActive('/daboiz')}>
                        Da Boiz
                    </NavLink>
                    <NavLink href="/about" isActive={isActive('/about')}>
                        About Me
                    </NavLink>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={handleClick}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {click ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`
                absolute top-full left-0 w-full bg-[rgba(10,18,27,0.95)] backdrop-blur-md 
                transition-all duration-300 overflow-hidden md:hidden
                ${click ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    <MobileNavLink href="/" isActive={isActive('/')} onClick={closeMobileMenu}>
                        Home
                    </MobileNavLink>
                    <MobileNavLink href="/mywork" isActive={isActive('/mywork')} onClick={closeMobileMenu}>
                        My Work
                    </MobileNavLink>
                    <MobileNavLink href="/daboiz" isActive={isActive('/daboiz')} onClick={closeMobileMenu}>
                        Da Boiz
                    </MobileNavLink>
                    <MobileNavLink href="/about" isActive={isActive('/about')} onClick={closeMobileMenu}>
                        About Me
                    </MobileNavLink>
                </div>
            </div>
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={`relative text-lg font-medium transition-all duration-300 
                ${isActive
                    ? 'text-white'
                    : 'text-[rgba(255,255,255,0.8)] hover:text-white'
                }
            `}
        >
            {children}
            <span className={`
                absolute -bottom-1 left-0 w-full h-0.5 bg-primary-700
                transform transition-all duration-300
                ${isActive ? 'scale-x-100' : 'scale-x-0'}
                group-hover:scale-x-100
            `}></span>
        </Link>
    );
}

function MobileNavLink({ href, isActive, children, onClick }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block py-3 px-4 text-xl font-medium transition-all duration-200 
                ${isActive
                    ? 'text-white bg-[rgba(255,255,255,0.1)] rounded-md'
                    : 'text-[rgba(255,255,255,0.8)]'
                }
            `}
        >
            {children}
        </Link>
    );
}