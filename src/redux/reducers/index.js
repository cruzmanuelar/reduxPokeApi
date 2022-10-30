import { combineReducers } from "redux";
import { PokemonReducer } from "./PokemonReducer";

const reducer = combineReducers({
    
    pokemonData: PokemonReducer
});

export default reducer;