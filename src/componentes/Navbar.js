import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonId, obtenerPokemonInput } from '../redux/actions/PokemonAction';
import PokeballMove from '../assets/images/pokeballMove.gif'
import PokeballMoveoff from '../assets/images/pokeballMoveOff.webp'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
		existePokemonInput,
        idPokemonInput
	} = useSelector(state => state.pokemonData);

    return (
        <div
        className='bg-red-600 text-white py-3 flex justify-between'
        >
            <a href={'/'}>
                <span className='text-2xl m-3 cursor-pointer font-mono'>PokeApp</span>
            </a>

            <div className='flex'>
                <input
                    placeholder='ID o nombre'
                    onChange={(e) => dispatch(obtenerPokemonInput(e.target.value))}
                    className='ml-5 rounded-md text-black px-3 focus:outline-0 font-mono'/>
                <div className='mr-5 ml-2'>
                    {
                        existePokemonInput
                        ?<img
                            onClick={() => {
                                // dispatch(obtenerPokemonId(idPokemonInput))
                                navigate( `/pokemon/${idPokemonInput}`)

                            }}
                            className='h-9 cursor-pointer' src={PokeballMove}
                        />
                        :<img className='h-9' src={PokeballMoveoff}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar