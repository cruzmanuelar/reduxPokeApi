import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { obtenerPokemonId } from '../redux/actions/PokemonAction';
import CargaPokemon from './CargaPokemon';
import HabilidadesPokemon from './Charts/HabilidadesPokemon';
import Navbar from './Navbar';

const Pokemon = () => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const [imagenPokemon, setImagenPokemon] = useState('')

    const {
		pokemonId,
        dataPrincipalId
	} = useSelector(state => state.pokemonData);

    useEffect(()=> {
        dispatch(obtenerPokemonId(id));
    },[id])

    useEffect(() => {
        setImagenPokemon('')
    },[id])

    return (
        <>
            <Navbar/>
            {pokemonId
            ? <div className='my-3 flex flex-col md:flex-row'>
                <div className='w-1/1 md:w-1/2 mx-10 sm:mx-20 rounded-xl bg-gradient-to-b from-gray-600 to-gray-300'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-center font-medium text-2xl sm:text-4xl text-white py-2'>{dataPrincipalId.nombre}</p>
                        <div className='flex justify-center'>
                            <img className='h-60 sm:h-80 w-60 sm:w-80 hover:scale-105 ease-in duration-300 cursor-pointer' src={imagenPokemon == '' ? pokemonId.imagen_dream_world : imagenPokemon} alt={dataPrincipalId.nombre}/>
                        </div>
                        <p className='text-center font-medium'>Versión:</p>
                        <div className='flex justify-center flex-col sm:flex-row'>
                            <button className='bg-gray-700 w-1/1 sm:w-min p-1 sm:m-1 mx-8 my-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_dream_world)}>DreamWorld</button>
                            <button className='bg-cyan-500 w-1/1 sm:w-min p-1 sm:m-1 mx-8 my-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_home)}>Home</button>
                            <button className='bg-violet-500 w-1/1 sm:w-min p-1 sm:m-1 mx-8 my-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_home_shiny)}>Shiny</button>
                        </div>
                    </div>
                    <div className='flex justify-center my-2  flex-col sm:flex-row'>
                        <div className='bg-yellow-500 text-center text-black p-1 sm:m-1 mx-8 my-1 rounded-md font-medium'>EXP: {pokemonId.base_experience}</div>
                        <div className='bg-yellow-500 text-center text-black p-1 sm:m-1 mx-8 my-1 rounded-md font-medium'>Altura: {(pokemonId.height*0.1).toFixed(1)}m</div>
                        <div className='bg-yellow-500 text-center text-black p-1 sm:m-1 mx-8 my-1 rounded-md font-medium'>Peso: {(pokemonId.weight*0.1).toFixed(1)}kg</div>
                    </div>
                </div>

                <div
                    className='w-1/1 md:w-1/3 flex flex-col align-middle justify-center h-2/5 relative'
                >
                    <p className='text-center text-2xl py-2 font-medium'>Habilidades</p>
                    <HabilidadesPokemon/>
                </div>
            </div>
        :<CargaPokemon/>}
        </>
    )
}

export default Pokemon