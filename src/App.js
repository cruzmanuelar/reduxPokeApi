import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContenedorTarjeta from './componentes/ContenedorTarjeta';
import Navbar from './componentes/Navbar';
import './estilos/App.css';
import { obtenerPokemones } from './redux/actions/PokemonAction';

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(obtenerPokemones(20));

	},[]);

    return (
		<div>
			<Navbar/>

			<ContenedorTarjeta/>
		</div>
    );
}

export default App;
