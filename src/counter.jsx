import { useEffect, useState } from "react";
import "./assets/style.css"

function Counter() {

    let fechaActual = new Date();
    let fechaMeta = new Date('2024-01-14T17:00:00');
    let fechaCont = fechaMeta - fechaActual;

    //OBTENER LOS DATOS
    const days = Math.floor(fechaCont / (1000 * 60 * 60 * 24));
    const hours = Math.floor((fechaCont % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((fechaCont % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((fechaCont % (1000 * 60)) / 1000);


    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    return (  
    <div className="container">

        <div className="row position-absolute top-50 start-50 translate-middle">
    
            <div className="col-md order">
                <p className="fs-3 color1">Días</p>
                <p className="fs-1 color2">{days}</p>
            </div>
            <div className="col-md order">
                <p className="fs-3 color1">Horas</p>
                <p className="fs-1 color2">{hours}</p>
            </div>
            <div className="col-md order">
                <p className="fs-3 color1">Minutos</p>
                <p className="fs-1 color2">{minutes}</p>
            </div>
            <div className="col-md order">
                <p className="fs-3 color1">Segundos</p>
                <p className="fs-1 color2">{seconds}</p>
            </div>

        </div>

    </div>
    );
}

export default Counter;