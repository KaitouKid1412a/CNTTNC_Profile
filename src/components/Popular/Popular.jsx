import React from "react";
import Anesthesiologists from "../Anesthesiologists/Anesthesiologists";
import Surgeons from "../Anesthesiologists/Surgeons";
import ObstetriciansGynecologists from "../Anesthesiologists/ObstetriciansGynecologists";
import Orthodontists from "../Anesthesiologists/Orthodontists";

export default function Popular() {
  return (
    <div className="canchinh">
    <div className="w-1320 mx-auto">
    <h1 className="font-bold text-3xl my-3">Most Popular Vacancies</h1>
      <div className="">
        <div className="flex  justify-between mt-5">
          <Anesthesiologists />
          <Surgeons />
          <ObstetriciansGynecologists />
          <Orthodontists />
        </div>
        <div className="flex  justify-between mt-5">
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
        </div>
        <div className="flex  justify-between mt-5">
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
          <Anesthesiologists />
        </div>
        
        
      </div>
    </div>
    </div>
  );
}
