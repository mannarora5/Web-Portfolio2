import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='w-full bg-gradient-to-b from-black via-black to bg-gray-800 h-screen text-white'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-4'>
                
                <h2 className=' text-4xl sm:text-7xl font-bold texxt-white
                '>I'm a Computer Science Student</h2>
                <p className='text-gray-500 py-4  max-w-md'> With a strong passion in software engineering, 
                    I am an aspiring software engineer hoping to make a positive impact 
                    within technology.
                </p>
                <div>
                    <Link to="about"  smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to to-blue-500 cursor-pointer'> Learn More! 
                        <span className='group-hover:rotate-90 duration-300 '>
                            <MdOutlineKeyboardArrowRight size={25} className=" ml-1"/>
                        </span>
                        
                   </Link>
                </div>
            </div>
            <div className=''>
                <img src={HeroImage} alt="my profile" className='rounded-1xl w-3/4 md:w-full '/>
            </div>
        </div>
    </div>
  )
}

export default Home