"use client"

import Link from 'next/link';
import Image from 'next/image';
import { HeroData } from '@/app/data';

export default function HeroSection(data: HeroData) {
    const renderHeadline = (headline: string | any[]) => {
        if (typeof headline === 'string') {
            return headline;
        }
        return headline.map((segment, index) =>
            segment.emphasize ? <em key={index}>{segment.text}</em> : <span key={index}>{segment.text}</span>
        );
    };

    return (
        <section className={`py-32 md:py-40 ${data.lightBg ? 'bg-dark-800' : 'bg-dark-900'}`}>
            <div className="container mx-auto px-6 relative">
                <div className={`flex flex-col ${data.imgStart ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}>
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <div className="max-w-xl">
                            {data.topLine && (
                                <div className="text-primary-700 font-semibold tracking-wider text-sm md:text-base uppercase mb-4 animate-pulse">
                                    {data.topLine}
                                </div>
                            )}

                            {data.headline && (
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-light-DEFAULT leading-tight">
                                    {renderHeadline(data.headline)}
                                </h1>
                            )}

                            {data.description && (
                                <p className="text-lg md:text-xl text-[rgba(255,255,255,0.9)] mb-8 leading-relaxed">
                                    {data.description}
                                </p>
                            )}

                            {data.buttonLabel && (
                                data.sendTo ? (
                                    <a href={data.sendTo} className="btn-primary inline-block" target="_blank" rel="noopener noreferrer">
                                        {data.buttonLabel}
                                    </a>
                                ) : (
                                    <Link href={data.linkTo || '#'} className="btn-primary inline-block">
                                        {data.buttonLabel}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        <div className="flex justify-center relative">
                            {data.videoURL ? (
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <iframe
                                        title="video"
                                        width="100%"
                                        height="100%"
                                        src={data.videoURL}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>
                            ) : (
                                data.img && (
                                    <div className="relative transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                                        <div className="absolute inset-0 bg-primary-700 rounded-2xl opacity-20 blur-xl -z-10 animate-pulse"></div>
                                        <Image
                                            src={data.img}
                                            alt={data.alt || "Hero image"}
                                            width={600}
                                            height={400}
                                            className="rounded-2xl shadow-xl"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/4 left-0 w-64 h-64 bg-primary-700 rounded-full filter blur-[120px] opacity-10"></div>
                <div className="absolute -z-10 bottom-0 right-10 w-96 h-96 bg-primary-700 rounded-full filter blur-[120px] opacity-10"></div>
            </div>
        </section>
    );
}