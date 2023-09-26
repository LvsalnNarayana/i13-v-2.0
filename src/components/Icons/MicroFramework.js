import React from "react";

const MicroFramework = (props) => {
    return (
        <>
            <svg
                strokeWidth="0"
                viewBox="0 0 24 24"
                className={`${props?.classes}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="m8 16 5.991-2L16 8l-6 2z"></path>
            </svg>
        </>
    );
};

export default MicroFramework;
