import React from 'react'

export const Contacto = () => {
  return (
    <>

      <div className='container'>

        <h1>Dejanos tus Comentarios o Dudas</h1>


        <div className="mb-3">
          <label form="exampleFormControlInput1" className="form-label">Correo</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label form="exampleFormControlTextarea1" className="form-label">Comentario</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <button className='btn btn-success w-100' >Enviar</button>

      </div>

    </>


  )
}
