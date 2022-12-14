import React from "react";
import me from "../img/me.jpeg"

export const MyInfo = () => {
    return (
        <section className="info">
          <div className="dive">
            <div className="img">
                <img src={me} />
            </div>
            <div className="info-text">
                <h1> Jhacoby K. Delgado </h1>
                <h4> Front-end Developer </h4>
                <a href="#">jkdelgado.com</a>
            </div>
            <div className="buttons">
                <button className="white">
                    <p> <i className="fa-solid fa-envelope"></i> Email</p>
                </button>
                <button className="blue">                                        
                    <p> <i className="fa-brands fa-linkedin"></i> LinkedIn</p>
                </button>                
            </div>
          </div>  
        </section>
    )
}