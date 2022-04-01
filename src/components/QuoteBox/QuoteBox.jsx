import { useState, useEffect } from "react";
import Quote from "../Quote/Quote";
import "./QuoteBox.css";
const QuoteBox = () => {
  //Use State para cita
  const [citaNumero, setCitaNumero] = useState(Math.floor(Math.random() * 102));
  const [cita, setCita] = useState({});
  const color = [
    "darkgray",
    "darkgreen",
    "darkkhaki",
    "burlywood",
    "cadetblue",
    "cornflowerblue",
    "mediumseagreen",
  ];
  
  const url = "../db.json";
   
  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => setCita(resultado.quotes[citaNumero]))
      .catch((error) => console.log(error));
  }, [citaNumero]);

  return (
    <div className={`contenedor ${color[Math.floor(Math.random() * 7)]}Back `}>
      
        {/*Componente para la cita*/}
        <Quote cita={cita} color={color[Math.floor(Math.random() * 7)]}></Quote>
  
      {/*Agregar un evento al button para cambiar aleatoriamente el estadol de cita*/}
      <button
        className={`btn-cita ${color[Math.floor(Math.random() * 7)]}Back`}
        onClick={() => {
          setCitaNumero(Math.floor(Math.random() * 102));
        }}
      >
        Cambio Cita
      </button>
    </div>
  );
};

export default QuoteBox;
