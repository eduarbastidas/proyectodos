import React, { useEffect, useState } from 'react'

export const loginApi = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/66ae78f2acd3cb34a86f748f")
            .then(response => response.json())
            .then(data => {
                setData(data); // Aquí asumimos que la estructura es correcta
                console.log(data.record); // Verifica qué datos estás recibiendo
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (data)
}
export default loginApi;