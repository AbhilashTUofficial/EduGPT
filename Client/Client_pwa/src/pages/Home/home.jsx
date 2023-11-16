import React from "react";
import Testbox from "../../components/Testbox/Testbox";
import Classbox from "../../components/classbox/classbox";
import teach from "../../assets/teach.jpg"

export default function home() {
  return (
    <div className="">
      <h1 className="font-bold text-2xl text-teal-500 ml-3 mt-2">
        Recent Tests
      </h1>
      <div className="flex w-[1000px] flex-wrap justify-between  pl-[12rem] pr-4 overflow-x-scroll h-80">
        <Testbox />
        <Testbox />
        <Testbox />
        <Testbox />
        <Testbox />
      </div>

      <h1 className="font-bold text-2xl text-teal-500 ml-3 mt-4">Classes</h1>
      <div className="flex flex-row justify-between  pl-[12rem] pr-4 overflow-x-auto h-80">
        <Classbox />
        <Classbox />
      </div>
      <img src={teach}  alt='teach'/>
    </div>
  );
}
