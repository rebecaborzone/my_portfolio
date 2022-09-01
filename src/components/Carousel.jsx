import Slider from "react-slick";
import Carousel from "react-grid-carousel"
import Card from './Card'
import Proyects from "../json/proyects.json"

function Carousell() {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 0
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
    // <div style={{ display: 'flex', width: '100vw', justifyContent:'center',}}>
    //   <Slider style={{ backgroundColor: 'red', height: "90%", width: "85%",}} {...settings}>
    //     {Proyects.map(proyect=>(
    //       <Card proyect = {proyect} />
    //       ))
    //     }
    //   </Slider>
    // </div>
    <div className='container bg_princ carrousel'>
        <Carousel mobileBreakpoint={300} cols={1} rows={2} gap={10} autoplay={2000} loop
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
            
            {Proyects.map(proyect=>(
          <Carousel.Item key={proyect.id}>
          <Card proyect = {proyect} />
          </Carousel.Item>
          ))
        }
            
        
        </Carousel>
    </div>
  )
}
  
export default Carousell;