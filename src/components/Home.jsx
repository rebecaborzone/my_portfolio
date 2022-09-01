import React from 'react';
import '../styles/home.css';
import '../styles/background.css'

function Home() {
    return (
    <>
    <div class="background">
        <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
        <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
        <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
        <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
    </div>

        <div className="container">
            <div className="text-left">
                <h1 className="title">Soy Rebeca</h1>
                <h1 className="title bienvenido">Bienvenido a mi portfolio</h1>
                <img className="fullStackHorBanner" src='https://i.ibb.co/jvRsgFh/fullhorizontalbanner.png' alt="fullstack"/>
                <div className="main">
                    <button className="btn">PROYECTOS</button>
                </div>
            </div>
            <div>
            <img className="fullStackBanner" src='https://i.ibb.co/gyc6Bfh/fullstack.png' alt="fullstack"/>
            

            </div>
        </div>
        </>
    )
}

export default Home;