import React from 'react'
import { useSelector } from 'react-redux';
import CargaPokemon from './CargaPokemon';
import Paginacion from './Paginacion';
import Tarjeta from './Tarjeta';

const ContenedorTarjeta = (props) => {

	const {
		dataPokemon
	} = useSelector(state => state.pokemonData);

    return (
        dataPokemon.length > 0
        ?<div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 m-5'>
                {dataPokemon.map((pok) => <Tarjeta key={pok.id} pokemon = {pok}/>)}
            </div>
            <Paginacion siguientePagina={props.siguientePagina} anteriorPagina={props.anteriorPagina} listaPokemon={props.listaPokemon}/>
        </div>
        :<CargaPokemon/>
    )
}

export default ContenedorTarjeta