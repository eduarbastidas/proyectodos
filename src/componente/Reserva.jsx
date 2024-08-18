import React, { useEffect, useState } from 'react';

const Reserva = () => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const savedHotel = localStorage.getItem('hotelReserva');
    if (savedHotel) {
      setHotel(JSON.parse(savedHotel));
    }
  }, []);

  if (!hotel) return <div>Cargando...</div>;

  return (
    <div className='flex justify-center m-5'>
      <div className='flex rounded-2xl items-center justify-around bg-slate-300 h-[600px] w-[1500px]'>
        <div>
          <img src={hotel.img} alt={hotel.name} className='w-[700px] rounded-2xl' />
        </div>
        <div className='bg-slate-400 h-[300px] w-[300px] rounded-xl flex flex-col justify-around'>
          <h1>Reserva para {hotel.name}</h1>
          <p>Precio: {hotel.price}</p>
          <p>Fecha de Salida: {hotel.fechaSalida}</p>
          <p>Fecha de Llegada: {hotel.fechaLlegada}</p>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
