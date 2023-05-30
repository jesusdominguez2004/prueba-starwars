import React from 'react'

const Variable = () => {
    const saludo = "Estadio Metropolitano"
    const imagen = "https://www.futbolred.com/files/article_main/files/crop/uploads/2019/04/08/5cabb6796d7d6.r_1589230801490.0-164-4000-2162.jpeg" 
    const text_alt = "Esto es una imagen de google"

  return (
    <div>
        <h1>El estadio del Junior de Barranquilla es: {saludo}</h1>
        <img src={imagen} alt={text_alt} />
    </div>
  )
}

export default Variable