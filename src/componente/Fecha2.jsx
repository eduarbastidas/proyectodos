import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Fecha = ({ nombre }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className=' hover:color shadow-md  rounded-full flex flex-col justify-center  w-[200px]'>
            <div className='ml-[20px]'>

                <div>
                    <h1>{nombre}</h1>
                </div>
                <div>
                    <DatePicker placeholderText='Agregar fecha'
                        selected={selectedDate}
                        onChange={handleChange}
                        className='w-[150px] tra  bg-slate-100 cursor-pointer hover:shadow-sm'
                    />
                </div>
            </div>

        </div>
    );
};

export default Fecha;