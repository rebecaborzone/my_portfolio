import React from "react"
import Carousel from "react-grid-carousel"
import AV from "../json/av.json"

function Carrousel() {
    return (
    <div className='container bg_princ carrousel'>
        <Carousel mobileBreakpoint={300} cols={2} rows={2} gap={10} autoplay={2000} loop
            responsiveLayout={[
            {
                breakpoint:760,
                cols: 1,
                rows: 4,
                gap: 10,
                loop: true,
                autoplay: 2000
            }
        ]}>            
            
        {AV.map(av=>(
            <Carousel.Item key={av.id}>
                <img className= "img-carrousel" style={{width:'80px'}} src={av.image} alt="av"/>
                <h4 className="epigrafe">{av.name}</h4>
                <p className="epigrafe">{av.tecnology}</p>
            </Carousel.Item>
        ))
        }
        </Carousel>
    </div>
    )
}
export default Carrousel