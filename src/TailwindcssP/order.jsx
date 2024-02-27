import React from "react";
export default function Order (){
    return(
        <React.Fragment>
            <div className="flex text-center">
                <div className="w-[200px] bg-lime-600 lg:order-last sm:order-first"><p>01</p></div>
                <div className="w-[200px] bg-lime-700"><p>02</p></div>
                <div className="bg-lime-400 w-[200px]"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}