import React from 'react'
import about from "../assets/img/about.jpg"
import Button from '../layout/Button'

const About = () => {
  return (
    <div className='lg:pt-5 flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
        {/* heading  */}
        <h3 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h3>
        {/* heading  */}

        <div className=" flex flex-col lg:flex-row items-center gap-5">
            <div className=" w-full lg:w-2/4">
                <img className='rounded-lg' src={about} alt="about" />
            </div>

            {/* info  */}
            <div className="w-full lg:w-2/4 p-4 space-y-3">
                <h3 className='font-semibold text-3xl'>What Makes Our Coffee Special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, rerum! Repudiandae placeat itaque eos doloremque non, magnam laborum quo quos quasi minus amet ipsum molestias enim dolorem corporis excepturi? Reiciendis!</p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, deleniti laboriosam adipisci inventore exercitationem ea cum fugit recusandae autem provident dolorem modi voluptatibus sed rem! Vel tempora est id maiores?</p>

                <Button title="Learn More"/>
            </div>
            {/* info  */}
        </div>
    </div>
  )
}

export default About