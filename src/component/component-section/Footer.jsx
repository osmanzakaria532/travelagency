import React from "react";
import Container from "../component-layout/Container";
import Image from "../component-layout/Image";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Li from "../component-layout/Li";

import f_logo from "../../../src/assets/image/logo.png";

const Footer = () => {
    return (
        <>
            <div className="bg-[#F7F8FC]">
                <Container>
                    <div>
                        <Image src="../../../src/assets/image/subscribe.jpg" />
                    </div>
                    <div className="mt-[120px] mb-[74px] flex justify-between">
                        <div className="w-[376px]">
                            <div>
                                <Image src={f_logo} className="!w-auto" />
                            </div>
                            <div className="mt-6 mb-4">
                                <p className="text-Paragraph text-base font-Poppins font-semibold leading-8 w-[300px]">
                                    Book your trip in minute, get full Control
                                    for much longer.
                                </p>
                            </div>
                            <div className="flex gap-x-[26px]">
                                <Link
                                    to=""
                                    className="w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-[0_2px_10px__rgba(0,0,0,0.1)] scale-100 hover:scale-110 transition-all hover:bg-[#FA7436]">
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    to=""
                                    className="w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-[0_2px_10px__rgba(0,0,0,0.1)] scale-100 hover:scale-110 transition-all hover:bg-[#FA7436]">
                                    <FaInstagram />
                                </Link>
                                <Link
                                    to=""
                                    className="w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-[0_2px_10px__rgba(0,0,0,0.1)] scale-100 hover:scale-110 transition-all hover:bg-[#FA7436]">
                                    <FaTwitter />
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-x-[140px]">
                            <div>
                                <h4 className="text-Primary-B text-lg font-Poppins font-semibold leading-[26px] mb-8">
                                    company
                                </h4>
                                <ul>
                                    Company
                                    <Li
                                        innerLiContent="About"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Careers"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Logistic"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Privacy & Policy"
                                        className="text-Paragraph text-lg leading-[26px]"
                                    />
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-Primary-B text-lg font-Poppins font-semibold leading-[26px] mb-8">
                                    Contact
                                </h4>
                                <ul>
                                    <Li
                                        innerLiContent="Help/FAQ"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Press"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Affilates"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-Primary-B text-lg font-Poppins font-semibold leading-[26px] mb-8">
                                    Contact
                                </h4>
                                <ul>
                                    <Li
                                        innerLiContent="Help/FAQ"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Press"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                    <Li
                                        innerLiContent="Affilates"
                                        className="text-Paragraph text-lg leading-[26px] mb-4"
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 pb-12 border-t flex justify-between items-center">
                        <p>Copyright, Trabook 2022. All rights reserved.</p>
                        <p>Terms & Conditions</p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
