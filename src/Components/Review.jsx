import React from "react";
import man1 from "../assets/reviews/man1.png";
import man2 from "../assets/reviews/man2.png";
import man3 from "../assets/reviews/man3.png";
import man4 from "../assets/reviews/man4.png";
import man5 from "../assets/reviews/man5.png";
import man6 from "../assets/reviews/man6.png";
import group4 from "../assets/group4.png";
import { TiStarFullOutline } from "react-icons/ti";

const Review = () => {
    const reviews = [
        {
            id: 1,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man1,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
        {
            id: 2,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man2,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
        {
            id: 3,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man3,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
        {
            id: 4,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man4,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
        {
            id: 5,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man5,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
        {
            id: 6,
            title: "The Best Training Program!",
            content: "The boxing program helped me to build confidence, strength and endurance. The coaches are supportive and push you to be your best. Highly recomended for anyone serious about their fitness",
            image: man6,
            name: "Stive Meloni",
            jobTiltle: "Ceo of Miko",
        },
    ];
    return (
        <section>
            <div className="flex justify-between items-start mt-5">
                <div className="ml-7">
                    <h2 className="text-xl lg:text-3xl md:text-3xl font-bold">What Our Clients Are Saying</h2>
                    <p className="text-sm lg:text-base md:text-lg text-gray-500">Real Stories, Real Results — Hear From Our Athletes</p>
                </div>

                {/* Image positioned higher */}
                <img src={group4} alt="Why Choose Us" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 lg:ml-6 -mt-6" />
            </div>
            <section className=" rounded-3xl bg-[#d1d1d1] p-6 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="border bg-[#000000] text-white rounded-2xl p-4">
                            <h2 className="text-xl font-bold mb-2">{review.title}</h2>
                            <p className="text-gray-300 text-sm">{review.content}</p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center justify-center gap-2 mt-">
                                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <h3 className="text-sm font-bold">{review.name}</h3>
                                        <p className="text-gray-500 text-sm">{review.jobTiltle}</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-sm">
                                    <p className="flex items-center text-[#efeb1f]">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <span className="text-gray-400">
                                            <TiStarFullOutline />
                                        </span>
                                    </p>
                                    <p>(4.5)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default Review;
