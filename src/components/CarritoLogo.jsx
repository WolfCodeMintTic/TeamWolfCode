import React from 'react'
import carrito from 'media/carrito.png'
const CarritoLogo = () => {
    return (
        <div>
            <h2 className="text-center text-blue-400 text-4xl font-serif">WolfCode</h2>
            <img className='mx-auto h-40 w-auto' src={carrito} alt='Workflow' />
        </div>
    )
}

export default CarritoLogo