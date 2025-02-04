import { useState } from "react";
import Js from '/src/assets/Javascript.png'
import Cpp from '/src/assets/c++.png'
import Css from '/src/assets/Css.png'
import Html from '/src/assets/Html.png';
import Bootstrap from '/src/assets/Bootstrap.png';

const Education=()=>{

    const images=[
        Cpp,Html,Css,Js,Bootstrap,
    ];

    const [currentIndex,setCurrentIndex]=useState(0);

    const handlePrev=()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + images.lenght) % images.length);
    };

    const handleNext=()=>{
        setCurrentIndex((nextIndex)=>(nextIndex + 1 -images.length) % images.length);
    };

    return(
        <>
        <div className="educationContainer flex flex-col">

        <section className="college flex flex-row ">
            <h2>College</h2>
            <p>B.C.A</p>
            <p>CGPA : <span>8</span></p>
        </section>

        <section className="certifications flex flex-row">
        <h2>Certifications</h2>
        <div className="slider">
        <button className="prev" onClick={handlePrev}> p </button>
        <img src={images[currentIndex]} alt="Certificate" />
        <button className="next" onClick={handleNext}>n</button>
        </div>
        </section>
        </div>
        </>
    )
}

export default Education