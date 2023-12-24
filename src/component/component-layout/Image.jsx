import React from "react";
import { Link } from "react-router-dom";

const Image = ({ src, className }) => {
    return (
        <>
            <Link>
                <picture>
                    <img src={src} className={`w-full ${className}`} />
                </picture>
            </Link>
        </>
    );
};

export default Image;
