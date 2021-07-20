import React from "react";
import triangle from "../img/triangle.svg";

const Triangle = () => {
    return (
        <div className="triangle-container">
            <img className="triangle" src={ triangle } alt="triangle.svg" />
        </div>
    );
};

export default Triangle;