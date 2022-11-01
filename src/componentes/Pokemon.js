import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { capitalizarNombre } from '../funciones/EspecieColorPokemon';
import { obtenerPokemonId } from '../redux/actions/PokemonAction';
import Navbar from './Navbar';

const Pokemon = () => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const [imagenPokemon, setImagenPokemon] = useState('')

    const {
		pokemonId,
        dataPrincipalId
	} = useSelector(state => state.pokemonData);


    console.log(pokemonId.types);
    
    useEffect(()=> {

        dispatch(obtenerPokemonId(id));

    },[])

    return (
        <>
            <Navbar/>
            {pokemonId
            ? <div className='flex my-5'>
                <div className='w-1/2 mx-36 rounded-xl bg-gradient-to-b from-gray-600 to-gray-300'>
                    <div className='flex flex-col justify-center'>
                        <p className='text-center font-medium text-4xl text-white py-2'>{dataPrincipalId.nombre}</p>
                        <div className='flex justify-center'>
                            <img className='h-80 w-80 hover:scale-105 ease-in duration-300 cursor-pointer' src={imagenPokemon == '' ? pokemonId.imagen_dream_world : imagenPokemon}/>
                        </div>
                        <p className='text-center font-medium'>Versión:</p>
                        <div className='flex justify-center'>
                            <button className='bg-gray-700 p-1 m-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_dream_world)}>DreamWorld</button>
                            <button className='bg-cyan-500 p-1 m-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_home)}>Home</button>
                            <button className='bg-violet-500 p-1 m-1 rounded-md text-white' onClick={() => setImagenPokemon(pokemonId.imagen_home_shiny)}>Shiny</button>
                        </div>
                    </div>
                    <div className='flex justify-center my-2'>
                        <div className='mx-2 bg-yellow-500 text-black p-1 rounded-md font-medium'>EXP: {pokemonId.base_experience}</div>
                        <div className='mx-2 bg-yellow-500 text-black p-1 rounded-md font-medium'>Altura: {(pokemonId.height*0.1).toFixed(1)}m</div>
                        <div className='mx-2 bg-yellow-500 text-black p-1 rounded-md font-medium'>Peso: {(pokemonId.weight*0.1).toFixed(1)}kg</div>
                    </div>
                </div>

                <div className='1/2'>
                    chart
                </div>
            </div>
        :<p>Cargando</p>}
        </>
    )
}

export default Pokemon