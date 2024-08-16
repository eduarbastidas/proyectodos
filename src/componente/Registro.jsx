import React, { useState } from 'react'


const Registro = () => {
    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();
    const [abrir, setAbrir] = useState()

   
   
    const registroUsuario = (email, contraseña) => {
        createUserWithEmailAndPassword(auth, email, contraseña)
          .then((userCredential) => {
    
            const user = userCredential.user;
            console.log(user);
    
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
      }
   
    return ( <div>

        {abrir &&   <div>
        
        </div>}
    </div>
  )
}

export default Registro