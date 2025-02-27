import Link from 'next/link';
import {
    FaYoutube,
    FaTwitch,
    FaEnvelope,
    FaGithub,
    FaGitlab,
    FaChartLine
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark-900 py-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent"></div>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-700 rounded-full filter blur-[120px] opacity-5"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-700 rounded-full filter blur-[120px] opacity-5"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="flex items-center mb-6 transition-transform duration-300 hover:scale-105">
                            <h1 className="cuzeth text-3xl md:text-4xl">C</h1>
                        </Link>
                        <p className="text-[rgba(255,255,255,0.7)] max-w-xs text-sm">
                            Developer and tech enthusiast passionate about creating useful software solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-3">Navigate</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mywork" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        My Work
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/daboiz" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        Da Boiz
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        About Me
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-3">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="mailto:cuz@cuzeth.com" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        Email Me
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Cuzeth" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://gitlab.com/Cuzeth" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        GitLab
                                    </a>
                                </li>
                                <li>
                                    <a href="https://status.cuzeth.com/" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] text-sm hover:text-white transition-colors">
                                        Status Page
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-[rgba(255,255,255,0.1)]">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-[rgba(255,255,255,0.5)] text-sm mb-6 md:mb-0">
                            &copy; {new Date().getFullYear()} CUZETH. All rights reserved.
                        </div>

                        <div className="flex space-x-5">
                            <SocialIcon href="https://www.youtube.com/channel/UCYVD0wcSlHFlCs41kHTap2Q/" icon={<FaYoutube />} label="YouTube" />
                            <SocialIcon href="https://twitch.tv/TheRealCuzeth" icon={<FaTwitch />} label="Twitch" />
                            <SocialIcon href="mailto:cuz@cuzeth.com" icon={<FaEnvelope />} label="Email" />
                            <SocialIcon href="https://github.com/Cuzeth" icon={<FaGithub />} label="GitHub" />
                            <SocialIcon href="https://gitlab.com/Cuzeth" icon={<FaGitlab />} label="GitLab" />
                            <SocialIcon href="https://status.cuzeth.com/" icon={<FaChartLine />} label="Status" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

interface SocialIconProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgba(255,255,255,0.7)] hover:text-white transition-all duration-300 hover:scale-110"
            aria-label={label}
        >
            {icon}
        </a>
    );
}