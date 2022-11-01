import React from 'react'
import { useDispatch } from 'react-redux'
import { obtenerPokemones } from '../redux/actions/PokemonAction';

const Paginacion = (props) => {
    
    const dispatch = useDispatch();

    const siguientePokemon = () => {
        
        props.siguientePagina()
        dispatch(obtenerPokemones(props.listaPokemon))
    }
    const anteriorPokemon = () => {
        props.anteriorPagina()

    }

    return (
        <div className='flex justify-end m-5'>
            <button
                onClick={() => anteriorPokemon}
                className='px-2 py-1 rounded-md text-white bg-red-500 mx-1'
            >Anterior</button>

            <button
                onClick={() => siguientePokemon()}
                className='px-2 py-1 rounded-md text-white bg-red-500 mx-1'
            >Siguiente</button>
        </div>
    )
}

export default Paginacion