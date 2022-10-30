import { 
    FILTRAR_POKEMON_TIPO,
    OBTENER_DATA_POKEMON
} from "../constants";

const initialState = {

    dataPokemon: [],
    dataShiny: [4,5,7]
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

        default:
            return state            
    }

}