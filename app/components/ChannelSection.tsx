'use client'

import React, { useEffect, useRef } from "react";

function ChannelSection() {
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
            
            const firstDivTranslate = Math.min(Math.max(scrollPercentage * 2 - 0.5, 0), 1) * -95;
            firstDivRef.current.style.transform = `translateY(${firstDivTranslate}vh) translateZ(0)`;

            const secondDivTranslate = Math.min(Math.max(scrollPercentage * 2 - 1, 0), 1) * -195;
            secondDivRef.current.style.transform = `translateY(${secondDivTranslate}vh) translateZ(0)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section ref={sectionRef} className="flex relative justify-center w-screen h-[500vh] pt-32">
            <div className="mx-4 lg:mx-16 h-screen xl:w-screen sticky top-[20vh]">
                <div className="min-h-[60vh] h-[60vh] w-full px-6 lg:px-12 bg-black rounded-3xl lg:rounded-[3rem] 2xl:rounded-[4rem] grid-rows-2 lg:grid-rows-none grid lg:grid-cols-2 cursor-pointer relative group">
                    <div className="flex flex-col justify-between z-10 py-8 lg:py-12 lg:mr-32 2xl:mr-64">
                        <span className="block uppercase font-extrabold mb-6 lg:mb-0 text-3xl lg:text-6xl 2xl:text-8xl text-white">Nhi Le</span>
                        <p className="transform block text-white translate-y-[-20%] text-lg lg:text-2xl 2xl:text-3xl">Welcome to Nhi Le &#x27;s channel! Providing FREE lessons for young Vietnamese eager to explore &#x27;Who Am I?&#x27;and &#x27;How to Be Myself?&#x27;Fulfilling Nhi &#x27;s dream of empowering self-discovery.</p>
                    </div>
                    <div className="w-full relative transform transition-all group duration-700 bg-nhile-channel rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] bg-cover rotate-6 group-hover:-rotate-6">
                        <div className="transform absolute bottom-6 left-6 lg:bottom-12 lg:left-12">
                            <p className="text-white uppercase text-lg lg:text-2xl 2xl:text-4xl font-extrabold mb-2 lg:mb-5 lg:w-2/3">The difference between wise and intelligent people</p>
                            <div className="flex">
                                <div className="block mr-5">
                                    <span className="block text-white text-xl 2xl:text-2xl font-extrabold leading-2">1,7M</span>
                                    <span className="block text-white text-sm 2xl:text-lg uppercase">views</span>
                                </div>
                                <div className="block">
                                    <a target="_blank" href="https://www.tiktok.com/@nhile_anne92/video/7063379511517187355">
                                        <button type="button" className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] 2xl:px-8 2xl:py-5 flex flex-row items-center justify-center text-white border-[#000000] focus:outline-none bg-red-600 rounded-[50px] transform transition border-none hover:bg-white hover:text-black first-child:hover:text-black">
                                            <span className="uppercase mr-2 text-sm xl:text-lg hover:text-black">watch</span>
                                            <i className="w-[24px] block h-[auto]">
                                                <i className="block w-[24px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z"></path>
                                                    </svg>
                                                </i>
                                            </i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black w-full h-full rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] opacity-50 -z-10"></div>
                    </div>
                    <div className="w-full h-full absolute top-0 left-0 bg-gray-200 rounded-[4rem] rotate-6 -z-10 group-hover:-rotate-6 duration-700"></div>
                </div>
                <div ref={firstDivRef} className="min-h-[60vh] h-[60vh] w-full px-6 lg:px-12 bg-black rounded-3xl lg:rounded-[3rem] 2xl:rounded-[4rem] grid-rows-2 lg:grid-rows-none grid lg:grid-cols-2 cursor-pointer relative group mt-[40vh] z-10" >
                    <div className="flex flex-col justify-between z-10 py-8 lg:py-12 lg:mr-32 2xl:mr-64">
                        <span className="block uppercase font-extrabold mb-6 lg:mb-0 text-3xl lg:text-6xl 2xl:text-8xl text-white">Ms Nhi</span>
                        <p className="transform block text-white translate-y-[-20%] text-lg lg:text-2xl 2xl:text-3xl">Join our series where guests meet Nhi. You &#x27;ve learned from me, now learn with successful individuals. Discover secrets, messages, experiences, and lessons. Let &#x27;s meet our guests. Are you ready?</p>
                    </div>
                    <div className="w-full relative transform transition-all group duration-700 bg-msnhi-channel bg-right rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] bg-cover rotate-6 group-hover:-rotate-6">
                        <div className="transform absolute bottom-6 left-6 lg:bottom-12 lg:left-12">
                            <p className="text-white uppercase text-lg lg:text-2xl 2xl:text-4xl font-extrabold mb-2 lg:mb-5 lg:w-2/3">Never too late to start entering tech companies</p>
                            <div className="flex">
                                <div className="block mr-5">
                                    <span className="block text-white text-xl 2xl:text-2xl font-extrabold leading-2">3,800</span>
                                    <span className="block text-white text-sm 2xl:text-lg uppercase">views</span>
                                </div>
                                <div className="block">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Gwv6a-9XMyI">
                                        <button type="button" className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] 2xl:px-8 2xl:py-5 flex flex-row items-center justify-center text-white border-[#000000] focus:outline-none bg-red-600 rounded-[50px] transform transition border-none hover:bg-white hover:text-black first-child:hover:text-black">
                                            <span className="uppercase mr-2 text-sm xl:text-lg hover:text-black">watch</span>
                                            <i className="w-[24px] block h-[auto]">
                                                <i className="block w-[24px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z"></path>
                                                    </svg>
                                                </i>
                                            </i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black w-full h-full rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] opacity-50 -z-10"></div>
                    </div>
                </div>
                <div ref={secondDivRef} className="min-h-[60vh] h-[60vh] w-full px-6 lg:px-12 bg-black rounded-3xl lg:rounded-[3rem] 2xl:rounded-[4rem] grid-rows-2 lg:grid-rows-none grid lg:grid-cols-2 cursor-pointer relative group z-20 mt-[40vh]" >
                    <div className="flex flex-col justify-between z-10 py-8 lg:py-12 lg:mr-32 2xl:mr-64">
                        <span className="block uppercase font-extrabold mb-6 lg:mb-0 text-3xl lg:text-6xl 2xl:text-8xl text-white">Spice &amp;Nice</span>
                        <p className="transform block text-white translate-y-[-20%] text-lg lg:text-2xl 2xl:text-3xl">Welcome to Spice &amp;Nice, where two classy individuals dive into global current affairs with unique perspectives. Get ready for real talk, sass, fun, and insightful discussions!</p>
                    </div>
                    <div className="w-full relative transform transition-all group duration-700 bg-spicenice-channel bg-right rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] bg-cover rotate-6 group-hover:-rotate-6">
                        <div className="transform absolute bottom-6 left-6 lg:bottom-12 lg:left-12">
                            <p className="text-white uppercase text-lg lg:text-2xl 2xl:text-4xl font-extrabold mb-2 lg:mb-5 lg:w-2/3">3 Steps to Nurturing Healthy Relationships</p>
                            <div className="flex">
                                <div className="block">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Dxj7qFrNF-E">
                                        <button type="button" className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] 2xl:px-8 2xl:py-5 flex flex-row items-center justify-center text-white border-[#000000] focus:outline-none bg-red-600 rounded-[50px] transform transition border-none hover:bg-white hover:text-black first-child:hover:text-black">
                                            <span className="uppercase mr-2 text-sm xl:text-lg hover:text-black">watch</span>
                                            <i className="w-[24px] block h-[auto]">
                                                <i className="block w-[24px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z"></path>
                                                    </svg>
                                                </i>
                                            </i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 bg-black w-full h-full rounded-3xl 2xl:rounded-[4rem] lg:rounded-[3rem] opacity-50 -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChannelSection