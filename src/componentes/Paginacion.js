import React from 'react'
import { useDispatch } from 'react-redux'
import { obtenerPokemones } from '../redux/actions/PokemonAction';

const Paginacion = (props) => {
    
    const dispatch = useDispatch();

    const siguientePokemon = async () => {

        dispatch(obtenerPokemones(props.listaPokemon + 20))
        await props.siguientePagina()
    }
    const anteriorPokemon = () => {
        dispatch(obtenerPokemones(props.listaPokemon - 20))
        props.anteriorPagina()
    }

    return (
        <div className='flex justify-end m-5'>

            {props.listaPokemon > 1
                && <button
                    onClick={() => anteriorPokemon()}
                    className='px-2 py-1 rounded-md text-white bg-red-500 mx-1'
                >Anterior</button>
            }

            { props.listaPokemon < 1141
                && <button
                    onClick={() => siguientePokemon()}
                    className='px-2 py-1 rounded-md text-white bg-red-500 mx-1'
                >Siguiente</button>
            }
        </div>
    )
}

export default Paginacion