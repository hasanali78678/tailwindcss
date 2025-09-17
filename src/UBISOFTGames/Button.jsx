import React from 'react';
export default function btn(props) {
  return (
    <React.Fragment>
      <button className={props.className}>{props.title}</button>
    </React.Fragment>
  );
}

// <div className="flex justify-between items-center w-[500px] h-[100px]  font-medium mt-14">
// <button className="w-[230px]  rounded-full text-[15px] h-[50px] text-white bg-sky-600 ">WHACT TRAILER</button>
// <button className="w-[230px] rounded-full text-[15px] h-[50px] text-white bg-sky-600">BUY NOW</button>
// </div>
