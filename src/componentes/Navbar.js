import React from 'react'

const Navbar = () => {
    return (
        <div
        className='bg-red-600 text-white py-3'
        >
            <a href={'/'}>
                <span className='text-2xl mx-3 cursor-pointer font-mono'>PokeApp</span>
            </a>
        </div>
    )
}

export default Navbar