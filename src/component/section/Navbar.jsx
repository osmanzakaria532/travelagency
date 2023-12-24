import React from "react";
import Container from "../component-layout/Container";
import Image from "../component-layout/Image";
import Li from "../component-layout/Li";
import Button from "../component-layout/Button";

import logo from "../../../src/component/image/logo.png";

const Navbar = () => {
    return (
        <>
            <div className="py-8">
                <Container className="flex justify-between items-center">
                    <div>
                        <Image src={logo} />
                    </div>
                    <div>
                        <ul className="flex gap-x-8">
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
                </Container>
            </div>
        </>
    );
};

export default Navbar;
