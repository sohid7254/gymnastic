import React from "react";
import Banner from "../Components/banner";
import Products from "../Components/Products";
import ChoseUs from "../Components/ChoseUs";
import Review from "../Components/Review";
import Service from "../Components/Service";

const LandingPage = () => {
    return (
        <>
            <Banner />
            <Products />
            <ChoseUs/>
            <Review/>
            <Service/>
        </>
    );
};

export default LandingPage;
