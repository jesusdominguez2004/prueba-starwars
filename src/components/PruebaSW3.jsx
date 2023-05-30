import React from 'react'
import { useState } from 'react';

const PruebaSW3 = () => {
    // Variables hooks
    const [personajes, setPersonajes] = useState([]);
    const [paginacion, setPaginacion] = useState(0);

    // Funciones
    const TraerPersonajes = async (page) => {
        try {
            const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
            const { results } = await res.json();

            const personajesConImagen = results.map((personaje) => ({
                ...personaje,
                image: `https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(personaje.url)}.jpg`,
            }));
            setPersonajes(personajesConImagen);
            console.log(personajesConImagen);
        } catch (error) {
            console.log(error);
        }
    }

    const traer = () => {
        setPaginacion(paginacion + 1);
        TraerPersonajes(paginacion + 1);
    }

    const siguiente = () => {
        setPaginacion(paginacion + 1);
        TraerPersonajes(paginacion + 1);
    }

    const atras = () => {
        if (paginacion > 1) {
        setPaginacion(paginacion - 1);
        TraerPersonajes(paginacion - 1);
        }
    }

    const extractIdFromUrl = (url) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2];
    }

    // HTML retornado
    return (
        <div>
            <h1>Solicitud API Star Wars</h1>
            <h2>Buenas Prácticas de Desarrollo de Software</h2>
            <h2>© Jesús Domínguez</h2>
            <button onClick={traer}>Personajes</button>
            <button onClick={siguiente}>Siguiente</button>
            <button onClick={atras}>Atrás</button>

            {
                personajes.map(({name, image}) => (
                    <div key= {name}>
                        <h3>Nombre: {name}</h3>
                        <img src={image} alt={name}/>
                    </div>
                ))
            }

        </div>
    )
}

export default PruebaSW3