import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ae78f2acd3cb34a86f748f')
      .then(response => response.json())
      .then(data => 
        setData(data)
      )
      console.log(data)
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        data.map(() => (
          <div >
            <h2>Nombre: {data.nombre}</h2>
            <p>Precio: {data.precio}</p>
           
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default App;
