import React from 'react';

function Card({proyect}) {
    return (
        <>
        <div style={{display:'flex', width:'350px', height: '50vh', justifyContent: 'center', marginLeft: '-2rem', backgroundColor:'orange'}}>
            <div className="card">
                <div className="card__content">
                    <div className="card__date">
                        <p>{proyect.name}</p>
                        <p>{proyect.tecnology}</p>
                    </div>
                    <div className="card__info" style={{ backgroundImage:`url(${proyect.image})`}}>
                        <h3>Ir allí</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;