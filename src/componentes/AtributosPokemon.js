import React from 'react'
import corazon from '../assets/images/hp.png'
import { capitalizarNombre } from '../funciones/EspecieColorPokemon'

const AtributosPokemon = ({ pokemon }) => {

    return (
        <div className='flex flex-row justify-between font-medium'>
            <div className='flex items-center'>
                <img
                    className='h-5'
                    src={corazon}
                />
                <div className='px-1'>{pokemon.stats[0].base_stat}</div>
            </div>
            <div className='bg-white rounded-md px-1 font-medium cursor-pointer'>
                {capitalizarNombre(pokemon.types[0].type.name)}
            </div>
        </div>
    )
}

export default AtributosPokemon