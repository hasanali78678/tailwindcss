import React from "react";
import "../index.css"
export default function FlexDriection(){
    return(
        <React.Fragment>
            <div className="max-w-[200px] flex flex-row text-center m-auto">
                <div className="bg-lime-400 w-20"><p>01</p></div>
                <div className="bg-lime-600 w-20"><p>02</p></div>
                <div className="bg-lime-900 w-20"><p>03</p></div>
            </div>
            <div className="max-w-[200px] flex flex-row-reverse text-center m-auto mt-3">
                <div className="bg-lime-400 w-20"><p>01</p></div>
                <div className="bg-lime-600 w-20"><p>02</p></div>
                <div className="bg-lime-900 w-20"><p>03</p></div>
            </div>
            <div className="max-w-[200px] flex flex-col text-center m-auto mt-3">
                <div className="bg-lime-400 w-20 my-1"><p>01</p></div>
                <div className="bg-lime-600 w-20 my-1"><p>02</p></div>
                <div className="bg-lime-900 w-20 my-1"><p>03</p></div>
            </div>
            <div className="max-w-[200px] flex flex-col-reverse hover:flex-row text-center m-auto mt-3">
                <div className="bg-lime-400 w-20 my-1"><p>01</p></div>
                <div className="bg-lime-600 w-20 my-1"><p>02</p></div>
                <div className="bg-lime-900 w-20 my-1"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}