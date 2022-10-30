import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Tarjeta from './Tarjeta';

const ContenedorTarjeta = () => {

	const {
		dataPokemon
	} = useSelector(state => state.pokemonData);

    return (
        <div className='grid md:grid-cols-5 sm:grid-cols-2 gap-5 m-5'>

            {
                dataPokemon.length > 0
                ? dataPokemon.map((pok) => <Tarjeta pokemon = {pok}/>)
                : <p>Cargando...</p>
            }

        </div>
    )
}

export default ContenedorTarjeta