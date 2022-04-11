import React from "react";
import PropTypes from "prop-types";
import './index.css'

//const PrimeraApp = (props) => {
const PrimeraApp = ({Nombre, Apellido}) => {

    return <h1>Hola {Nombre} {Apellido}</h1>
}

PrimeraApp.propTypes = {
    Nombre: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    Apellido: 'Apellido'
}

export default PrimeraApp;