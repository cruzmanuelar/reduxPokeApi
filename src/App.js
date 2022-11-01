import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ContenedorTarjeta from './componentes/ContenedorTarjeta';
import Navbar from './componentes/Navbar';
import './estilos/App.css';
import { obtenerPokemones } from './redux/actions/PokemonAction';

function App() {

	const dispatch = useDispatch();

	const [ listaPokemon, setListaPokemon ] = useState(20)

	const siguientePagina = () => {
		setListaPokemon(listaPokemon + 20)
	}

	const anteriorPagina = () => {
		setListaPokemon(listaPokemon - 20)
	}

	useEffect(() => {
		dispatch(obtenerPokemones(listaPokemon));
	},[]);

    return (
		<div>
			<Navbar/>
			<ContenedorTarjeta siguientePagina={siguientePagina} anteriorPagina={anteriorPagina} listaPokemon={listaPokemon}/>
		</div>
    );
}

export default App;
