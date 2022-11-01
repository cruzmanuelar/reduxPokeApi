import { 
    FILTRAR_POKEMON_TIPO,
    OBTENER_DATA_POKEMON,
    OBTENER_DATA_POKEMON_ID,
    OBTENER_DATA_PRINCIPAL_POKEMON_ID
} from "../constants";

const initialState = {

    dataPokemon     : [],
    pokemonId       : [],
    dataPrincipalId : {},
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

        default:
            return state            
    }

}