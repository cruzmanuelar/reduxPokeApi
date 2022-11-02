import React from 'react'
import PokeballMove from '../assets/images/pokeballMove.gif'

const CargaPokemon = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <img src={PokeballMove}/>
        </div>
    )
}

export default CargaPokemon