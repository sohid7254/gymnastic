import React from "react";
import group8 from "../assets/group8.png";

const Groups = () => {
    return (
        <div className="relative -top-20 left-0 h-auto overflow-hidden flex  justify-between">
            <img src={group8} alt="Group 8" className="w-15 h-15 block lg:ml-45 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-full" />
            <img src={group8} alt="Group 8" className="w-15 h-15 block lg:mr-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-full" />
        </div>
    );
};

export default Groups;
