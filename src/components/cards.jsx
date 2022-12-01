
const CardGeneral = ({imagen, titulo, texto}) => {
return(
    <div className="d-flex flex-column justify-content-between w-30 minwidth py-5">
    <i className={`${imagen} fa-2xl my-5 text-center`}></i>
    <h3 className="text-center text-success pb-3">{titulo}</h3>
    <p className="text-center">{texto}</p>
  </div>
)
}
export default CardGeneral;