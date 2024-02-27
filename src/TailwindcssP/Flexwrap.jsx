import React from "react";
export default function FlexWrap(){
    return(
        <React.Fragment>
            <div  className="w-[1000px] flex flex-wrap m-auto hover:flex-col text-center mt-4 text-white">
                <div className="w-[500px] bg-slate-400"><p>01</p></div>
                <div className="w-[500px] bg-slate-500"><p>02</p></div>
                <div className="w-[500px] bg-slate-600"><p>03</p></div>
            </div>
            <div  className="w-[1000px] flex flex-wrap-reverse m-auto md:flex-wrap text-center mt-5 text-white">
                <div className="w-[500px] bg-slate-400"><p>01</p></div>
                <div className="w-[500px] bg-slate-500"><p>02</p></div>
                <div className="w-[500px] bg-slate-600"><p>03</p></div>
            </div>
            <div  className="w-[1000px] flex flex-nowrap sm:flex-wrap m-auto text-center mt-5 text-white">
                <div className="w-[500px] bg-slate-400"><p>01</p></div>
                <div className="w-[500px] bg-slate-500"><p>02</p></div>
                <div className="w-[500px] bg-slate-600"><p>03</p></div>
            </div>
        </React.Fragment>
    );
}