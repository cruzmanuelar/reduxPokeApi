import { capitalizarNombre } from "../../funciones/EspecieColorPokemon";
import { OBTENER_DATA_POKEMON_ID, OBTENER_DATA_POKEMON, OBTENER_DATA_PRINCIPAL_POKEMON_ID } from "../constants";

export const filtrarPokemonTipo = () => (dispatch, getState) => {
    console.log('al dispatch')
}

const obtenerPokemon = ( id ) => {

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => data)
}

export const obtenerPokemones = (inicio) => async (dispatch, getState) => {

    let arrayPokemones = [];
    
    for(let index = inicio; index < inicio + 20; index ++){

        let data = await obtenerPokemon(index);
        arrayPokemones.push(data);
    }

    console.log(arrayPokemones)

    dispatch({
        type: OBTENER_DATA_POKEMON,
        payload: arrayPokemones
    })

}


export const obtenerPokemonId = (id) => async (dispatch, getState) => {

    let dataPokemon = await obtenerPokemon(id);

    const imagen_home = dataPokemon.sprites.other.home.front_default;
    const imagen_home_shiny = dataPokemon.sprites.other.home.front_shiny;
    const imagen_dream_world = dataPokemon.sprites.other.dream_world.front_default;

    dataPokemon = await {...dataPokemon, imagen_home, imagen_home_shiny, imagen_dream_world}
    
    const dataPokemonPrincipal = {
        nombre  : capitalizarNombre(dataPokemon.name),
        tipo    : capitalizarNombre(dataPokemon.types[0].type.name)
    }

    dispatch({
        type : OBTENER_DATA_PRINCIPAL_POKEMON_ID,
        payload: dataPokemonPrincipal
    })
    dispatch({
        type: OBTENER_DATA_POKEMON_ID,
        payload: dataPokemon
    })

}