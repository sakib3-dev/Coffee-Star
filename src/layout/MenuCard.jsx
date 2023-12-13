import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = ({ src, title, value }) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      {/* menu img  */}
      <div className="">
        <img className="rounded-xl" src={src} alt="" />
      </div>
      {/* menu img  */}

      {/* card info  */}
      <div className="p-2 mt-5">
        {/* card title and value  */}
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{title}</h3>
          <h3 className="font-semibold text-xl">{value}</h3>
        </div>
        {/* card title and value  */}

        <div className="flex flex-row justify-between mt-3">
          <div className="flex gap-2">
            <button className="px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg">Hot</button>
            <button className="px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor transition-all rounded-lg">Cold</button>
          </div>
          <span className="flex items-center bg-backgroundColor px-3 py-2 rounded-full cursor-pointer">
            <FaShoppingCart size={20} />
          </span>
        </div>
      </div>
      {/* card info  */}
    </div>
  );
};

export default MenuCard;
