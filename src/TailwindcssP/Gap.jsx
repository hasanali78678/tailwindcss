import React from "react";
export default function Gap (){
    return(
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-center hover:gap-0">
            <div className="bg-lime-500 mt-1 mx-1">01</div>
            <div className="bg-lime-500 mt-1 mx-1">02</div>
            <div className="bg-lime-500 mt-1 mx-1">03</div>
            <div className="bg-lime-500 mt-1 mx-1">04</div>
            <div className="bg-lime-500 mt-1 mx-1">05</div>
            <div className="bg-lime-500 mt-1 mx-1">06</div>
        </div>
    );
}