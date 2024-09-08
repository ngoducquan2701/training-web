'use client'
import React, { useEffect, useRef, useState } from 'react';

function OurServices() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const buttonsContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !buttonsContainerRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const scrollPercentage = -sectionRect.top / (sectionRect.height - window.innerHeight);

            // Transform the buttons container
            const translateX = 0 - scrollPercentage * 150;
            buttonsContainerRef.current.style.transform = `translateX(${translateX}%) translateZ(0px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="bg-black h-[500vh] w-screen flex relative">
            <div className="sticky top-0 w-screen h-screen flex items-center">
                <div className="grid lg:grid-cols-5">
                    <div className="col-span-2 bg-black z-20 lg:pl-20 lg:pr-0 px-8 lg:mb-0 mb-4">
                        <h1 className="font-extrabold text-4xl lg:text-6xl 2xl:text-8xl text-white mb-4 lg:mb-8">OUR SERVICES</h1>
                        <p className="text-lg lg:text-2xl text-[#a3a3a3] mb-8 lg:w-4/6">We specialize in delivering top-notch services in marketing, video editing, web development, graphic design, and social media. Elevate your brand with our expertise and quality products tailored to your needs.</p>
                        <a href="/services">
                            <button type="button" className="flex text-white bg-[#df0029] uppercase lg:text-lg text-md px-8 py-3 lg:py-4 lg:px-12 2xl:text-xl 2xl:px-20 2xl:py-6 rounded-full text-nowrap mb-4 bottom-0 left-[50%] hover:opacity-90 hover:scale-105 cursor-pointer duration-300">See more</button>
                        </a>
                    </div>
                    <div ref={buttonsContainerRef} className="flex gap-6 items-center col-span-3" >
                        <a href="/services">
                            <div className="min-w-[40vh] w-[40vh] h-[60vh] relative cursor-pointer hover:scale-105 hover:opacity-90 duration-300">
                                <img src="/images/digital-marketing.jpg" className="rounded-[25px] block display:block object-cover select-auto h-[auto] min-h-[100%] max-h-[100%] max-w-full w-auto min-w-[100%]" />
                                <span className="text-4xl font-extrabold absolute bottom-10 left-8 text-white">MARKETING</span>
                            </div>
                        </a>
                        <a href="/services">
                            <div className="min-w-[40vh] w-[40vh] h-[60vh] relative cursor-pointer hover:scale-105 hover:opacity-90 duration-300">
                                <img src="/images/video-editing.jpg" className="rounded-[25px] block display:block object-cover select-auto h-[auto] min-h-[100%] max-h-[100%] max-w-full w-auto min-w-[100%]" />
                                <span className="text-4xl font-extrabold absolute bottom-10 left-8 text-white uppercase">Video editing</span>
                            </div>
                        </a>
                        <a href="/services">
                            <div className="min-w-[40vh] w-[40vh] h-[60vh] relative cursor-pointer hover:scale-105 hover:opacity-90 duration-300">
                                <img src="/images/graphic-design.jpg" className="rounded-[25px] block display:block object-cover select-auto h-[auto] min-h-[100%] max-h-[100%] max-w-full w-auto min-w-[100%]" />
                                <span className="text-4xl font-extrabold absolute bottom-10 left-8 text-white uppercase">Graphic Design</span>
                            </div>
                        </a>
                        <a href="/services">
                            <div className="min-w-[40vh] w-[40vh] h-[60vh] relative cursor-pointer hover:scale-105 hover:opacity-90 duration-300">
                                <img src="/images/web-developing.jpg" className="rounded-[25px] block display:block object-cover select-auto h-[auto] min-h-[100%] max-h-[100%] max-w-full w-auto min-w-[100%]" />
                                <span className="text-4xl font-extrabold absolute bottom-10 left-8 text-white uppercase">Web Developing</span>
                            </div>
                        </a>
                        <a href="/services">
                            <div className="min-w-[40vh] w-[40vh] h-[60vh] relative cursor-pointer hover:scale-105 hover:opacity-90 duration-300">
                                <img src="/images/social-media.jpg" className="rounded-[25px] block display:block object-cover select-auto h-[auto] min-h-[100%] max-h-[100%] max-w-full w-auto min-w-[100%]" />
                                <span className="text-4xl font-extrabold absolute bottom-10 left-8 text-white uppercase">Social Media</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices