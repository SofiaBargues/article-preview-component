// import { useState } from "react";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import michelle from "./assets/avatar-michelle.jpg";
import pinterest from "./assets/icon-pinterest.svg";
import facebook from "./assets/icon-facebook.svg";
import drawers from "./assets/drawers.jpg";
import twitter from "./assets/icon-twitter.svg";
import share from "./assets/icon-share.svg";

function Initial() {
  return (
    <div className="flex flex-row">
      <img
        alt="michelle"
        src={michelle}
        className="h-[35px] w-[35px]  rounded-full mr-4"
      ></img>
      <div className="flex-col flex">
        <div className="text-xs font-semibold  text-slate-700">
          Michelle Appleton
        </div>
        <div className="text-xs text-slate-400"> 28 Jun 2020</div>
      </div>
    </div>
  );
}
function Share() {
  return (
    <div className="flex flex-row gap-5">
      <div className=" text-sm  text-slate-400">S H A R E</div>
      <img alt="pinterest" src={pinterest} className="h-[20px] "></img>
      <img alt="facebook" src={facebook} className="h-[20px]  "></img>
      <img alt="twitter" src={twitter} className="h-[20px]"></img>
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
    <div
      className="bg-[#edf2f8] h-screen flex justify-ceter 
    "
    >
      <div className="bg-white  h-[520px] w-[327px] m-auto rounded-md ">
        <img
          alt="drawers"
          src={drawers}
          className="h-[195px]  w-[327px] object-cover rounded-t-md"
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
        </div>
        <div
          className={
            "h-20 flex rounded-b-lg justify-between p-6 mt-10 " +
            (showMore ? "bg-white " : " bg-gray-600")
          }
        >
          {showMore ? <Initial /> : <Share />}
          <button
            onClick={handleMoreClick}
            className="rounded-full h-[35px] flex justify-end bg-[#f0f5fd] cursor-pointer"
          >
            <img
              alt="share"
              src={share}
              className="h-[35px] w-[35px] p-2"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
