import React, { useState } from 'react'
import logo from '../img/images.png'
import air from '../img/airbnb.png'
import { TbWorld } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";
import Fecha from '../componente/Fecha';
import { IoSearch } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Menu from '../componente/Menu';
import { FaBars } from 'react-icons/fa6';
import Carrusel from './Carrusel';
import aji from '../img/aji.png';
import Card from '../componente/Card';
import Login from '../componente/Login';
import Destino from '../componente/Destino';
import Persona from './Persona';




const Home = ({ }) => {

  const [showSalida, setShowSalida] = useState(true)
  const [llegada, setLlegada] = useState("Llegada")
  const [abrirMenu, setAbrirMenu] = useState(false)

  const abrir = () => {
    setAbrirMenu(!abrirMenu)
  }

  const click = () => {
    setShowSalida(false);
    setLlegada('fecha');
  };

  const clickdos= () => {
    setShowSalida(!showSalida);
    setLlegada(showSalida ? 'fecha' : 'Llegada')
  }
  //const [abrir setAbrir]=useState(false);
  const [data, setData] = useState(null);



  return (
    <div className='m-5 gap-5 flex flex-col items-center'>
      <nav className='flex justify-between  items-center'>
        <div className='flex h-[30px]'>
          <img className='logo' src={logo} alt="" />
          <img className='logo' src={air} alt="" />
        </div>

        <nav className='flex gap-6 ml-[700px] '>
          <h3 className='a1' onClick={clickdos} href="">Estadías</h3>
          <h3 className='a1' onClick={click} href="">Experiencias</h3>
          <h3 className='a1' href="">Pon tu espacio en Airbnb</h3>
        </nav>
        <nav className=' flex items-center gap-2'>
          <TbWorld />
          <nav className='flex border justify-center shadow-md gap-6 rounded-xl w-[100px] h-[36px] items-center'>

            {abrir && <FaBars onClick={abrir} />}
            {abrir && <GoPersonFill onClick={abrir} className=' border perfil rounded-2xl bg-gray-500 h-[30px] w-[30px] ' />}

          </nav>
        </nav>
      </nav>
      <div className=' rounded-full border flex items-center justify-center w-[800px] h-[70px]'>
        <Destino  className='borde cursor-pointer hover:shadow-md' nombre={"Donde"} texto={"Explora destino"} /> 
        <Fecha nombre={llegada} texto={"Agregar fecha "} />
        {showSalida && <Fecha nombre={"Salida"} texto={"Agregar fecha"} />}
        <Persona nombre={"Quien"} texto={"¿Cuanto?"} />
        <div className='bg-red-500 flex items-center rounded-full h-[47px] w-[50px]  '>
          <IoSearch className='lupa  ' />
        </div>
      </div>
      <div className='barra w-screen'></div>
      <div className='carrusel'>
        <Carrusel />
       
      </div>
      <div className='flex '>
     <Card className='w-[100px] '/>
      </div>
   


      {abrirMenu && <Menu />}

    </div >
  )
}

export default Home