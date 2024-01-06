import React from "react";
import Container from "../component-layout/Container";
import Image from "../component-layout/Image";

import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Exclusive = () => {
    const [div, setDiv] = useState([
        {
            image: "../../../src/assets/image/ex_photo_1.jpg",
            title: "Madrid",
            starMark: "4.3",
            location: "Spain",
            oldPrice: "950",
            newPrice: "850",
        },
        {
            image: "../../../src/assets/image/ex_photo_2.jpg",
            title: "Firenze",
            starMark: "4.5",
            location: "Italy",
            oldPrice: "850",
            newPrice: "750",
        },
        {
            image: "../../../src/assets/image/ex_photo_3.jpg",
            title: "Paris",
            starMark: "4.4",
            location: "France",
            oldPrice: "699",
            newPrice: "599",
        },
        {
            image: "../../../src/assets/image/ex_photo_4.jpg",
            title: "London",
            starMark: "4.8",
            location: "UK",
            oldPrice: "850",
            newPrice: "800",
        },
    ]);

    return (
        <>
            <div className="pt-[120px] pb-[208px]">
                <div className="text-center">
                    <h2 className="text-Primary-B text-5xl font-Volkhov font-bold leading-[54px] mb-6">
                        Exclusive{" "}
                        <span className="text-Primary-A">
                            deals & discounts
                        </span>
                    </h2>
                    <p className="w-[380px] mx-auto text-Paragraph text-lg leading-8 mb-[66px]">
                        Discover our fantastic early booking discounts & start
                        planning your journey.
                    </p>
                </div>
                <Container className="flex justify-between">
                    {div.length != 0 &&
                        div.map((value, index) => (
                            <div className="w-[270px] border rounded-[8px] group hover:shadow-[0px_16px_80px_0px_rgba(254,147,64,0.20)] transition-all duration-300">
                                <div className="w-[270px] h-[290px] rounded-[8px] overflow-hidden relative ">
                                    <Image src={value.image} />
                                    <div className="bg-black/40 absolute z-50 top-0 left-0 w-full h-0 group-hover:h-full transition-all duration-700 flex  items-end justify-center ">
                                        <button className="bg-Primary-A py-[9px] px-[22px] rounded-[8px] text-white text-lg font-Poppins font-medium leading-8 opacity-0 group-hover:opacity-100 transition-all ease-in duration-1000 mb-12">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                                <div className="py-8 px-4">
                                    <div className="flex justify-between items-center mb-[18px] ">
                                        <p className="text-Primary-B text-2xl font-Poppins font-medium leading-[26px]">
                                            {value.title}
                                        </p>
                                        <p className="flex items-center gap-x-2 text-Paragraph text-base leading-6">
                                            <FaStar className="text-yellow-400" />
                                            {value.starMark}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="flex items-center gap-x-2 text-[#666666] text-base leading-[20px]">
                                            <FaLocationDot className="text-[#999999]" />
                                            {value.location}
                                        </p>
                                        <p className="flex items-end gap-x-4">
                                            <del className="text-[#999999] text-base font-Poppins font-medium leading-6 ">
                                                ${value.oldPrice}
                                            </del>
                                            <p className="text-Primary-A text-base font-Poppins font-semibold leading-6 bg-[#FFE7DB] rounded-[8px] py-[2px] px-[5px]">
                                                ${value.newPrice}
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {/* <div className="w-[270px] border rounded-[8px] ">
                        <div className="w-[270px] h-[290px] rounded-[8px] overflow-hidden relative group">
                            <Image src="../../../src/component/image/Image.jpg" />
                            <div className="bg-black/40 absolute z-50 top-0 left-0 w-full h-0 group-hover:h-full transition-all duration-700 flex  items-end justify-center ">
                                <button className="bg-Primary-A py-[9px] px-[22px] rounded-[8px] text-white text-lg font-Poppins font-medium leading-8 opacity-0 group-hover:opacity-100 transition-all ease-in duration-1000 mb-12">
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="py-8 px-4">
                            <div className="flex justify-between items-center mb-[18px] ">
                                <p className="text-Primary-B text-2xl font-Poppins font-medium leading-[26px]">
                                    Madrid
                                </p>
                                <p className="flex items-center gap-x-2 text-Paragraph text-base leading-6">
                                    <FaStar className="text-yellow-400" /> 4.3
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="flex items-center gap-x-2 text-[#666666] text-base leading-[20px]">
                                    <FaLocationDot className="text-[#999999]" />
                                    Spain
                                </p>
                                <p className="flex items-end gap-x-4">
                                    <del className="text-[#999999] text-base font-Poppins font-medium leading-6 ">
                                        $950
                                    </del>
                                    <p className="text-Primary-A text-base font-Poppins font-semibold leading-6 bg-[#FFE7DB] rounded-[8px] py-[2px] px-[5px]">
                                        $850
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div> */}
                </Container>
            </div>
        </>
    );
};

export default Exclusive;
