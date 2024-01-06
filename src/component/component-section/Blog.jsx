import React, { useState } from "react";
import Container from "../component-layout/Container";
import Image from "../component-layout/Image";

const Blog = () => {
    const [div, setDiv] = useState([
        {
            image: "../../../src/assets/image/blog_img_1.jpg",
            title: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021",
        },
        {
            image: "../../../src/assets/image/blog_img_2.jpg",
            title: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021",
        },
        {
            image: "../../../src/assets/image/blog_img_3.jpg",
            title: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021",
        },
        {
            image: "../../../src/assets/image/blog_img_4.jpg",
            title: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021",
        },
    ]);
    return (
        <>
            <div className="bg-[#FEFCFB] py-[120px] px-[180px]">
                <Container>
                    <h2 className="text-Primary-B text-5xl text-center font-Volkhov font-bold leading-[54px] mb-6">
                        Get update with{" "}
                        <span className="text-Primary-A">latest blog</span>
                    </h2>
                    <div className="flex justify-between">
                        {div.length != 0 &&
                            div.map((value, index) => (
                                <div className="w-[270px]">
                                    <div className="rounded-lg overflow-hidden w-[270px] h-[270px]">
                                        <Image src={value.image} />
                                    </div>
                                    <div>
                                        <h3 className="text-Primary-B text-lg font-Poppins font-medium leading-[26px] mt-6 mb-4">
                                            {value.title}
                                        </h3>
                                        <p>{value.date}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Blog;
