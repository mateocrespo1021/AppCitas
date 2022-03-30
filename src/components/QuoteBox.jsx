import { useState, useEffect } from "react";
import "./QuoteBox.css";
import axios from "axios";
const QuoteBox = () => {
  //Use State para cita
  const [citaNumero, setCitaNumero] = useState(Math.floor(Math.random() * 102));
  const [cita, setCita] = useState({});
  const [color,setColor]=useState("");

  //Uso de json-server para simular pedidios http
  //Consultar el json  con axios
  const url = "http://localhost:4000/quotes";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCita(res.data[citaNumero]);
      })
      .catch((error) => console.log(error));
  }, [citaNumero]);

  return (
    <div className="contenedor">
      <div className="cita-contenedor">
        <p className="cita-p">
          {cita.quote} <span>{cita.author}</span>
        </p>
      </div>
      {/*Agregar un evento al button para cambiar aleatoriamente el estadol de cita*/}
      <button
        className="btn-cita"
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
