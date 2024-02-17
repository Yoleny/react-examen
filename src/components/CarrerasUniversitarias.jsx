
import React from 'react'

export const CarrerasUniversitarias = () => {

    const CarrerasUniversitarias = [
        {
            posicion : 1,
            carrera: "Ingenieria  en Sistemas",
            clases: 62
        },
        {
            posicion : 2,
            carrera: "Ingenieria  Industrial",
            clases: 58
        }, 
        {
            posicion : 3,
            carrera : "Lic. Diseno Grafico", 
            clases : 40
        },
        {
            posicion : 4,
            carrera : "Lic. Relaciones Industriales", 
            clases : 79
        },
        {
            posicion : 5,
            carrera : "Lic. Enfermeria", 
            clases : 35
        },
        {
            posicion : 6,
            carrera : "Tecnico En  Electrónica", 
            clases : 30
        },
        {
            posicion : 7,
            carrera : "Tecnico En  Electrómecanica", 
            clases : 25
        },
        {
            posicion : 8,
            carrera : "Tecnico En  Aplicaciones web", 
            clases : 25
        },
        {
            posicion : 9,
            carrera : "Tecnico En  Redes", 
            clases : 27
        },
        {
            posicion : 10,
            carrera : "Licenciatura en Periodismo", 
            clases : 57
        }   
        
    ];

 return (
        <>
            <div className='container'>

                <h1>Listado de Carreras universitarias</h1>

                <table className="table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Carreras Disponibles</th>
                        <th scope="col">Clases</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        {CarrerasUniversitarias.map( (item) =>(

                            <tr key={item.posicion}> 
                                <td>{item.posicion}</td>
                                <td>{item.carrera} </td>
                                <td>{item.clases} </td>
                            </tr>

                        ) )}

                    </tbody>

                </table>

            </div>

        </>
    )
}
