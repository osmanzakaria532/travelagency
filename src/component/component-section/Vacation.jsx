import React, { useState } from "react";

import { FaLocationArrow } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import Container from "../component-layout/Container";
import Image from "../component-layout/Image";

import vacationShape from "../../../src/assets/image/vacationShape.png";

const Vacation = () => {
    const [div, setDiv] = useState([
        {
            image: "../../../src/assets/image/vacation_img_1.jpg",
            title: "Rome, Italty",
            price: "5,42",
            trip: "10 Days Trip",
            starMark: "4.8",
        },
        {
            image: "../../../src/assets/image/vacation_img_2.jpg",
            title: "London,UK",
            price: "5,42",
            trip: "07 Days Trip",
            starMark: "4.8",
        },
        {
            image: "../../../src/assets/image/vacation_img_3.jpg",
            title: "Osaka,Japan",
            price: "5,42",
            trip: "06 Days Trip",
            starMark: "4.8",
        },
    ]);

    return (
        <>
            <div className="bg-[#FEFCFB] py-[120px]">
                <Container>
                    <div className="sm:w-[521px] mx-auto mb-16 text-center relative">
                        <h2 className="text-Primary-B text-5xl font-Volkhov font-bold leading-[54px] mb-6">
                            Best{" "}
                            <span className="text-Primary-A">
                                vacation plan
                            </span>
                        </h2>
                        <p className="sm:w-[521px] mx-auto text-Paragraph text-lg font-Poppins leading-8">
                            Plan your perfect vacation with our travel agency.
                            Choose among hundreds of all-inclusive offers!
                        </p>
                        <img
                            src={vacationShape}
                            className="absolute top-0 sm:-right-[75px] sm:translate-x-full"
                        />
                    </div>
                    <div className="flex justify-between">
                        {div.length != 0 &&
                            div.map((value, index) => (
                                <div className="w-[369px] border rounded-2xl hover:shadow-[0px_16px_80px_0px_rgba(254,147,64,0.20)] transition-all duration-300">
                                    <div className="h-[327px] rounded-2xl overflow-hidden ">
                                        <Image src={value.image} />
                                    </div>
                                    <div className="py-6 px-[26px]">
                                        <div className="flex justify-between mb-4">
                                            <h4 className="text-Primary-B text-2xl font-Poppins font-medium leading-8">
                                                {value.title}
                                            </h4>
                                            <p className="text-Primary-A text-2xl font-Poppins font-semibold leading-8">
                                                ${value.price}k
                                            </p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="flex items-center gap-x-[14.5px] text-Paragraph text-base font-Poppins font-medium leading-6">
                                                <FaLocationArrow className="text-Primary-A" />
                                                {value.trip}
                                            </p>
                                            <p className="flex items-center gap-x-2 text-Paragraph text-base font-Poppins font-medium leading-6">
                                                <FaStar className="text-[yellow]" />
                                                {value.starMark}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Vacation;
