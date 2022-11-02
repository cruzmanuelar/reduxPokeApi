import { capitalizarNombre } from "../../funciones/EspecieColorPokemon";
import { OBTENER_DATA_POKEMON_ID, OBTENER_DATA_POKEMON, OBTENER_DATA_PRINCIPAL_POKEMON_ID, EXISTE_POKEMON_INPUT } from "../constants";

export const filtrarPokemonTipo = () => (dispatch, getState) => {
}

const obtenerPokemon = ( id ) => {


    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        if(response.status == 200){
            return response.json()
        }else{
            console.log('Sin resultados');
        }
    } )
    .then(data => data)
    .catch((error) => {
        console.log('Error en la petición');
    })
}

export const obtenerPokemonInput = (txtBuscar) => async (dispatch, getState) => {

    let dataPokemonInput = await obtenerPokemon(txtBuscar.toLowerCase());

    if(dataPokemonInput == undefined || dataPokemonInput.results){

        dispatch({
            type: EXISTE_POKEMON_INPUT,
            payload: {
                existe  : false,
                id      : null
            }
        })
    }else{        

        dispatch({
            type: EXISTE_POKEMON_INPUT,
            payload: {
                existe  : true,
                id      : dataPokemonInput.id
            }
        })
    }
}

export const obtenerPokemones = (inicio) => async (dispatch, getState) => {

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

export const obtenerPokemonId = (id) => async (dispatch, getState) => {


    let dataPokemon = await obtenerPokemon(id);

    const imagen_home = dataPokemon.sprites.other.home.front_default;
    const imagen_home_shiny = dataPokemon.sprites.other.home.front_shiny;
    const imagen_dream_world = dataPokemon.sprites.other.dream_world.front_default;
    const vida = dataPokemon.stats[0].base_stat;
    const ataque = dataPokemon.stats[1].base_stat;
    const defensa = dataPokemon.stats[2].base_stat;
    const ataqueEspecial = dataPokemon.stats[3].base_stat;
    const defensaEspecial = dataPokemon.stats[4].base_stat;
    const velocidad = dataPokemon.stats[4].base_stat;

    dataPokemon = await {...dataPokemon, imagen_home, imagen_home_shiny, imagen_dream_world}

    const dataPokemonPrincipal = {
        nombre  : capitalizarNombre(dataPokemon.name),
        tipo    : capitalizarNombre(dataPokemon.types[0].type.name),
        vida: vida,
        ataque: ataque,
        defensa: defensa,
        ataqueEspecial: ataqueEspecial,
        defensaEspecial: defensaEspecial,
        velocidad: velocidad,
    }

    dispatch({
        type : OBTENER_DATA_PRINCIPAL_POKEMON_ID,
        payload: dataPokemonPrincipal
    })

    dispatch({
        type: EXISTE_POKEMON_INPUT,
        payload: {
            existe  : false,
            id      : null
        }
    })

    dispatch({
        type: OBTENER_DATA_POKEMON_ID,
        payload: dataPokemon
    })

}