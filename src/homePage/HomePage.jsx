import React from "react";
import Navbar from "../component/section/Navbar";
import Banner from "../component/section/Banner";
import ToDo from "../component/section/ToDo";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ToDo />
        </>
    );
};

export default HomePage;
