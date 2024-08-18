import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../img/images.png';
import air from '../img/airbnb.png';
import { IoSearch } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa6';
import { GoPersonFill } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import Fecha2 from './Fecha2';
import { db } from '../pegas/firebase';
import { collection, addDoc } from 'firebase/firestore';


const Pagina = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { img, name, price } = location.state || {};

  const [hotel, setHotel] = useState({
    img: img || '',
    name: name || '',
    price: price || '',
    fechaSalida: '',
    fechaLlegada: '',
  });

  const handleFechaChange = (nombre, valor) => {
    setHotel((prevHotel) => ({
      ...prevHotel,
      [nombre]: valor,
    }));
  };
  const handleClick = async () => {
    try {
      const docRef = await addDoc(collection(db, 'reservations'), {
        img: hotel.img,
        name: hotel.name,
        price: hotel.price,
        fechaSalida: hotel.fechaSalida,
        fechaLlegada: hotel.fechaLlegada,
      });
      console.log('Documento escrito con ID: ', docRef.id);
      navigate('/Reserva');
    } catch (e) {
      console.error('Error al agregar el documento: ', e);
    }
  };
  

  return (
    <div className='m-5'>
      <div className='flex m-5 justify-around'>
        <nav className='flex justify-between items-center'>
          <div className='flex h-[30px]'>
            <img className='logo' src={logo} alt="logo" />
            <img className='logo' src={air} alt="airbnb" />
          </div>
        </nav>
        <div className='shadow-md h-[60px] items-center flex rounded-2xl gap-6'>
          <p>En cualquier lugar del mundo</p>
          <p>Cualquier semana</p>
          <p>¿Cuántos?</p>
          <div className='bg-red-500 flex items-center rounded-full h-[47px] w-[50px]'>
            <IoSearch className='lupa' />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <h3 className='a1'>Pon tu espacio en Airbnb</h3>
          <nav className='flex items-center gap-2'>
            <TbWorld />
            <nav className='flex border justify-center shadow-md gap-6 rounded-xl w-[100px] h-[36px] items-center'>
              <FaBars />
              <GoPersonFill className='border perfil rounded-2xl bg-gray-500 h-[30px] w-[30px]' />
            </nav>
          </nav>
        </div>
      </div>

      <div className='flex gap-5'>
        <div>
          <strong><h2>{hotel.name}</h2></strong>
          <img src={hotel.img} alt={name} className='w-[700px] rounded-2xl' />
        </div>
        <div className='bg-slate-200 w-[500px] shadow-md gap-10 m-[10px] justify-center items-center rounded-2xl flex flex-col'>
          <div className='flex h-[80px]'>
            <Fecha2 nombre='fechaSalida' className='border rounded-2xl' onChange={(valor) => handleFechaChange('fechaSalida', valor)} />
            <Fecha2 nombre='fechaLlegada' className='border rounded-2xl' onChange={(valor) => handleFechaChange('fechaLlegada', valor)} />
          </div>
          <div>
            <div>
              <p>{hotel.price}</p>
            </div>
            <button onClick={handleClick} className='bg-red-600 text-white rounded-full border h-[50px] w-[300px] flex justify-center items-center'>Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina;
