import React from "react";
import "../index.css";
export default function FlexBasis(){
    return(
        <React.Fragment>
            <div className="max-w-[1400px] m-auto flex flex-row text-center">
                <div className="basis-1/4 bg-lime-400"><p>01</p></div>
                <div className="basis-1/4 bg-yellow-500"><p>02</p></div>
                <div className="basis-1/2 bg-teal-400"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}