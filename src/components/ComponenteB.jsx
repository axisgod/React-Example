import React from 'react'
import PropTypes from 'prop-types'

export default function ComponenteB (props) {
  return (
    <div className={props.user.conectado ? 'container conected' : 'container disconected'}>
        <h3> {props.user.nombre} {props.user.apellido}</h3>
        <h4>{props.user.email}</h4>
        {props.user.conectado ? <h5> Contacto En Linea </h5> : <h5> Contacto No Disponible </h5>}
    </div>
  )
}
ComponenteB.propTypes = {
    user: PropTypes.instanceOf
};
