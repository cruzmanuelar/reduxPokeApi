import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonInput } from '../redux/actions/PokemonAction';
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
        className='bg-red-600 text-center sm:text-left text-white py-3 flex flex-col sm:flex-row justify-between'
        >
            <a href={'/'} className='my-1 sm:my-0'>
                <span className='text-2xl m-3 cursor-pointer font-mono'>PokeApp</span>
            </a>

            <div className='flex justify-between'>
                <input
                    placeholder='ID o nombre'
                    onChange={(e) => dispatch(obtenerPokemonInput(e.target.value))}
                    className='ml-5 rounded-md text-black px-3 focus:outline-0 font-mono w-full'/>
                <div className='mr-5 ml-2'>
                    {
                        existePokemonInput
                        ?<img
                            onClick={() => {
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