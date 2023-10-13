import React from 'react';
import '../hojas-estilo/Proyecto1.css';

function Proyecto1(props) {
 return (
  <div className='contenedor-proyecto1'>
    <img className='imagen-proyecto1'
    src={require (`../imagenes/proyecto1-${props.imagen}.jpg`)}
    alt='foto de linda' />
    <div className='contenedor-texto-proyecto1'>
      <p className='nombre-proyecto1'>
        <strong>{props.nombre} </strong> {props.premio}</p>
      <p className='profesion-proyecto1'>
        {props.profesion}</p>
      <p className='texto-proyecto1'>{props.testimonio}</p>
    </div>
  </div>
 );
}

export default Proyecto1;