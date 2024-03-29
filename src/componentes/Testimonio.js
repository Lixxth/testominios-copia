import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/imagen-${props.imagen}.png`)} 
        alt = 'Foto de Freecoders'/>
      <div className="contenedor-texto-testimonio">
       <p className="Nombre-testimonio">
        <strong>{props.nombre}</strong> en {props.pais}
         </p>
       <p className="Nombre-cargo"> 
       {props.cargo} en <strong>{props.empresa}</strong> </p>
       <p className="Texto-testimonio">"{props.testimonio}"" </p>
        </div>   
    </div>
  );
}

export default Testimonio;