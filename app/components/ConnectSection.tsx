'use client'

import React, { useEffect, useRef } from "react";

const ConnectSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const firstDivRef = useRef<HTMLDivElement | null>(null);
    const secondDivRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !firstDivRef.current || !secondDivRef.current) return;

            const scrollPosition = window.scrollY;
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            
            const scrollPercentage = (scrollPosition - sectionTop + viewportHeight) / sectionHeight;
            
            const firstDivTranslate = Math.min(Math.max(scrollPercentage * 2 - 0.5, 0), 1) * -100;
            firstDivRef.current.style.transform = `translateY(${firstDivTranslate}vh) translateZ(0)`;

            const secondDivTranslate = Math.min(Math.max(scrollPercentage * 2 - 1, 0), 1) * -200;
            secondDivRef.current.style.transform = `translateY(${secondDivTranslate}vh) translateZ(0)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section ref={sectionRef} className="relative h-[400vh]">
            <div className="z-10 sticky top-0 left-0 flex h-screen">
                <div className="flex flex-col mt-[40vh]">
                    <div className="relative lg:mx-48 min-h-[50vh] lg:px-0 px-4">
                        <img src="/images/nlf.png" className="max-w-full w-[64px] h-[64px] lg:absolute -left-4 top-[-2rem] rounded-[50%] lg:mb-0 mb-4" alt="nhile-foundation-icon" />
                        <p className="text-[14px] inline-block lg:absolute top-1.5 right-0 lg:-right-16 bg-black text-white rounded-full px-3 py-1 mb-4 lg:mb-0">Education</p>
                        <img src="/images/nhile-foundation-line.png" className="w-auto lg:h-auto max-w-full lg:px-16 lg:mb-8 mb-4 h-8" />
                        <p className="text-[14px] lg:pl-[4rem] mb-4 font-medium">Free School for Vietnamese children.</p>
                        <a target="_blank" href="https://www.nlf.sg/">
                            <button className="flex uppercase items-center justify-center text-white text-xs tracking-[0.025em] py-2 px-5 border-[transparent] border-[1px] border-solid focus:outline-none lg:ml-[4rem] rounded-full bg-primary">
                                Connect
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div ref={firstDivRef} className="relative lg:mx-48 mt-[50vh] min-h-[50vh] z-10 bg-white lg:px-0 px-4">
                        <img src="/images/nlf.png" className="max-w-full w-[64px] h-[64px] lg:absolute -left-4 top-[-2rem] rounded-[50%] lg:mb-0 mb-4" alt="nhile-team-icon" />
                        <p className="text-[14px] inline-block lg:absolute top-1.5 -right-16 bg-black text-white rounded-full px-3 py-1 mb-4 lg:mb-0">Community</p>
                        <img src="/images/nhileteam.png" className="w-auto lg:h-auto max-w-full lg:px-16 lg:mb-8 mb-4 h-8" />
                        <p className="text-[14px] lg:pl-[4rem] mb-4 font-medium">Free vocational training community for Vietnamese youth</p>
                        <a target="_blank" href="https://www.facebook.com/NhiLeTeam">
                            <button className="flex uppercase items-center justify-center text-white text-xs tracking-[0.025em] py-2 px-5 border-[transparent] border-[1px] border-solid focus:outline-none lg:ml-[4rem] rounded-full bg-primary">
                                Connect
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div ref={secondDivRef} className="relative lg:mx-48 mt-[50vh] min-h-[50vh] z-10 bg-white lg:px-0 px-4">
                        <img src="/images/nlf.png" className="max-w-full w-[64px] h-[64px] lg:absolute -left-4 top-[-2rem] rounded-[50%] lg:mb-0 mb-4" alt="ikigai-zone-icon" />
                        <p className="text-[14px] inline-block lg:absolute top-1.5 -right-16 bg-black text-white rounded-full px-3 py-1 mb-4 lg:mb-0">Education</p>
                        <img src="/images/neducation.png" className="w-auto lg:h-32 max-w-full lg:px-16 lg:mb-8 mb-4 h-8" />
                        <p className="text-[14px] lg:pl-[4rem] mb-4 font-medium">Learning programs for personal development</p>
                        <a target="_blank" href="https://t.me/+JcZbaX5M-C4yMWY1">
                            <button className="flex uppercase items-center justify-center text-white text-xs tracking-[0.025em] py-2 px-5 border-[transparent] border-[1px] border-solid focus:outline-none lg:ml-[4rem] rounded-full bg-primary">
                                Connect
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
