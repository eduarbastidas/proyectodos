import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../img/images.png'
import air from '../img/airbnb.png'
import Fecha from './Fecha';
import { IoSearch } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { GoPersonFill } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';

const Pagina = () => {
  const location = useLocation();
  const { img, name, price } = location.state || {};

  return (
    <div className='m-5  '>
      <div className='flex m-5 justify-around '>

        <nav className='flex justify-between  items-center'>
          <div className='flex h-[30px]'>
            <img className='logo' src={logo} alt="" />
            <img className='logo' src={air} alt="" />
          </div>
        </nav>
        <div className='shadow-md h-[60px] items-center flex rounded-2xl gap-6 '>
          <p>En cualquier lugar del mundo</p>
          <p>Cualquier semana</p>
          <p>¿Cuantos?</p>
        </div>

        <div className='flex items-center gap-5'>
          <h3 className='a1' href="">Pon tu espacio en Airbnb</h3>
          <nav className=' flex items-center gap-2'>
            <TbWorld />
            <nav className='flex border justify-center shadow-md gap-6 rounded-xl w-[100px] h-[36px] items-center'>

              <FaBars />
              <GoPersonFill className=' border perfil rounded-2xl bg-gray-500 h-[30px] w-[30px] ' />

            </nav>


          </nav>

        </div>
      </div>


      <div className='  '>

        <strong><h2 className='' >{name}</h2></strong>

        <img src={img} alt={name} className='w-[500px]' />


        <div>


          <p> {price}</p>
        </div>
      </div>
    </div>
  );
}

export default Pagina;
