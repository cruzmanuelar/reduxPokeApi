import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const HabilidadesPokemon = (props) => {
    
    const {
        dataPrincipalId
	} = useSelector(state => state.pokemonData);

    const data = {
        labels: ['Vida', 'Ataque', 'Defensa', 'Ataque especial', 'Defensa especial', 'Velocidad'],
        datasets: [
          {
            label: 'Puntos',
            data: [
                dataPrincipalId.vida,
                dataPrincipalId.ataque,
                dataPrincipalId.defensa,
                dataPrincipalId.ataqueEspecial,
                dataPrincipalId.defensaEspecial,
                dataPrincipalId.velocidad,
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
    };

    return (
        <Radar data={data}/>
    )
}

export default HabilidadesPokemon