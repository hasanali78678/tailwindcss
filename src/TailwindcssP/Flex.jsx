import React from "react";
export default function Flex(){
    return(
        <React.Fragment>
            <div className="flex text-center">
                <div className="flex-none w-14 h-14 bg-orange-400"><p>01</p></div>
                <div className="flex-initial w-[200px] bg-lime-400 mx-1"><p>02</p></div>
                <div className="flex-initial w-[400px] bg-pink-400"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}