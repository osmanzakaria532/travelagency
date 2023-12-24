import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, BtnClassName, innerBtnContent }) => {
    return (
        <>
            <Link to="#" className={` ${className}`}>
                <button
                    className={`text-base font-Poppins font-semibold py-[13px] px-[50px] rounded-[5px] border border-[#FA7436] ${BtnClassName}`}>
                    {innerBtnContent}
                </button>
            </Link>
        </>
    );
};

export default Button;
