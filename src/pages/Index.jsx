import React from 'react'
import detalle from 'media/detalle.svg'
import carrito from 'media/carrito.png'

const Index = () => {
    return (
        <>
            <div style={{ marginTop: "7%", marginLeft: "8%" }}>
                <h1 className="text-6xl text-white mb-2.5 font-serif">We're <span className="text-blue-400">WolfCode</span></h1>
                <h3 className="text-white tracking-wide font-normal">REACT DEVELOPER'S</h3>
                <div className="">
                    <p className="text-white leading-6 mt-3 mb-5 lg:flex-col">
                        WolfCode es un software que permita realizar el seguimiento<br /> de las ventas de un producto y/o servicio en una empresa y<br /> hacerles el correspondiente seguimiento.
                    </p>
                </div>
            </div>
            <div className="animacion hidden lg:flex">
                <img className="detalle" src={detalle} width="450" />
                <img src={carrito} className="carrito " />
            </div>
        </>
    )
}

export default Index
