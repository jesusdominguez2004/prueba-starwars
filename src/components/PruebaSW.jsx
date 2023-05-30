import React from 'react'
import { useState } from 'react'

const PruebaSW = () => {
    // Variables hooks
    const [personajes, setPersonajes] = useState([]);
    const [paginacion, setPaginacion] = useState(1);

    // Funciones
    const traerPersonajes = async(next) => {
        try {
            const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
            const { results } = await res.json();

            const personajesConImagen = results.map((personaje) => ({
                ...personaje,
                image: `https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(personaje.url)}.jpg`,
            }));

            setPersonajes(personajesConImagen);
            console.log(personajesConImagen);
        } catch(error) {
            console.log(error);
        }
    }

    const traer = () => {
        setPaginacion(paginacion + 1);
        console.log(paginacion);
        traerPersonajes(paginacion);
    }

    const siguiente = () => {
        setPaginacion(paginacion + 1);
        console.log(paginacion);
        traerPersonajes(paginacion);
    }

    const atras = () => {
        setPaginacion(paginacion - 1);
        console.log(paginacion);
        traerPersonajes(paginacion);
    }

    const extractIdFromUrl = (url) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2];
    };

    return (
        <div>
            <h1>API Star Wars</h1>
            <h2>Jesús Domínguez</h2>
            <button onClick={traer}>Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>
            {
                personajes.map((aux, index) => (
                    <div key={aux.name}>
                        <h4>{aux.name}</h4>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={aux.name} />
                    </div>
                ))
            }
        </div>
    )
}

export default PruebaSW