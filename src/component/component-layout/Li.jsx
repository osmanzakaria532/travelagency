import React from "react";
import { Link } from "react-router-dom";

const Li = ({ className, innerLiContent }) => {
    return (
        <>
            <Link>
                <li className={`font-Poppins capitalize ${className}`}>
                    {innerLiContent}
                </li>
            </Link>
        </>
    );
};

export default Li;
