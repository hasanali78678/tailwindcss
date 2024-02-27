import React from "react";
export default function Shrink (){
    return(
        <React.Fragment>
            <div className="flex text-center">
                <div className="flex-none w-[200px] bg-lime-600 lg:hidden sm:block"><p>01</p></div>
                <div className="shrink  w-[200px] bg-lime-700"><p>02</p></div>
                <div className="bg-lime-400  w-[200px]"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}