import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Fecha = ({nombre}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='hover:color rounded-full flex flex-col justify-center  w-[200px]'>
      <div>
      <h1>{nombre}</h1>
      </div>
      <div>
      <DatePicker placeholderText='Agregar fecha'
        selected={selectedDate}
        onChange={handleChange}
        className='cursor-pointer hover:shadow-sm'
      />
      </div>
      
    </div>
  );
};

export default Fecha;
