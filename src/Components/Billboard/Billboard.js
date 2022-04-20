import React from 'react';
import "./bboard.scss";
import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {bboardData} from './bboard-data';


const Billboard = ()=>{
    const [currentSlide, setCurrentSside] = useState(0)
    return(
        <div className='slider'>
            <AiOutlineArrowLeft className="arrow prev"/>
            <AiOutlineArrowRight className="arrow next"/>
            {bboardData.map((slide, index) =>{
                return(
                    <div className={index === currentSlide ? "slide current" : "slide"}key={index}>
                            {index === currentSlide && (
                                <div>
                                <img src={slide.image} alt="slide" />
                                    <div className="content">
                                        <h2>{slide.heading}</h2>
                                        <p>{slide.desc}</p>
                                        <hr/>
                                        <button className='--btn --btn-primary'>Open</button>
                                    </div>
                                </div>
                            )}
                    </div>
                )
            })}
        </div>
    );

}

export default Billboard;