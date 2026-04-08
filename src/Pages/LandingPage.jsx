import React from "react";
import Banner from "../Components/banner";
import Products from "../Components/Products";
import ChoseUs from "../Components/ChoseUs";
import Review from "../Components/Review";

const LandingPage = () => {
    return (
        <>
            <Banner />
            <Products />
            <ChoseUs/>
            <Review/>
        </>
    );
};

export default LandingPage;
