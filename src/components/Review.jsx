import React from "react";
import ReviewCard from "../layout/ReviewCard";
import ReviewOne from "../assets/img/pic1.png"
import ReviewTwo from "../assets/img/pic2.png"
import ReviewThree from "../assets/img/pic3.png"

const Review = () => {
  return (
    <div className="lg:pt-5 flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      {/* heading  */}
      <h3 className="font-semibold text-center text-4xl lg:mt-14 mt-24">
        Customer's Reviews
      </h3>
      {/* heading  */}

      {/* review card  */}
      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard src={ReviewOne} title="Olivia Ava" />
        <ReviewCard src={ReviewTwo} title="John Deo" />
        <ReviewCard src={ReviewThree} title="Sofia Zoe" />
      </div>
      {/* review card  */}
    </div>
  );
};

export default Review;
