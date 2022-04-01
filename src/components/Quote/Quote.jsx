import "./Quote.css"



const Quote = ({cita,color}) => {
  console.log(color);
  return (
    <div className="cita-contenedor">
    <p className={`cita-p ${color}`} >
    {cita.quote} <span>{cita.author}</span>
  </p>
  </div>
  )
}

export default Quote