import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function ComponenteB (props) {

  const [conexion, setConexion] = useState(props.user.conectado);
  function changeConnection(){
    setConexion(()=>!conexion);
  }

  return (
    <div className={conexion ? 'container conected' : 'container disconected'}>
        <h3> {props.user.nombre} {props.user.apellido}</h3>
        <h4>{props.user.email}</h4>
        {conexion ? <h5> Contacto En Linea </h5> : <h5> Contacto No Disponible </h5>}
        <button onClick={changeConnection}> {conexion ? "Desconectar" : "Conectar"} </button>
    </div>
  )
}
ComponenteB.propTypes = {
    user: PropTypes.instanceOf
};
