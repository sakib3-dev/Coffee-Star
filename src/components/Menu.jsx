import React from 'react'
import MenuCard from '../layout/MenuCard'
import Espresso from "../assets/img/menu1.jpg"
import Cappuccino from "../assets/img/menu2.jpg"
import Latte from "../assets/img/menu3.jpg"
import Americano from "../assets/img/menu4.jpg"
import Macchiato from "../assets/img/menu5.jpg"
import Doppio from "../assets/img/menu6.jpg"

const Menu = () => {
  return (
    <div className=' flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        {/* heading  */}
        <h3 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h3>
        {/* heading  */}

        {/* MenuCard  */}
        <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard src={Espresso} title="Espresso" />
        <MenuCard src={Cappuccino} title="Cappuccino" />
        <MenuCard src={Latte} title="Latte" />
        <MenuCard src={Americano} title="Americano" />
        <MenuCard src={Macchiato} title="Macchiato" />
        <MenuCard src={Doppio} title="Doppio" />
        </div>
        {/* MenuCard  */}
    </div>
  )
}

export default Menu