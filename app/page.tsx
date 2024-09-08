import ChannelSection from "./components/ChannelSection";
import ConnectSection from "./components/ConnectSection";
import CoreValueSection from "./components/CoreValueSection";
import OurServices from "./components/OurServices";

export default function Home() {
    return (
        <main className="w-screen m-0 p-0 overflow-clip">
            <section className="flex flex-col w-screen h-screen text-opacity-[100%] text-[#0c0b0b] pt-0 pb-0 transform relative bg-black items-stretch">
                <div className="w-screen flex items-center justify-between absolute p-6 lg:p-20 z-20">
                    <a className="cursor-pointer hover:opacity-50 transition-all duration-300" href="/">
                        <img src="/icons/logo-white.png" className="max-w-full w-12 h-12 lg:w-16 lg:h-16" />
                    </a>
                    <img src="/icons/menu.png" className="max-w-full w-12 lg:w-16 cursor-pointer hover:opacity-50 transition-all duration-300" />
                </div>
                <div className="w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center cursor-pointer top-0 left-0 z-10 absolute">
                    <a href="#about-text">
                        <img src="/icons/play-video.png" className="max-w-full z-50 w-28 h-28 lg:w-36 lg:h-36 2xl:w-40 2xl:h-40 hover:scale-110 duration-300 hover:opacity-90" alt="play-icon" />
                    </a>
                </div>
                <div className="w-screen flex items-center justify-between bottom-6 px-6 lg:bottom-16 lg:px-16 z-20 visible absolute flex-shrink">
                    <a target="_blank" href="https://www.youtube.com/@NHILE_SG">
                        <img src="/images/nhile-beyourself.png" className="max-w-full w-auto h-12 lg:h-28 2xl:h-32" alt="nhile-be-yourself" />
                    </a>
                    <a target="_blank" href="https://nlf.sg">
                        <img src="/images/nhile-foundation.png" className="max-w-full w-auto h-12 lg:h-28 2xl:h-32" alt="nhile-foundation" />
                    </a>
                </div>
                <div className="h-screen w-screen transform fixed top-0 left-0 object-cover overflow-hidden">
                    <iframe src="https://player.vimeo.com/video/1002218180?loop=1&amp;background=1&amp;quality=auto&amp;app_id=58479" className="h-screen w-screen transform absolute top-0 left-0 scale:150 2xl:scale-125" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" frameBorder="0"></iframe>
                </div>
                <nav className="z-50 absolute top-0 left-0">
                    <div className="opacity-0 translate-x-full translate-z-0">
                        <div className="bg-menu bg-cover h-screen w-screen absolute top-0 left-0 z-50 flex flex-col">
                            <button className="w-10 h-10 bg-transparent mt-6 mr-6 xl:mr-24 xl:mt-24 cursor-pointer ml-auto hover:opacity-50">
                                <img src="/icons/close.png" alt="menu-close" className="w-10 h-10" />
                            </button>
                            <div className="ml-16 flex flex-col mt-16 lg:ml-64 2xl:mt-32">
                                <a className="text-6xl lg:text-7xl font-bold mb-12 hover:text-red-600 cursor-pointer inline-flex" href="/services">Services</a>
                                <a className="text-6xl lg:text-7xl font-bold mb-12 hover:text-red-600 cursor-pointer inline-flex" href="/team">Team</a>
                                <a className="text-6xl lg:text-7xl font-bold mb-12 hover:text-red-600 cursor-pointer inline-flex" href="/about">About</a>
                                <a className="text-6xl lg:text-7xl font-bold mb-12 hover:text-red-600 cursor-pointer inline-flex" href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <section className="flex lg:flex-row flex-col-reverse py-8 mx-auto justify-between w-auto 2xl:h-screen overflow-hidden">
                <div className="transform lg:w-1/2 lg:pl-8 pl-6" data-aos="fade-right" data-aos-duration="700" data-aos-delay="0"
                    data-aos-easing="ease-in-out">
                    <h1 className="font-extrabold transform uppercase my-4 text-4xl lg:text-6xl 2xl:text-8xl lg:my-20" id="about-text">
                        Nhi <span className="text-primary">Le</span>
                        create new generation
                    </h1>
                    <p className="text-xl lg:text-3xl 2xl:text-5xl uppercase font-extrabold">With the mission of creating a better vietnamese youth generation</p>
                </div>
                <div className="block lg:w-1/2" data-aos="fade-left"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="0"
                    >
                    <img src="/bg/about.JPG" className="h-auto w-full object-center object-contain" alt="about" />
                </div>
            </section>
            <ConnectSection />
            <CoreValueSection />
            <section className="h-screen w-screen lg:my-20 px-3 lg:px-20">
                <div className="relative w-full h-full">
                    <div className="rounded-full bg-[#DE0029] w-48 h-48 lg:w-96 lg:h-96 2xl:w-[32rem] 2xl:h-[32rem] flex flex-col justify-center items-center absolute top-[15%] lg:top-[20%] left-0">
                        <img src="/icons/followers.png" className="h-12 mb-2 lg:h-24 lg:w-24 lg:mb-8" alt="followers" />
                        <span className="text-opacity-[100%] text-white font-extrabold text-2xl pb-1 lg:text-5xl 2xl:text-6xl lg:pb-3">1,076,500</span>
                        <span className="font-semi text-white uppercase font-bold text-md lg:text-xl 2xl:text-2xl">
                            Subscribers<br />&amp;followers
                        </span>
                    </div>
                    <div className="bg-[#DF005D] rounded-full flex items-center justify-center flex-col w-32 h-32 lg:w-56 lg:h-56 absolute top-[50%] left-[30%] lg:top-16 lg:left-[35%]">
                        <img src="/icons/partners.png" className="max-w-full w-12 mb-2 lg:w-16 lg:mb-4" alt="partners" />
                        <span className="text-opacity-100 text-white text-xl lg:text-4xl font-extrabold">20+</span>
                        <span className="font-semi text-white uppercase text-sm lg:text-lg font-bold">Partners</span>
                    </div>
                    <div className="rounded-full flex items-center justify-center flex-col bg-[#25974F] w-40 h-40 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 absolute right-0 top-0 lg:right-[10%] lg:top-4 2xl:right-[20%]">
                        <img src="/icons/members.png" className="max-w-full h-auto w-16 lg:w-28 2xl:w-32 mb-2 lg:mb-4" alt="members" />
                        <span className="block text-opacity-100 text-white text-2xl lg:text-5xl 2xl:text-6xl font-extrabold">500+</span>
                        <span className="font-semi block text-white uppercase font-bold text-md lg:text-3xl">members</span>
                    </div>
                    <div className="rounded-full flex items-center justify-center flex-col bg-[#014076] w-36 h-36 lg:w-64 lg:h-64 2xl:w-72 2xl:h-72 absolute bottom-[5%] lg:bottom-8 left-4 lg:left-[35%]">
                        <img src="/icons/teams.png" className="max-w-full h-auto w-10 lg:w-20 mb-4" alt="teams" />
                        <span className="text-opacity-100 text-white text-xl lg:text-4xl 2xl:text-5xl font-extrabold">10+</span>
                        <span className="font-semi text-white uppercase text-sm lg:text-2xl font-bold">teams</span>
                    </div>
                    <div className="rounded-full flex items-center justify-center flex-col w-36 h-36 lg:w-72 lg:h-72 2xl:w-80 2xl:h-80 bg-[#DE0029] absolute bottom-[10%] lg:bottom-16 right-4 lg:right-0">
                        <img src="/icons/video.png" className="max-w-full h-auto w-10 mb-2 lg:w-20 lg:mb-4" alt="video" />
                        <span className="block text-opacity-100 text-white text-2xl lg:text-5xl font-extrabold">5,000+</span>
                        <span className="font-semi block text-white uppercase text-md lg:text-2xl font-bold">videos</span>
                    </div>
                </div>
            </section>

            <section className="flex flex-col bg-black justify-center items-center lg:h-screen">
                <div className="grid grid-cols-6 lg:gap-16 gap-x-4 lg:mb-8 lg:grid-rows-none grid-rows-3">
                    <div className="flex items-center justify-center col-span-6 lg:col-span-2">
                        <img src="/logo/msnhi.png" className="w-16 text-center 2xl:w-20" />
                    </div>
                    <div className="lg:col-span-2 col-span-6 flex items-center justify-center">
                        <span className="uppercase font-extrabold text-center text-red-600 text-6xl 2xl:text-[12rem]">our</span>
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/spiceandnice.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/nhilive.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                </div>
                <div className="grid grid-cols-8 lg:gap-8 lg:mb-8 gap-x-4 lg:grid-rows-none grid-rows-3">
                    <div className="flex items-center justify-center col-span-8 lg:col-span-2">
                        <img src="/logo/swconsultancy.png" className="w-32 text-center 2xl:w-40" />
                    </div>
                    <div className="lg:col-span-4 col-span-8 flex items-center justify-center">
                        <span className="uppercase font-extrabold text-center text-red-600 lg:text-8xl text-6xl 2xl:text-[12rem]">partners</span>
                    </div>
                    <div className="flex items-center justify-center col-span-8 lg:col-span-2">
                        <img src="/images/nedu.png" className="w-32 text-center 2xl:w-40" />
                    </div>
                </div>
                <div className="grid grid-cols-6 lg:gap-8 gap-x-4 lg:grid-rows-none grid-rows-3 lg:mb-0 mb-8">
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/hush.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/thisishome.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/familycloud.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/avastudio.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <img src="/logo/nhihouse.png" className="w-32 text-center 2xl:w-48" />
                    </div>
                    <div className="flex items-center justify-center col-span-3 lg:col-span-1">
                        <a href="https://booking.nhi.sg/" target="_blank">
                            <img src="/logo/shareandwork.png" className="w-32 text-center 2xl:w-48" />
                        </a>
                    </div>
                </div>
            </section>

            <ChannelSection />

            <section className="w-screen relative">
                <div className="min-h-0 min-w-full lg:flex justify-start relative">
                    <div className="w-full h-full flex justify-start flex-col p-4 lg:pl-20 pt-10 mr-20 lg:sticky top-0">
                        <p className="text-[#e82020] text-8xl lg:text-[9rem] 2xl:text-[16rem] font-extrabold leading-none">5000+</p>
                        <h1 className="uppercase text-4xl lg:text-5xl 2xl:text-8xl font-extrabold">testimonials</h1>
                    </div>
                    <div className="p-4 lg:px-10 transform blur-[0px] relative z-[100]">
                        <div className="mb-12">
                            <span className="text-xl lg:text-2xl text-opacity-100 text-[#404040]">
                                Getting to know Nhi has been a true inspiration. Despite facing numerous challenges in life, she remains an unwavering beacon of strength and kindness. Her willingness to learn and her dedication to helping others navigate both business complexities and emotional hurdles are truly remarkable. Thanks to her guidance, I &#x27;ve not only gained insights into the business mindset but also developed greater emotional resilience. I &#x27;m grateful to have crossed paths with such a remarkable woman, and she &#x27;s truly someone I can call a friend.
                                <br />
                            </span>
                            <div className="transform mix-blend-overlay relative h-1/5 bg-white">
                                <div className="flex flex-row justify-start items-center gap-[20px] pt-2 pb-8 lg:py-10">
                                    <img src="/avatar/germaine-tan.jpg" alt="customer review" className="max-w-auto w-24 h-24 rounded-full transform" />
                                    <span className="text-xl lg:text-2xl text-opacity-100 text-[#444444]">
                                        <b>Germaine Tan</b>
                                        <br />Wealth &amp;Estate Planner
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <span className="text-xl lg:text-2xl text-opacity-100 text-[#404040]">
                                Having run a YouTube channel with Anne for the last 2 years, I’ve come to know her as a dedicated individual who lives by her word. She has a strength in her that uplifts and inspires others around her to do more and be better. Becoming part of her circle has inspired me to be a more resilient and courageous woman, and that is truly something I’m thankful for.

                                <br />
                            </span>
                            <div className="transform mix-blend-overlay relative h-1/5 bg-white">
                                <div className="flex flex-row justify-start items-center gap-[20px] pt-2 pb-8 lg:py-10">
                                    <img src="/avatar/denise.jpg" alt="customer review" className="max-w-auto w-24 h-24 rounded-full transform" />
                                    <span className="text-xl lg:text-2xl text-opacity-100 text-[#444444]">
                                        <b>Denise Wong</b>
                                        <br />Public Speaker
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <span className="text-xl lg:text-2xl text-opacity-100 text-[#404040]">
                                Anne cares deeply about helping the Vietnamese people. She &#x27;s not in it for herself, but to make life better for others. What &#x27;s amazing about her is how humble she is and how eager she is to keep learning. Her attitude inspires both me and my wife, Suzanne.

                                <br />
                                Being a part of Ms. Nhi &#x27;s podcast was truly a blessing. Anne (Nhi Le) has a remarkable ability to make her guests feel at ease, encouraging them to share personal and significant stories with the audience. The conversation flowed effortlessly, making it not just great, but exceptional.

                                <br />
                                A special shoutout goes to the Ms. Nhi Podcast tech team. Their seamless setup and arrangement ensured everything ran smoothly, allowing the guests to focus on the conversation without any distractions.

                                <br />
                            </span>
                            <div className="transform mix-blend-overlay relative h-1/5 bg-white">
                                <div className="flex flex-row justify-start items-center gap-[20px] pt-2 pb-8 lg:py-10">
                                    <img src="/avatar/yj.jpeg" alt="customer review" className="max-w-auto w-24 h-24 rounded-full transform" />
                                    <span className="text-xl lg:text-2xl text-opacity-100 text-[#444444]">
                                        <b>Yang Jiang</b>
                                        <br />Director of ACS
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-0 right-0 w-full h-[20vh]">
                            <div className="w-full bg-white h-1/6 opacity-40"></div>
                            <div className="w-full opacity-50 bg-white h-1/6"></div>
                            <div className="w-full opacity-60 bg-white h-1/6"></div>
                            <div className="w-full opacity-70 bg-white h-1/6"></div>
                            <div className="w-full opacity-80 bg-white h-1/6"></div>
                            <div className="w-full opacity-90 bg-white h-1/6"></div>
                        </div>
                    </div>
                </div>
            </section>

            <OurServices />
            {/* <section className="bg-black h-[500vh] w-screen flex relative">
                <div className="sticky top-0 w-screen h-screen flex items-center">
                    <div className="grid lg:grid-cols-5">
                        <div className="col-span-2 bg-black z-20 lg:pl-20 lg:pr-0 px-8 lg:mb-0 mb-4">
                            <h1 className="font-extrabold text-4xl lg:text-6xl 2xl:text-8xl text-white mb-4 lg:mb-8">OUR SERVICES</h1>
                            <p className="text-lg lg:text-2xl text-[#a3a3a3] mb-8 lg:w-4/6">We specialize in delivering top-notch services in marketing, video editing, web development, graphic design, and social media. Elevate your brand with our expertise and quality products tailored to your needs.</p>
                            <a href="/services">
                                <button type="button" className="flex text-white bg-[#df0029] uppercase lg:text-lg text-md px-8 py-3 lg:py-4 lg:px-12 2xl:text-xl 2xl:px-20 2xl:py-6 rounded-full text-nowrap mb-4 bottom-0 left-[50%] hover:opacity-90 hover:scale-105 cursor-pointer duration-300">See more</button>
                            </a>
                        </div>
                        <div className="flex gap-6 items-center col-span-3" >
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
            </section> */}

            <section className="container flex flex-col pb-[80px] pt-[80px] mx-auto">
                <div className="flex flex-col gap-[12px]">
                    <div className="flex flex-col items-center">
                        <h2 className="uppercase font-extrabold w-3/4 text-4xl lg:text-7xl 2xl:text-9xl leading-none lg:w-1/2 xl:w-2/3 text-center mb-8 xl:mb-12">let &#x27;s connect with us</h2>
                        <a target="_blank" href="mailto:nhile@nhi.sg">
                            <button type="button" className="flex text-white bg-[#df0029] uppercase py-2 px-12 text-lg lg:py-4 lg:px-16 xl:px-24 xl:py-6 xl:text-2xl rounded-full text-nowrap hover:opacity-90 hover:scale-x-105 duration-300 cursor-pointer">connect</button>
                        </a>
                    </div>
                </div>
            </section>

            <footer className="lg:mt-40">
                <div className="mx-8 lg:mx-48 my-12">
                    <div className="flex flex-row gap-[12px] items-end">
                        <div className="w-[100%] flex flex-col">
                            <div className="block">
                                <a href="/">
                                    <img src="/icons/logo-black.png" className="max-w-full w-12 h-12 mb-4 hover:opacity-75 duration-300" />
                                </a>
                                <div className="flex mt-[3%] gap-[6px]">
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://www.facebook.com/nhilesg.anne" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://www.instagram.com/nhi_sg/" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://www.youtube.com/c/NHILELifecoach" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://www.tiktok.com/@nhile_anne92" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 8.24537V15.5C16 19.0899 13.0899 22 9.5 22C5.91015 22 3 19.0899 3 15.5C3 11.9101 5.91015 9 9.5 9C10.0163 9 10.5185 9.06019 11 9.17393V12.3368C10.5454 12.1208 10.0368 12 9.5 12C7.567 12 6 13.567 6 15.5C6 17.433 7.567 19 9.5 19C11.433 19 13 17.433 13 15.5V2H16C16 4.76142 18.2386 7 21 7V10C19.1081 10 17.3696 9.34328 16 8.24537Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://www.linkedin.com/company/nhile" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                    <a className="block w-[24px] h-[auto] cursor-pointer hover:opacity-75 hover:scale-105 duration-300" href="https://open.spotify.com/show/075oMTANwNWPZpQgvwh674" target="_blank">
                                        <i className="block w-[24px] h-[auto]">
                                            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.001 2C17.551 2 22.001 6.5 22.001 12C22.001 17.5 17.501 22 12.001 22C6.50098 22 2.00098 17.5 2.00098 12C2.00098 6.5 6.50098 2 12.001 2ZM12.001 4C7.60555 4 4.00098 7.60457 4.00098 12C4.00098 16.3954 7.60555 20 12.001 20C16.3964 20 20.001 16.3954 20.001 12C20.001 7.58572 16.4276 4 12.001 4ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] flex justify-end items-center">
                            <ul className="flex flex-col list-disc pl-[16px] lg:flex-row lg:gap-[50px] justify-end">
                                <a href="/services">
                                    <li className="flex flex-row">
                                        <span className="block uppercase font-bold text-lg">services</span>
                                    </li>
                                </a>
                                <a href="/team">
                                    <li className="flex flex-row">
                                        <span className="block uppercase font-bold text-lg">team</span>
                                    </li>
                                </a>
                                <a href="/about">
                                    <li className="flex flex-row">
                                        <span className="block uppercase font-bold text-lg">about</span>
                                    </li>
                                </a>
                                <a href="/contact">
                                    <li className="flex flex-row">
                                        <span className="block uppercase font-bold text-lg">contact</span>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t-[2px] py-4 lg:py-8 text-center">
                    <span className="text-md lg:text-xl text-[#737373] px-12 lg:px-48">2024© Nhile. All rights reserved.</span>
                </div>
            </footer>
        </main>
    );
}
