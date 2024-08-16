import React from 'react'
import { BsTicket } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { GiAtSea } from "react-icons/gi";
import { MdOutlineCabin } from "react-icons/md";
import { GiBowlingStrike } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import { FaLandmarkDome } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";





const Carrusel = () => {
    return (
        <div className='carrusel items-center flex  gap-20 '>


            <div className='  gre  w-[-10px] h-[105px] '>
                <BsTicket className=' h-[100px] w-[30px]' />
                <FaStar className=' mt-[-60px]  w-[10PX] ml-[10px] absolute  ' />
                <p className='mt-[-35px] ml-[-10px]'>Icónico</p>
            </div>

            <div className='gre w-[30px] h-[105px] ' >
                <FaSwimmingPool className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-10px]'>Piscinas increibles</p>
            </div>
            <div className='gre w-[30px] h-[105px] '>
                <GiAtSea className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-10px]'>Vistas increibles</p>
            </div>

            <div className='gre w-[30px] h-[105px] '> <MdOutlineCabin className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-10px]'>Cabañas</p>
            </div>
            <div className='gre w-[30px] h-[105px]'> <GiBowlingStrike className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-10px]'>Diversion</p>
            </div>
            <div className='gre w-[30px] h-[105px]'>< GiForestCamp className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-25px]'>Campamento</p>
            </div>
            <div className='gre w-[30px] h-[105px]'><GiTreehouse className='h-[100px] w-[30px]' />
                <p className='w-24 mt-[-35px] ml-[-10px]'>Casa rurales</p>
            </div>
            <div className='gre w-[30px] h-[105px]'><FaLandmarkDome className='h-[100px] w-[30px]' />
                <p className='mt-[-35px] ml-[-10px]'>cúpulas</p>
            </div>
            <div className='gre w-[30px] h-[105px]'><PiGarage className='h-[100px] w-[35px]' />
                <p className=' w-28 mt-[-35px] ml-[-20px]'>Frente ala playa </p>
            </div>




        </div>
    )
}

export default Carrusel