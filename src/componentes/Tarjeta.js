import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { capitalizarNombre, especieColorPokemon } from '../funciones/EspecieColorPokemon';
import { ObtenerDataPrincipalPokemonId } from '../redux/actions/PokemonAction';
import AtributosPokemon from './AtributosPokemon';

const Tarjeta = ({pokemon}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    let colorEspecie = especieColorPokemon(pokemon.types[0].type.name)

    let estiloTarjeta = 'min-w-56 p-2 bg-slate-400 flex shadow-lg flex-col rounded-md ' + colorEspecie;

    return (

        <div className={estiloTarjeta}>
            <div className='bg-white rounded-lg'>
                <p className='text-xl text-center font-medium'>{capitalizarNombre(pokemon.name)}</p>
            </div>
            <div className='my-3 flex justify-center'>
                <img
                    onClick={()=> 
                        navigate( `/pokemon/${pokemon.id}`)
                    }
                    className='h-28 hover:scale-105 ease-in duration-300 cursor-pointer'
                    src={pokemon.sprites.other.dream_world.front_default}
                />
            </div>
            <AtributosPokemon pokemon={pokemon}/>
        </div>
    )   
}

export default Tarjeta