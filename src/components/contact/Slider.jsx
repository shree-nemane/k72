import { useEffect, useState } from "react";

export default function Slider() {
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        let lastTouchY = 0;

        const handleWheel = (e) => {
            if (e.deltaY > 0 && rotation !== -30) {
                setRotation(-5); // scroll down → tilt -30deg
            } else if (e.deltaY < 0 && rotation !== 30) {
                setRotation(5); // scroll up → tilt +30deg
            }
        };

        const handleTouchStart = (e) => {
            lastTouchY = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            const currentY = e.touches[0].clientY;
            if (currentY > lastTouchY && rotation !== -30) {
                setRotation(-5); // swipe down
            } else if (currentY < lastTouchY && rotation !== 30) {
                setRotation(5); // swipe up
            }
            lastTouchY = currentY;
        };

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [rotation]);

    return (
        <div className="w-screen my-[6vw] flex overflow-hidden text-black bg-[#D3FD50] gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)`}}
        >
            
                    <div className='moveX flex items-center gap-4 lg:gap-6'>
                        <h2 className='whitespace-nowrap font-[font2] text-4xl lg:text-[10vw] text-center lg:leading-[0.8] pt-1 lg:pt-4 uppercase'>HELLO@K72.CA</h2>
                        <svg className="w-10 h-10" xm0ns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                        <h2 className='whitespace-nowrap font-[font2] text-4xl lg:text-[10vw] text-center lg:leading-[0.8] pt-1 lg:pt-4 uppercase'>HELLO@K72.CA</h2>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                    </div>
                    <div className='moveX flex items-center gap-4 lg:gap-6'>
                        <h2  className='whitespace-nowrap font-[font2] text-4xl lg:text-[10vw] text-center lg:leading-[0.8] pt-1 lg:pt-4 uppercase'>HELLO@K72.CA</h2>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                        <h2 className='whitespace-nowrap font-[font2] text-4xl lg:text-[10vw] text-center lg:leading-[0.8] pt-1 lg:pt-4 uppercase'>HELLO@K72.CA</h2>
                        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-ule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                    </div>
             
        </div>
    );
}
