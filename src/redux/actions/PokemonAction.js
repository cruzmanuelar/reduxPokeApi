import { FILTRAR_POKEMON_TIPO, OBTENER_DATA_POKEMON } from "../constants";



export const filtrarPokemonTipo = () => (dispatch, getState) => {
    console.log('al dispatch')
}


export const obtenerPokemones = (inicio) => async (dispatch, getState) => {

    const obtenerPokemon = ( id ) => {

        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => data)
    }

    let arrayPokemones = [];
    
    for(let index = inicio; index < inicio + 20; index ++){

        let data = await obtenerPokemon(index);
        arrayPokemones.push(data);
    }

    dispatch({
        type: OBTENER_DATA_POKEMON,
        payload: arrayPokemones
    })

}