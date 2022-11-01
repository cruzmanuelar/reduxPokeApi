import React from 'react'
import { useSelector } from 'react-redux';
import Paginacion from './Paginacion';
import Tarjeta from './Tarjeta';

const ContenedorTarjeta = (props) => {

	const {
		dataPokemon
	} = useSelector(state => state.pokemonData);

    return (
        <>
            <div className='grid min-[630px]:grid-cols-3 min-[430px]:grid-cols-2 md:grid-cols-5 gap-5 m-5'>

            {
                dataPokemon.length > 0
                ? dataPokemon.map((pok) => <Tarjeta key={pok.id} pokemon = {pok}/>)
                : <p>Cargando...</p>
            }

            </div>
            <Paginacion  siguientePagina={props.siguientePagina} anteriorPagina={props.anteriorPagina} listaPokemon={props.listaPokemon}/>
        </>
    )
}

export default ContenedorTarjeta