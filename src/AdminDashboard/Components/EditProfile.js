import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

function AdminEditProfile() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [stateProvince, setStateProvince] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => { });

    return (
        <>
            <div className="px-0 py-0 ">
                <div className="flex flex-no-wrap items-start">
                    <div className="w-full ">
                        <div className="py-4 px-2">
                            <div className="bg-white rounded shadow py-7">
                                <div className="mt-10 px-7">
                                    <p className="text-xl font-semibold leading-tight text-gray-800">
                                        Update Your Profile
                                    </p>
                                    <div className="grid w-full grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-7 mt-7 ">
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Name
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-3 text-gray-600">
                                                Update Your Name
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Email
                                            </p>
                                            <input
                                                type="email"
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update Your Email
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Phone No
                                            </p>
                                            <input
                                                type="tel"
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update Your Phone No
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Birth Date
                                            </p>
                                            <input
                                                type="date"
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={birthdate}
                                                onChange={(e) => setBirthdate(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update Your Birth Date
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Gender
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={gender}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Your Gender
                                            </p>
                                        </div>
                                       
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                City
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update Your City
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                State/Province
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={stateProvince}
                                                onChange={(e) => setStateProvince(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update your State/Province
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Country
                                            </p>
                                            <input
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Update Your Country
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-base font-medium leading-none text-gray-800">
                                                Your Photo
                                            </p>
                                            <input
                                                accept="image/*"
                                                type="file"
                                                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                                            />
                                            <p className="mt-3 text-xs leading-[15px] text-gray-600">
                                                Set Your Photo
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="h-[1px] bg-gray-100 my-14" />

                                <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                                    <button
                                        onClick={() => navigate("/admin/profile")}
                                        className="bg-white border-[#452a72] rounded hover:bg-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-[#452a72] hover:text-white border lg:max-w-[95px]  w-full ">
                                        Back
                                    </button>
                                    <button className="bg-[#452a72] rounded hover:bg-transparent border border-[#452a72] transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white hover:text-[#452a72] lg:max-w-[144px] w-full ">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminEditProfile;
