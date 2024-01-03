import React, { useState } from "react";
import Container from "../component-layout/Container";
import Image from "../component-layout/Image";
import Li from "../component-layout/Li";
import Button from "../component-layout/Button";

import { FaBarsProgress } from "react-icons/fa6";

import logo from "../../../src/component/image/logo.png";

const Navbar = () => {
    const [show, setShow] = useState(true);

    let handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            <div className=" py-4 sm:py-8 bg-[#FA7436]/80 sm:bg-transparent relative">
                <Container className="flex justify-between items-center px-3 sm:px-0 ">
                    <div>
                        <Image src={logo} />
                    </div>
                    <div>
                        <div
                            className={`absolute sm:static bottom-[1px] translate-y-full md:translate-y-0 left-0 opacity-0 invisible bg-slate-400 md:bg-transparent w-full ${
                                show
                                    ? "!opacity-100 !visible transition-all duration-700"
                                    : "transition-all duration-700"
                            }`}>
                            <div className="flex flex-col sm:flex-row items-center gap-x-[98px] gap-y-[49px] py-4 md:py-0">
                                <ul className="flex flex-wrap gap-x-8 justify-center gap-y-3">
                                    <Li
                                        innerLiContent="home"
                                        className="text-[#222] text-xl md:text-base"
                                    />
                                    <Li
                                        innerLiContent="About"
                                        className="text-[#222] text-xl md:text-base"
                                    />
                                    <Li
                                        innerLiContent="Destination"
                                        className="text-[#222] text-xl md:text-base"
                                    />
                                    <Li
                                        innerLiContent="Tour"
                                        className="text-[#222] text-xl md:text-base"
                                    />
                                    <Li
                                        innerLiContent="Blog"
                                        className="text-[#222] text-xl md:text-base"
                                    />
                                </ul>
                                <div className="">
                                    <Button
                                        innerBtnContent="login"
                                        BtnClassName="mr-[3px] border-transparent capitalize text-[#fff] sm:text-[#FA7436]"
                                    />
                                    <Button
                                        innerBtnContent="sign up"
                                        BtnClassName="bg-[#FA7436] border-transparent capitalize text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block sm:hidden">
                        <FaBarsProgress
                            onClick={handleClick}
                            className="cursor-pointer text-xl"
                        />
                    </div>
                    {/* <div className="flex flex-row justify-between items-center">
                        <div className="hidden sm:block">
                            <ul className="flex flex-wrap gap-x-8 justify-center">
                                <Li innerLiContent="home" />
                                <Li innerLiContent="About" />
                                <Li innerLiContent="Destination" />
                                <Li innerLiContent="Tour" />
                                <Li innerLiContent="Blog" />
                            </ul>
                        </div>
                        <div className="hidden sm:block">
                            <Button
                                innerBtnContent="login"
                                BtnClassName="mr-[3px] border-transparent capitalize text-[#FA7436]"
                            />
                            <Button
                                innerBtnContent="sign up"
                                BtnClassName="bg-[#FA7436] border-transparent capitalize text-white"
                            />
                        </div>

                        <div
                            className={`sm:hidden absolute top-4 translate-y-1/2 left-0 ${
                                show ? "hidden sm:block" : "block"
                            }`}>
                            <div>
                                <ul className="flex flex-wrap gap-x-8 justify-center">
                                    <Li innerLiContent="home" />
                                    <Li innerLiContent="About" />
                                    <Li innerLiContent="Destination" />
                                    <Li innerLiContent="Tour" />
                                    <Li innerLiContent="Blog" />
                                </ul>
                            </div>
                            <div>
                                <Button
                                    innerBtnContent="login"
                                    BtnClassName="mr-[3px] border-transparent capitalize text-[#FA7436]"
                                />
                                <Button
                                    innerBtnContent="sign up"
                                    BtnClassName="bg-[#FA7436] border-transparent capitalize text-white"
                                />
                            </div>
                        </div>
                    </div> */}
                </Container>
            </div>
        </>
    );
};

export default Navbar;
