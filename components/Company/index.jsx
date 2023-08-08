import React from "react";
import CheckBox from "@/components/CheckBox";
import MoreSvg from "@/components/icons/MoreSvg";
import StarRating from "@/components/StarRating";
import StarValue from "@/components/icons/FilledStar";
import More from "@/components/icons/More";

const Company = (props) => {
  return (
    <div>
      <div className=" bg-white  flex flex-row items-center md:h-[5.25rem] h-[4.25rem]  md:w-[55.438rem]  w-[18.75rem]  border-b-2 border-gray-200">
        <div className="flex  items-center justify-center basis-1/6 md:basis-1/12">
          <CheckBox />
        </div>
        <div className="flex items-center justify-center basis-1/6 md:basis-1/12">
          <img
            src="../Oval.png"/>
        </div>
        <div className="flex flex-col h-[2.5rem]  items-start  md:mr-[5.313rem] text-xs basis-2/6 md:basis-2/12">
          <h1 className="text-xs"> {props.name} </h1>
          <h2 className=" text-color2 text-xs"> {props.site} </h2>
        </div>
        <div className=" w-5 h-[1.188rem] md:flex items-center justify-center mr-[4.875rem] hidden md:block text-xs md:basis-2/12">
          <h2> {props.owner}</h2>
        </div>
        <div className="flex justify-center items-center mr-[5.375rem] hidden md:block text-xs md:basis-2/12">
          {props.score}
        </div>
        <div className="flex justify-center items-center flex-row basis-1/6 md:basis-3/12">
          <div className="mr-[0.938rem] hidden md:block ">
            <StarRating />
          </div>
          <div className=" block md:hidden">
            <StarValue />
          </div>
          <h2 className="mr-[3.563rem] text-xs">5,0</h2>
        </div>
        <div className=" hidden md:block md:basis-1/12">
          <MoreSvg />
        </div>
        <div className=" block md:hidden basis-1/6">
          <More />
        </div>
      </div>
      <div className="blck md:hidden flex flex-row h-[2.5rem] w-[18.75rem]  bg-white gap-[2rem]   ">
        <div className="flex flex-row gap-[0.5rem] ">
          <h3 className=" text-color2 mr-2 text-xs"> Owner </h3>
          <h3 className="text-xs">{props.owner}</h3>
        </div>
        <div className="flex flex-row gap-[0.5rem]">
          <h3 className=" text-color2 text-xs">Score Total</h3>
          <h3 className="text-xs">{props.score}</h3>
        </div>
      </div>
    </div>
  );
};
export default Company;
