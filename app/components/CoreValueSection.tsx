'use client'
import React, { useEffect, useRef, useState } from 'react';

function CoreValueSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const buttonsContainerRef = useRef<HTMLDivElement | null>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !buttonsContainerRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const scrollPercentage = -sectionRect.top / (sectionRect.height - window.innerHeight);

            // Transform the buttons container
            const translateX = 70 - scrollPercentage * 120; // from 70% to -50%
            buttonsContainerRef.current.style.transform = `translateX(${translateX}%) translateZ(0px)`;

            // Activate single button based on scroll
            const newActiveIndex = Math.floor(scrollPercentage * 5);
            setActiveButtonIndex(Math.min(newActiveIndex, 4));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const buttonStyle = (index: number) => ({
        background: index === activeButtonIndex ? 'rgb(214, 14, 14)' : 'transparent',
        borderColor: index === activeButtonIndex ? 'rgb(214, 14, 14)' : 'white',
    });

    return (
        <section ref={sectionRef} className="w-screen relative h-[500vh]">
            <div className="h-screen w-screen sticky top-0 left-0 bg-core-value bg-center bg-cover flex flex-col justify-center">
                <h2 className="text-white text-5xl lg:text-7xl 2xl:text-8xl font-extrabold text-center mb-32 z-10">CORE VALUE</h2>
                <div ref={buttonsContainerRef} className="flex items-center justify-center transform mb-16 z-10" style={{ transform: 'translateX(70%) translateZ(0px)' }}>
                    {['Straightforward', 'Confidence', 'Sincerity', 'Strength', 'Professionalism'].map((text, index) => (
                        <button
                            key={text}
                            ref={el => {
                                buttonRefs.current[index] = el;
                              }}
                            type="button"
                            className="text-white w-80 py-2 px-4 lg:py-4 2xl:py-6 rounded-full mr-4 lg:mr-8 border-[1px] border-solid transition-all duration-300"
                            style={buttonStyle(index)}
                        >
                            <span className="text-md lg:text-xl 2xl:text-2xl font-medium uppercase">{text}</span>
                        </button>
                    ))}
                </div>
                <div className="relative mx-auto lg:w-[40rem] w-5/6">
                    {[
                        "Nhi always speaks her mind, not afraid to say things that others may hesitate to say.",
                        "Nhi's demeanor and way of speaking exude confidence and determination, helping her shine.",
                        "Nhi is always sincere and genuine, respecting others and never being deceitful for personal gain.",
                        "Nhi derives strength from perseverance, leadership abilities, and guiding large teams. She bravely faces challenges and shares her vulnerabilities.",
                        "Nhi's knowledge and professional approach to problem-solving are highly systematic, logical, and based on scientific principles."
                    ].map((text, index) => (
                        <p key={index} className={`text-sm lg:text-2xl 2xl:text-3xl text-white w-full text-center z-10 absolute top-0 left-0 transition-opacity duration-300 ${index === activeButtonIndex ? 'opacity-100' : 'opacity-0'}`}>
                            {text}
                        </p>
                    ))}
                </div>
                <div className="absolute top-0 left-0 bg-black opacity-[60%] z-0 w-screen h-full"></div>
            </div>
        </section>
    );
}

export default CoreValueSection;