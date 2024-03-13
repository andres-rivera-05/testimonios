import React from 'react'
import '../Styles/Testimonio.css'

function Testimonio() {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../Imagenes/photo-perfil.jpeg')} alt='avatar' />
            <div className="contenedor-texto-testimonio">
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p className='cargo-testimonio'>Ingeniera de sofware en Spotify</p>
                <p className='texto-testimonio'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis repudiandae eum ipsa alias accusantium corporis, animi quidem. Maiores, cum explicabo. Culpa nisi corporis perspiciatis ea possimus voluptatibus fugiat! Laborum.</p>
            </div>
        </div>
    )
}

export default Testimonio;

