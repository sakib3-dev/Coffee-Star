import React from 'react'
import ProductCard from '../layout/ProductCard'
import Nespresso from "../assets/img/product1.jpg"
import AeroPress from "../assets/img/product2.jpg"
import Chemex from "../assets/img/product3.jpg"

const Products = () => {
  return (
    <div className='lg:pt-5 flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        {/* heading  */}
        <h3 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Products</h3>
        {/* heading  */}

        <div className="flex flex-col lg:flex-row gap-12 justify-center">
            <ProductCard src={Nespresso} title="Nespresso" />
            <ProductCard src={AeroPress} title="AeroPress" />
            <ProductCard src={Chemex} title="Chemex" />
        </div>
    </div>
  )
}

export default Products