import react, { useState } from "react";
const Slider = () => {
    return (
        <div>
            <section>
                <div className="w-full relative pb-10 px-6 xl:px-0">
                    
                    <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family" />
                    <div className="pt-10 lg:flex items-center relative z-10 container mx-auto">
                        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                            <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" alt="people smiling" />
                        </div>
                        <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                            <p tabIndex="0" className="text-[#452a72] uppercase text-2xl mb-4">Welcome <span className="" style={{textDecoration:"underline"}}>Harsh</span></p>
                            <h1 tabIndex="0" className="text-[#452a72] text-4xl lg:text-6xl font-black mb-8">Who We are</h1>
                            <p tabIndex="0" className="text-gray-800 font-regular mb-8">COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
                          
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Slider;
