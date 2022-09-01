import React from 'react';
import '../styles/tecnologies.css'

function Tecnologies() {
    return (
        <>
            <div class="background">
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
                <div className="cube"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
                <div className="cube extraFlower"><img src='https://i.ibb.co/h2Rq2XF/margarita.png' alt='flower'/></div>
            </div>

            <div className='tecnologiesContainer'>
                <h1>Tecnologias</h1>
                <div className='tecFlowers'>
                    <img className='tecnology movement' src='https://i.ibb.co/VJm72T3/tecs1.png' alt="express"/>
                    <img className='tecnology movement2' src='https://i.ibb.co/tJ5fvDn/tecs2.png' alt="html"/>
                    <img className='tecnology' src='https://i.ibb.co/dr7HYBS/tecs3.png' alt="git"/>

                    <img className='tecnology' src='https://i.ibb.co/QYJJJRy/tecs4.png' alt="react"/>
                    <img className='tecnology movement2' src='https://i.ibb.co/BrKWx7P/tecs5.png' alt="redux"/>
                    <img className='tecnology' src='https://i.ibb.co/kM7fYgm/tecs6.png' alt="javascript"/>

                    <img className='tecnology' src='https://i.ibb.co/K7QyJVz/tecs7.png' alt="bootstrap"/>
                    <img className='tecnology' src='https://i.ibb.co/XCSQPVd/tecs8.png' alt="mongodb"/>
                    <img className='tecnology movement' src='https://i.ibb.co/ZMvg0Q9/tecs9.png' alt="css"/>

                    <img className='tecnology movement2' src='https://i.ibb.co/McB9vrq/tecs10.png' alt="mui"/>
                    <img className='tecnology movement' src='https://i.ibb.co/6D8dMXP/tecs11.png' alt="react native"/>
                    <img className='tecnology' src='https://i.ibb.co/Fgg5rHB/tecs12.png' alt="nodejs"/>
                </div>
            </div>
        </>
    )
}
export default Tecnologies;