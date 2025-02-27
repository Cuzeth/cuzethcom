"use client"

import Image from 'next/image';
import HeroSection from '@/components/HeroSection/HeroSection';
import AnimatedDropdown from '@/components/AnimatedDropdown/AnimatedDropdown';
import { daBoizObj, daBoizPrivacyPolicy, daBoizTOS } from '../data';
import { FaRobot, FaDiscord, FaCode, FaShieldAlt, FaMusic, FaGamepad } from 'react-icons/fa';

export default function DaBoiz() {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Moderation',
            description: 'Keep your server safe with powerful moderation tools'
        },
        {
            icon: <FaMusic />,
            title: 'Music',
            description: 'Play music from various sources directly in your voice channels'
        },
        {
            icon: <FaGamepad />,
            title: 'Fun Commands',
            description: 'Entertain your community with fun games and commands'
        },
        {
            icon: <FaCode />,
            title: 'Open Source',
            description: 'Built with TypeScript and fully open source'
        }
    ];

    return (
        <>
            <HeroSection {...daBoizObj} />

            <section className="py-16 bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Features</h2>
                        <div className="w-24 h-1 bg-primary-700 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Da Boiz is packed with features to enhance your Discord server experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="glass-card p-6 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-700/20 text-primary-500 mb-6">
                                    <span className="text-2xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Da Boiz for your server</h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Enhance your Discord server with Da Boiz - a completely free, feature-rich bot created with TypeScript. Invite Da Boiz to your server today and discover all it has to offer!
                            </p>
                            <a
                                href="https://discordapp.com/api/oauth2/authorize?client_id=636595833801801748&permissions=8&scope=bot%20applications.commands"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <FaDiscord />
                                Add to Discord
                            </a>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary-700/20 to-primary-500/20 rounded-xl blur-lg"></div>
                                <div className="glass-card p-6 relative flex items-center justify-center">
                                    <div className="text-center">
                                        <FaRobot className="text-8xl mx-auto mb-6 text-primary-500" />
                                        <h3 className="text-2xl font-bold mb-2">Da Boiz Bot</h3>
                                        <p className="text-gray-400 mb-4">Free multipurpose Discord bot</p>
                                        <div className="py-2 px-4 bg-dark-900 rounded-lg inline-block">
                                            <span className="text-sm text-green-400">Online and ready to serve</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-dark-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Terms and Privacy</h2>

                    <div className="max-w-3xl mx-auto">
                        <AnimatedDropdown title="Read Terms of Use" markdownText={daBoizTOS} />
                        <AnimatedDropdown title="Read Privacy Policy" markdownText={daBoizPrivacyPolicy} />
                    </div>
                </div>
            </section>
        </>
    );
}