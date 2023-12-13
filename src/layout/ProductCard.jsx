import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from './Button';

const ProductCard = ({src, title}) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
        <img className='rounded-lg' src={src} alt="products" />
        <div className="flex flex-col items-center mt-5 gap-3">
            <h3 className='font-semibold text-xl'>{title}</h3>
            <div className="flex">
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor'/>
            </div>
            <h3 className='font-semibold text-lg'>$15.99</h3>
            <Button title="ADD TO CARD" />
        </div>
    </div>
  )
}

export default ProductCard