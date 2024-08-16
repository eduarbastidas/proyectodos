import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../pegas/firebase';
import { Modal } from '@mui/joy';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  useNavigate } from 'react-router-dom';

const Menu = () => {
  // Estado para abrir o cerrar el modal
  const [abrir, setAbrir] = useState(false);
  const [abrirSesion, setAbrirSesion] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate(); // Utilizar useNavigate
  const [isLogged, setIsLogged] = useState(false);

  // Estados para almacenar el email y contraseña
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [registrado, setRegistrado] = useState(false);
 
  // Función para registrar un usuario
  const registroUsuario = () => {
    createUserWithEmailAndPassword(auth, email, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
     
        setRegistrado(true); // Actualizar el estado a true después de registrar con éxito
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
  }
  

  const Login = () => {
    signInWithEmailAndPassword(auth, email, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.accessToken);
        navigate('/', { replace: true }); // Redirigir a la página de inicio
        if (user) {
          alert("credenciales exitosas");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("credenciales invalidas");
      });
  };

  return (
    <div className='flex flex-col menu'>
    {isLogged ? (
      <div>
        <ul className='flex gap-4  flex-col'>
          <li>
            <a href="#">Perfil: {user.name}</a>
          </li>
          <li>
            <a href="#">Correo: {user.email}</a>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    ) : (
      <div>
        <ul className='flex gap-4  flex-col'>
          <li>
            <a onClick={() => setAbrir(true)} href="#">
              registrate
            </a>
          </li>
          <li>
            <a onClick={() => setAbrirSesion(true)} href="#">
              Iniciar Sesion
            </a>
          </li>
          <li>
            <a href="#">Opción 3</a>
          </li>
        </ul>
      </div>
    )}

      {/* Modal que se abre cuando se hace clic en "registrate" */}
      <Modal open={abrir} onClose={() => setAbrir(false)}>
        <div className='flex flex-col bg-white h-[200px] w-[500px] ml-[450px] justify-center  gap-5 items-center border rounded-2xl mt-[200px] '>
          {/* Input para el email */}
          <input className='rounded-2xl border ' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
          {/* Input para la contraseña */}
          <input className='rounded-2xl border ' value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="text" placeholder='contraseña' />
          {/* Botón para registrar */}
          <button className='bg-blue-500 rounded-2xl w-[150px] ' onClick={registroUsuario}>registrar</button>
        </div>
      </Modal>

      {/* Modal que se abre cuando se hace clic en "Iniciar Sesion" */}
      <Modal open={abrirSesion} onClose={() => setAbrirSesion(false)}>
        <div className='flex flex-col bg-white h-[200px] w-[500px] ml-[450px] justify-center  gap-5 items-center border rounded-2xl mt-[200px] '>
          {/* Input para el email */}
          <input className='rounded-2xl border ' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
          {/* Input para la contraseña */}
          <input className='rounded-2xl border ' value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="text" placeholder='contraseña' />
          {/* Botón para iniciar sesión */}
          <button className='bg-blue-500 rounded-2xl w-[150px] ' onClick={Login}>Iniciar Sesion</button>
        </div>
      </Modal>
    </div>
  )
}

export default Menu;