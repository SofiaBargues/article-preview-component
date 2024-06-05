// import { useState } from "react";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import michelle from "./assets/avatar-michelle.jpg";
import pinterest from "./assets/icon-pinterest.svg";
import facebook from "./assets/icon-facebook.svg";
import drawers from "./assets/drawers.jpg";
import twitter from "./assets/icon-twitter.svg";
import share from "./assets/icon-share.svg";
import sharewithe from "./assets/icon-share-withe.svg";

function Initial() {
  return (
    <div className="flex flex-row items-center">
      <img
        alt="michelle"
        src={michelle}
        className="h-[35px] w-[35px] md:h-[25px] md:w-[25px] rounded-full mr-4"
      ></img>
      <div className="flex-col flex">
        <div className="text-xs md:text-[10px] font-semibold text-slate-700">
          Michelle Appleton
        </div>
        <div className="text-xs md:text-[10px] text-slate-400">28 Jun 2020</div>
      </div>
    </div>
  );
}
function Share() {
  return (
    <div className="flex flex-row gap-5">
      <div className=" text-sm  text-slate-400">S H A R E</div>
      <img alt="facebook" src={facebook} className="h-[20px]  "></img>
      <img alt="twitter" src={twitter} className="h-[20px]"></img>
      <img alt="pinterest" src={pinterest} className="h-[20px] "></img>
      <div className="flex-col flex"></div>
    </div>
  );
}

function App() {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="bg-[#edf2f8] h-screen flex justify-ceter ">
      <div className="bg-white h-[520px] w-[327px] m-auto rounded-md flex flex-col justify-between md:flex md:flex-row md:h-[186px] md:w-[484px]">
        <div>
          <img
            alt="drawers"
            src={drawers}
            className="h-[195px] w-[327px] md:h-[186px] md:w-[484px] object-cover rounded-t-md md:rounded-tr-none md:rounded-l-md"
          ></img>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="p-8 md:p-0 md:mx-[20px] mt-[0px] flex flex-col md:gap-1 gap-3">
            <h1 className="text-[#4e5359]  md:text-sm font-semibold md:py-2">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-[#73767a] text-sm md:text-[8px] md:text-balance md:leading-3 md:my-0 ">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I've got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div
            className={
              "h-20 md:h-10 md:px-5 px-8 items-center flex rounded-b-lg justify-between md:pb-6 md:mt-0 " +
              (showMore ? "bg-white " : " bg-gray-600")
            }
          >
            {showMore ? <Initial /> : <Share />}
            <button
              onClick={handleMoreClick}
              className={
                "rounded-full h-[35px]  md:h-[25px] flex justify-end cursor-pointer " +
                (showMore ? " bg-[#f0f5fd]" : "bg-[#6e8099] ")
              }
            >
              <img
                alt="share"
                src={showMore ? share : sharewithe}
                className="h-[35px] w-[35px] md:h-[25px] md:w-[25px] p-2.5 md:p-2"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
