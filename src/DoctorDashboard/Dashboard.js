import React from "react";

import img1 from "../Images/Doctors/doctor2.jpeg"
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";


const notifications = [
    { id: 1, text: "$2400, Plan1 sale", time: "22 DEC 7:20 PM" },
    { id: 2, text: "$2400, Plan2 sale", time: "25 DEC 7:20 PM" },
    { id: 3, text: "User signup request", time: "26 DEC 7:20 PM" },
    // Add more notification objects as needed
];

export default function Dashboard() {
    return (
        <>
            <div class="relative py-3">
                <div class="px-3 md:px-3 mx-auto w-full">
                    <div>
                        <div class="flex flex-wrap md:gap-y-4" >
                            <div class="w-full lg:w-6/12 xl:w-3/12 md:px-4">
                                <div class="py-2 relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-blueGray-400 uppercase  text-xs">Material</h5>
                                                <span class=" text-xl">3,508</span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><i class="fas fa-book"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full lg:w-6/12 xl:w-3/12 md:px-4">
                                <div class="py-2 relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-blueGray-400 uppercase  text-xs">Pending</h5>
                                                <span class=" text-xl">235</span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#452a72]"><i class="fa-solid fa-clock"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 xl:w-3/12 md:px-4">
                                <div class="py-2 relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-blueGray-400 uppercase  text-xs">Rejected</h5>
                                                <span class=" text-xl">92</span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"><i class="fa-solid fa-xmark"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full lg:w-6/12 xl:w-3/12 md:px-4">
                                <div class="py-2 relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-blueGray-400 uppercase  text-xs">Live</h5>
                                                <span class=" text-xl">234</span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#293770]"><i class="fa-solid fa-book"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4 px-1 md:px-5 my-3 grid grid-cols-1 gap-6 xl:grid-cols-3">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div className="flex flex-col items-center p-5">
                        <div className="h-40 w-40 rounded-full mb-3">
                            <img className="h-full w-full object-cover rounded-full shadow" src={img1} />
                        </div>
                        <p className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">Shane Doe</p>
                        <p className="mb-6 text-sm text-gray-700 dark:text-gray-400">guptah605@gmail.com</p>

                        <div className="flex justify-start flex-wrap pt-5 gap-4 socials px-3">

                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block"><a target="_blank" href="https://www.linkedin.com/in/buff-goofy-164bb027a">
                                    <FaLinkedinIn className="social-links text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8" />
                                </a></span>
                            </div>
                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block"><a target="_blank" href="mailto:contact@buffgoofy.com">
                                    <i className="social-links fa-solid fa-envelope text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8"></i>
                                </a></span>
                            </div>
                            <div className=" relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block"><a target="_blank" href="https://www.facebook.com/profile.php?id=100093479117440">
                                    <i className=" social-links fa-brands fa-facebook text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8"></i>
                                </a></span>
                            </div>
                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block">
                                    <a target="_blank" href="https://www.instagram.com/buff.goofy/">
                                        <i className="social-links fa-brands fa-instagram text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8"></i>
                                    </a></span>

                            </div>
                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block">
                                    <a target="_blank" href="http://discordapp.com/users/1118422230804725760">
                                        <i className="social-links fa-brands fa-discord text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8"></i>
                                    </a></span>

                            </div>
                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block">
                                    <a target="_blank" href="https://www.reddit.com/user/Buff_Goofy/">
                                        <i className="social-links fa-brands fa-reddit text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8"></i>
                                    </a></span>

                            </div>
                            <div className="relative overflow-hidden block footer-div cursor-pointer">
                                <span className="block"><a target="_blank" href="https://twitter.com/findoutsoon">
                                    <FiTwitter className="social-links text-white bg-[#7963a7] rounded-full leading-4 p-2 h-8 w-8" />
                                </a></span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 p-6">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
                            Notifications
                        </h6>
                        <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-[#452a72]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-3.5 w-3.5 text-green-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                ></path>
                            </svg>
                            <strong>24%</strong> this month
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start gap-4 py-3">
                                <div className="relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] after:h-4/6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="!w-5 !h-5 text-green-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="antialiased font-sans text-sm leading-normal text-blue-gray-900 block font-medium">
                                        {notification.text}
                                    </p>
                                    <span className="block antialiased font-sans text-xs font-medium text-blue-gray-500">
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    );
}
