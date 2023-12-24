import React from "react";
import Container from "../component-layout/Container";
import Button from "../component-layout/Button";
import Image from "../component-layout/Image";

import bannerImg from "../../../src/component/image/banner.png";

const Banner = () => {
    return (
        <>
            <div className="pt-[38px] pb-[280px] bg-[#FEFCFB]">
                <Container className="flex">
                    <div className="w-[521px]">
                        <h1 className="text-[#22222] text-[64px] font-Volkhov font-bold leading-[74px] mb-8">
                            Get started your exciting{" "}
                            <span className="text-[#FA7436]">journey</span> with
                            us.
                        </h1>
                        <p className="w-[497px] text-[#666] text-xl font-Poppins leading-10 mb-16">
                            A Team of experienced tourism professionals will
                            provide you with the best advice and tips for your
                            desire place.
                        </p>
                        <Button
                            innerBtnContent="Discover Now"
                            BtnClassName="px-[28px] text-[#FA7436]"
                        />
                    </div>
                    <div className="w-[649px]  relative z-10">
                        <div className="flex justify-end">
                            <Image src={bannerImg} />
                        </div>
                        <img
                            src="/src/component/image/b-element.png"
                            className="absolute -top-[35px] -right-[59px] -z-10"
                        />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Banner;
