import React from "react";

const Container = ({ className, children }) => {
    return (
        <>
            <div className={`lg:w-[1170px] mx-auto ${className}`}>
                {children}
            </div>
        </>
    );
};

export default Container;
