import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";


registerLocale("es", es);

const Fecha = ({ nombre, texto, value, onChange }) => {
  const [abrir, setAbrir] = useState(false);
  const {Fecha, setFecha}=useState(texto)

  const handleClick = () => {
    setAbrir(!abrir);
  };

  const handleChange = (date) => {
    onChange(!date);
    setFecha(!data ?' dateFormat':'dd/MM/yyyy')
   
  };

  return (
    <div className='borde rounded-xl w-[150px] h-[50px]' onClick={handleClick}>
      <div className='text-lg bord font-bold'>{nombre}</div>
      <div>
        {abrir && (
          <DatePicker
            selected={value}
            onChange={handleChange}
            inline
            locale="es"
            dateFormat="dd/MM/yyyy"
            onClose={() => setAbrir(false)}
            setFecha={Fecha}
          />
        )}
      </div>
      <div className='text-gray-500'>{texto}</div>
    </div>
  );
};

export default Fecha;