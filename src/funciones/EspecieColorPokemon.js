
export const capitalizarNombre = (nombre) => {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

export const especieColorPokemon = ( tipo ) =>{

    switch(tipo){
        case 'normal':
            return 'bg-slate-400'
        
        case 'fighting':
            return 'bg-[#737373]'
            
        case 'flying':
            return 'bg-[#f7fee7]'

        case 'poison':
            return 'bg-[#8b5cf6]'

        case 'ground':
            return 'bg-[#b45309]'

        case 'rock':
            return 'bg-[#a3a3a3]'

        case 'bug':
            return 'bg-[#bef264]'

        case 'ghost':
            return 'bg-[#d4d4d4]'

        case 'steel':
            return 'bg-[#737373]'

        case 'fire':
            return 'bg-[#ef4444]'

        case 'water':
            return 'bg-[#0891b2]'

        case 'grass':
            return 'bg-[#22c55e]'

        case 'electric':
            return 'bg-[#fde047]'

        case 'psychic':
            return 'bg-[#a1a1aa]'

        case 'ice':
            return 'bg-[#5eead4]'

        case 'dragon':
            return 'bg-[#8b5cf6]'

        case 'dark':
            return 'bg-[#6b7280]'

        case 'fairy':
            return 'bg-[#a78bfa]'

        case 'unknown':
            return 'bg-[#d4d4d8]'

        case 'shadow':
            return 'bg-[#71717a]'
        
        default:
            return 'bg-slate-400'
    }
}