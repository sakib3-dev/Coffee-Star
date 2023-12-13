import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ src, title }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="rounded-full" src={src} alt="review" />
        </div>
        <div className="mx-3">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf className="text-brightColor" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-backgroundColor" size={42} />
        </span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta magni delectus aliquid nulla commodi distinctio, laudantium cumque neque consequuntur laborum, minima nostrum at? Reprehenderit fugiat voluptatem numquam aperiam pariatur.</p>
    </div>
  );
};

export default ReviewCard;
