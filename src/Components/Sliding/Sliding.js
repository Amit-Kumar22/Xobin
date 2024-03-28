import React from 'react'
import "./Slinding.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Sliding({theme}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div>
      <div className="sliding">
          <Slider {...settings}>
          
            <div className="slide-box" box-theame={theme}>
              <div className="slide-img" >
                <img src={require("./Sliding-imge/image-5.png")} />
              </div>
              <div className="slide-details" >
              <div className='line'></div>
              <p className="name">Las Vegas Aviators</p>
              <p>Oct 15 SUN 4:30 PM</p>
              <p className='other'>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button className="btn">Take Flight Collection</button>
              </div>
            </div>

            <div className="slide-box" box-theame={theme}>
              <div className="slide-img">
                <img src={require("./Sliding-imge/image-6.png")} />
              </div>
              
              <div className="slide-details">
              <div className='line'></div>
              <p className="name">Las Vegas Aviators</p>
              <p>Oct 15 SUN 4:30 PM</p>
              <p className='other'>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button className="btn">Take Flight Collection</button>
              </div>
            </div>

            <div className="slide-box" box-theame={theme}>
              <div className="slide-img">
                <img src={require("./Sliding-imge/image-5.png")} />
              </div>
              <div className="slide-details">
              <div className='line'></div>
              <p className="name">Las Vegas Aviators</p>
              <p>Oct 15 SUN 4:30 PM</p>
              <p className='other'>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button className="btn">Take Flight Collection</button>
              </div>
            </div>

            <div className="slide-box" box-theame={theme}>
              <div className="slide-img">
                <img src={require("./Sliding-imge/image-6.png")} />
              </div>
              <div className="slide-details">
              <div className='line'></div>
              <p className="name">Las Vegas Aviators</p>
              <p>Oct 15 SUN 4:30 PM</p>
              <p className='other'>Las Vegas Ballpark, Las Vegas, Nevada</p>
              <button className="btn">Take Flight Collection</button>
              </div>
            </div>
            </Slider>
          </div>
    </div>
  )
}

export default Sliding
