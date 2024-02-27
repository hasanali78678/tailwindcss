import React from "react";
export default function Grow(){
    return(
        <React.Fragment>
            <div className="flex text-center">
                <div className="flex-none w-[200px] bg-lime-400"><p>01</p></div>
                <div className="grow hover:grow-0 h-[60px] bg-orange-600 "><p>02</p></div>
                <div className="w-[200px] bg-lime-500"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}