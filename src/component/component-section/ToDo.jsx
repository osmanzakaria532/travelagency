import React, { useState } from "react";
import Container from "../component-layout/Container";

import toDoHeadingShape from "../../../src/assets/image/toDoHeadingShape.png";

const ToDo = () => {
    const [div, setDiv] = useState([
        {
            image: "../../src/assets/image/toDoXIcon_1.png",
            title: "Sign Up",
            description:
                "Completes all the work associated with planning and processing",
            shape: "../../../src/assets/image/toDoItemShape_1.png",
        },
        {
            image: "../../../src/assets/image/toDoXIcon_2.png",
            title: "Worth of Money",
            description:
                "After successful access then book from exclusive deals & pricing",
            shape: "../../../src/assets/image/toDoItemShape_2.png",
        },
        {
            image: "../../../src/assets/image/toDoXIcon_3.png",
            title: "Exciting Travel",
            description:
                "Start and explore a wide range of exciting travel experience.",
            shape: "../../../src/assets/image/toDoItemShape_1.png",
        },
    ]);

    return (
        <>
            <div className="bg-[#F7F8FC] py-[120px]">
                <Container>
                    <div className="sm:w-[521px] mx-auto mb-16 text-center relative">
                        <h2 className="text-Primary-B text-5xl font-Volkhov font-bold leading-[54px] mb-6">
                            Things you need{" "}
                            <span className="text-Primary-A"> to do</span>
                        </h2>
                        <p className="sm:w-[430px] mx-auto text-Paragraph text-lg leading-8">
                            We ensure that you'll embark on a perfectly planned,
                            safe vacation at a price you can afford.
                        </p>
                        <img
                            src={toDoHeadingShape}
                            className="absolute top-0 sm:-right-[66px] sm:translate-x-full"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between">
                        {div.length != 0 &&
                            div.map((value, index) => (
                                <div className="w-[370px] py-10 px-10 bg-white rounded-[8px] relative z-10 shadow-[14px_24px_72px_0px_rgba(102,102,102,.1)]">
                                    <div>
                                        <div className="w-[48px] h-[51px]">
                                            <img
                                                src={value.image}
                                                className="w-auto inline-block"
                                            />
                                        </div>
                                        <h3 className="text-Primary-B text-2xl font-Poppins font-semibold leading-[34px] mt-12 mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="w-[290px] text-Paragraph text-base leading-[26px]">
                                            {value.description}
                                        </p>
                                    </div>
                                    <img
                                        src={value.shape}
                                        className="absolute left-0 top-0 -z-10 w-full h-full"
                                    />
                                </div>
                            ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ToDo;
