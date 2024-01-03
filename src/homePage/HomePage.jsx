import React from "react";
import Navbar from "../component/component-section/Navbar";
import Banner from "../component/component-section/Banner";
import ToDo from "../component/component-section/ToDo";
import Footer from "../component/component-section/Footer";
import Exclusive from "../component/component-section/Exclusive";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ToDo />
            <Exclusive />
            <Footer />
        </>
    );
};

export default HomePage;
