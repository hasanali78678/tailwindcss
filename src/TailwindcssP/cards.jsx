import React from "react";
import "../index.css"
import ProductImg from "./img"
export default function card(){
    return(
        <React.Fragment>
            <div className="max-w-[1400px] m-auto">
                <div className="max-w-100 pl-10 bg-lime-300">
                    <h1 className="py-4 m-auto">logo</h1>
                </div> 
                <div className="max-w-[1400px] m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-3 ">
                    <div className="max-w-[300px] border m-auto my-2 border-black">
                        <div className=" shadow-lg">
                            <ProductImg />
                            <div className="border-t px-1">
                                <p>PS5 SONY Controller</p>
                                <p>Rs: 4000</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[300px] border m-auto my-2 border-black">
                        <div className=" shadow-lg">
                            <ProductImg />
                            <div className="border-t px-1">
                                <p>PS5 SONY Controller</p>
                                <p>Rs: 4000</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[300px] border m-auto my-2 border-black">
                        <div className=" shadow-lg">
                            <ProductImg />
                            <div className="border-t px-1">
                                <p>PS5 SONY Controller</p>
                                <p>Rs: 4000</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[300px] border m-auto my-2 border-black ">
                        <div className="shadow-lg">
                            <ProductImg />
                            <div className="border-t px-1">
                                <p>PS5 SONY Controller</p>
                                <p>Rs: 4000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}