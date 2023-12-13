import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-brandTwo to-brandOne text-black rounded-t-3xl mt-8 md:m-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold text-xl pb-4">CafePluse</h3>
          <p className="text-sm">
            Welcome to our coffee haven! Explore our aromatic brews, Savor
            artisanal flavors , and discover the perfect roas to elevate your
            daily ritual.
          </p>
        </div>

        <div className="">
          <h3 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h3>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Products
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>

        <div className="">
          <h3 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h3>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Latte
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Americano
            </a>
          </nav>
        </div>

        <div className="">
          <h3 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h3>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              thesakibdev@gmail.com
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              +8801618574590
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div className="">
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-backgroundColor">TheSakibDev</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
