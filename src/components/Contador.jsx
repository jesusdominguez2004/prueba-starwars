import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

  return (
    <div>
        <h1>CONTADOR</h1>
        <button onClick={aumentar}>Aumentar</button>
        <h2>{contador}</h2>
        <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}

export default Contador