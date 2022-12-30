import React, {useState,useEffect} from 'react'


export default function Clock() {
  const inicialState = {
    nombre : 'Martin',
    apellidos: 'San José',
    edad : 0 ,
    fecha: new Date()
  }
  const [edad, setEdad] = useState(inicialState.edad);
  const [fecha, setFecha] = useState(inicialState.fecha);

  useEffect(() => {
    setInterval (
      () => tick(), 1000
    );
  },[]);

  useEffect( ()=>{
    clearInterval();
  });

  function tick(){
    setEdad(edad+1);
    setFecha(new Date());
  }

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>{inicialState.nombre} {inicialState.apellidos}</h3>
      <h1>Edad: {edad}</h1>
    </div>
  )
}
