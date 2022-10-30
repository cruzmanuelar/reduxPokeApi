import React from 'react'

const Tarjeta = ({pokemon}) => {

    const capitalizarNombre = (nombre) => {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }


    
    //type.grass

    return (
        <div className='p-2 bg-slate-400 flex flex-col rounded-md'>
            <div>
                <p className='text-2xl text-center'>{capitalizarNombre(pokemon.forms[0].name)}</p>
            </div>
            <div className='my-3 flex justify-center'>
                <img
                    className='h-28 hover:scale-105 ease-in duration-300'
                    src={pokemon.sprites.other.dream_world.front_default}
                />
            </div>
        </div>
    )   
}

export default Tarjeta