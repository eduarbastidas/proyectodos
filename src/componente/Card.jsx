import React from 'react'
import hotel from '../img/hotel.jpg'
import forbes from '../img/forbes.jpg'
import {  useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate();
  const hotelData = {
    img: hotel,
    name: "Beach palace",
    price: "$763.824",
   };
  const hotel2Data = {
    img: forbes,
    name: "Forbes Travel",
    price: "$1.000.000",
   };
  const Click = () => {
    navigate('/Pagina', { state: hotelData });
  }
  const Click1 = () => {
    navigate('/Pagina', { state: hotel2Data });
  }

return ( <div className='flex gap-10'>
    
   

    <div onClick={Click} className='rounded-2xl  shadow-md h-[300px]  '>
        <img src={hotel} alt="" className='w-[300px] rounded-xl ' />
        <div className='mt-[20px]' >
        <h3>{hotelData.name}</h3>
        <h3>Precio: {hotelData.price}</h3>

        </div>

    </div>
  
    <div  onClick={Click1} className='rounded-2xl  shadow-md h-[300px]  '>
        <img src={forbes} alt="" className='w-[300px] h-[200px] rounded-xl ' />
        <div className='mt-[20px]' >
        <h3>{hotel2Data.name}</h3>
        <h3>precio:${hotel2Data.price} </h3>
        </div>

    </div>
    <div className='rounded-2xl  shadow-md h-[300px]  '>
        <img src={hotel} alt="" className='w-[300px] rounded-xl ' />
        <div className='mt-[20px]' >
        <h3>Beach palace</h3>
        <h3>precio:$763.824</h3>
        </div>

    </div>
    <div className='rounded-2xl  shadow-md h-[300px]  '>
        <img src={hotel} alt="" className='w-[300px] rounded-xl ' />
        <div className='mt-[20px]' >
        <h3>Beach palace</h3>
        <h3>precio:$763.824</h3>
        </div>

    </div>
  </div>
  )
}

export default Card