import React from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Home = () => {
    useGSAP(() => {
     
        gsap.from(".headText span", {
            y: 200, 
            opacity: 0, 
            duration: 2, 
            ease: "expo", 
            stagger: 0.08, 
            yoyo: false,
        });

        const video = document.querySelector("video");
        if (video) {
            video.addEventListener("play", () => {
                gsap.to(".headText span", {
                    y: 0, 
                    opacity: 1, 
                    duration: 1,
                    ease: "power3.in",
                    stagger: 0.08,
                });
            });
        }
    }, []);

    return (
        <div className='h-screen w-full px-[10%] pt-[5vh] bg-white overflow-hidden'>
          
            <div className='max-w-[1600px] mx-auto'>
           
                <div className='relative'>
                    <h1 className='text-[7.8vw] font-[350] leading-[1.4] headText'>
                        <span className='inline-block pr-[0.25em]'>We</span>
                        <span className='inline-block pr-[0.25em]'>are</span>
                        <span className='inline-block pr-[0.25em]'>a</span>
                        <span className='inline-block'>digital</span>
                    </h1>
                </div>

              
                <div className='flex items-baseline gap-[2vw] mt-[-1.5vw]'>
                    <video 
                        className='h-[8.5vw] rounded-[2vw] object-cover flex-shrink-0'
                        src="https://cuberto.com/assets/home/hero/header.mp4" 
                        autoPlay 
                        loop 
                        muted
                        playsInline 
                    />
                    <h1 className='text-[7.8vw] font-[350] leading-[1.4] headText'>
                        <span className='italic font-[300] inline-block pr-[0.25em]'>design</span>
                        <span className='inline-block'>and</span>
                    </h1>
                </div>

                <div className='mt-[-1vw]'>
                    <h1 className='text-[7.8vw] font-[350] leading-[0.9] headText'>
                        <span className='inline-block pr-[0.25em]'>motion</span>
                        <span className='inline-block'>agency</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;