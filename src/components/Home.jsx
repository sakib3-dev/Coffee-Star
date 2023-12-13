import React from "react";
import Button from "../layout/Button";
import HomeBG from "../assets/img/home.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 pt-2 px-5 gap-10 bg-gradient-to-r from-brandTwo to-brandOne">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        {/* heading  */}
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">Start your day with a steaming cup of coffee</h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        {/* heading  */}

        <div className="flex flex-row gap-6">
          <Button title="ADD TO CARD" />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className="relative">
        <img src={HomeBG} alt="HomeBG" />

        <div className="absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-shadowTwo">
            <h2 className="font-semibold">14K</h2>
        </div>

        <div className="absolute bg-white px-8 py-2 bottom-5 -left-0 rounded-full">
            <h3>Cappuccino</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
