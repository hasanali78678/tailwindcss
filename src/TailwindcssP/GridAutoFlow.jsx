import React from "react";
export default function GridAutoFlow(){
    return(
        <React.Fragment>
            <div className="max-w-[1200px] grid grid-flow-row-dense grid-cols-3  hover:grid-rows-4  text-center m-auto border">
                <div className=" col-span-2 bg-lime-500 mt-1 mx-1"><p>01</p></div>
                <div className="col-span-2  bg-lime-500 mt-1 mx-1"><p>02</p></div>
                <div className=" bg-lime-500 mt-1 mx-1"><p>03</p></div>
                <div className="  bg-lime-500 mt-1 mx-1"><p>04</p></div>
                <div className="  bg-lime-500 mt-1 mx-1"><p>05</p></div> 
                <div className="  bg-lime-500 mt-1 mx-1"><p>05</p></div>   
            </div>
        </React.Fragment>
    );
}