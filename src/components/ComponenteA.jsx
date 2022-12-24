import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Contacto from './Contacto';
import ComponenteB from './ComponenteB';

class ComponenteA extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ComponenteB user={new Contacto(this.props.nombre,this.props.apellido,this.props.email,this.props.conectado)}/>
        )
    }
}
ComponenteB.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};;

export default ComponenteA;
