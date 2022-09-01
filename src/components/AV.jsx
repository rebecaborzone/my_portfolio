import React from 'react';
import Carrousel from './Carrousel'

function AV() {
    return (
        <>
            <div class="background">
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
            </div>
            <div style={{display: 'flex', flexDirection:'column', height:'70vh', backgroundColor:'#125B50', boxShadow: 'inset 0 0 0 4px #ef476f, inset 0 0 0 8px #ffd166, inset 0 0 0 12px #FAF5E4 '}}>
                <h1 style={{fontFamily: 'BarbraRegular', fontSize: 70, textAlign:'center', color:'#FAF5E4', margin: '1.5rem 0rem -1rem 0rem'}}>Proyectos</h1>
                <Carrousel/>
            </div>
        </>
    )
}

export default AV;