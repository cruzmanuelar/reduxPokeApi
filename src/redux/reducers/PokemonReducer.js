import { 
    FILTRAR_POKEMON_TIPO,
    OBTENER_DATA_POKEMON,
    OBTENER_DATA_POKEMON_ID,
    OBTENER_DATA_PRINCIPAL_POKEMON_ID,
    EXISTE_POKEMON_INPUT
} from "../constants";

const initialState = {

    dataPokemon         : [],
    pokemonId           : [],
    dataPrincipalId     : {},
    existePokemonInput  : false,
    idPokemonInput      : '',
};

export const PokemonReducer = ( state = initialState, action) => {

    switch(action.type){
        
        case FILTRAR_POKEMON_TIPO:
            
            return {
                ...state,
                dataPokemon: action.payload
            }
    
        case OBTENER_DATA_POKEMON:
            return {
                ...state,
                dataPokemon:action.payload
            }

        case OBTENER_DATA_POKEMON_ID:
            return {
                ...state,
                pokemonId:action.payload
            }

        case OBTENER_DATA_PRINCIPAL_POKEMON_ID:
            return {
                ...state,
                dataPrincipalId: action.payload
            }
        case EXISTE_POKEMON_INPUT:
            return {
                ...state,
                existePokemonInput  : action.payload.existe,
                idPokemonInput      : action.payload.id
            }

        default:
            return state            
    }

}