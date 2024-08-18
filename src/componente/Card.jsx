import React from 'react'
import hotel from '../img/hotel.jpg'
import forbes from '../img/forbes.jpg'
import caribe from '../img/caribe.jpg'
import {  useNavigate } from 'react-router-dom'

const Card = () => {
  const navigate = useNavigate();
  const hotelData = {
    img: hotel,
    name: "Beach palace",
    price: "$763.824",
   };
  const hotelData1 = {
    img: forbes,
    name: "Forbes Travel",
    price: "$1.000.000",
   };
  const hotelData2 = {
    img: caribe,
    name: "playa del caribe",
    price: "1.500.000",
   };
  const Click = () => {
    navigate('/Pagina', { state: hotelData });
  }
  const Click1 = () => {
    navigate('/Pagina', { state: hotelData1 });
  }
  const Click2 = () => {
    navigate('/Pagina', { state: hotelData2 });
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
        <h3>{hotelData1.name}</h3>
        <h3>precio:${hotelData1.price} </h3>
        </div>

    </div>
    <div onClick={Click2} className='rounded-2xl  shadow-md h-[300px]  '>
        <img src={caribe} alt="" className='w-[300px] rounded-xl ' />
        <div className='mt-[20px]' >
        <h3>{hotelData2.name}</h3>
        <h3>precio:${hotelData2.price}</h3>
        </div>

    </div>
    <div  className='rounded-2xl  shadow-md h-[300px]  '>
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