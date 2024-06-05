// import { useState } from "react";
// import viteLogo from "/vite.svg";
import michelle from "./assets/avatar-michelle.jpg";
import drawers from "./assets/drawers.jpg";
import share from "./assets/icon-share.svg";

function App() {
  return (
    <div
      className="bg-[#edf2f8] h-screen flex justify-ceter 
    "
    >
      <div className="bg-white  h-[520px] w-[327px] m-auto rounded-md ">
        <img
          alt="drawers"
          src={drawers}
          className="h-[195px]  w-[327px] rounded-t-md"
        ></img>
        <div className="mx-[32px] mt-[0px] flex-col ">
          <h1 className="text-[#4e5359] font-semibold py-5">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[#73767a]  text-sm mt-">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex justify-between my-14">
            <div className="flex flex-row">
              <img
                alt="michelle"
                src={michelle}
                className="h-[35px] w-[35px] rounded-full mr-4"
              ></img>
              <div className="flex-col flex">
                <div className="text-xs font-semibold text-slate-700">
                  Michelle Appleton
                </div>
                <div className="text-xs text-slate-400"> 28 Jun 2020</div>
              </div>
            </div>
            <button className="rounded-full flex justify-end bg-[#f0f5fd] cursor-pointer">
              <img
                alt="share"
                src={share}
                className="h-[35px]  w-[35px]  rounded-t-md p-2"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
