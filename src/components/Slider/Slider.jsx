import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';
import { useState } from "react";
import { sliderItems } from "../../data";
import { TypeAnimation } from 'react-type-animation';
import './Slider.css'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slide-container">
      <div className="arrow left-arrow" onClick={() => handleClick("left")}>
        <TiArrowLeftOutline style={{ color: "white" }} />
      </div>
      <div className="slide-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {sliderItems.map((item) => (
          <div className="slide" key={item.id} >
            <div className="slide-imgContainer">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="infoContainer">
            
              <TypeAnimation
                className="lettermove"                
                sequence={[
                  `${item.title}`,
                  2000,
                  'Get Discount',
                  2000,
                ]}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={Infinity}/>

              <h1 className="title"></h1>
              <p className="desc">{item.desc}</p>
              <button className="slide-button" >SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right-arrow" onClick={() => handleClick("right")} >
        <TiArrowRightOutline style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Slider;
