
const CambioUnidad = (medida, unidad) => {


    function Metros(numero){
        if(variable != null){   
            //SI ES DIFERENTE DE NULL   
            return(numero = 3.28084 * parseFloat(numero));
          }   
    }

    function Pies(numero){
        if(variable != null){   
            //SI ES DIFERENTE DE NULL   
            return(numero = 0.3048 * parseFloat(numero));
          } 
    }

    return(
        <form action="">
            <input type="number" />
            <div className="mts"></div>
            <div className="pies"></div>
            <h1>El valor es {numero}</h1>
        </form>
    )
}

export default CambioUnidad;