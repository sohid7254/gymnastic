import React from "react";
import group8 from "../assets/group8.png";

const Groups = () => {
    return (
        <div className="relative -top-20 left-0 h-auto overflow-hidden flex  justify-between">
            <img src={group8} alt="Group 8" className="w-20 block ml-45" />
            <img src={group8} alt="Group 8" className="w-20 block mr-20" />
        </div>
    );
};

export default Groups;
