import CheckBox from "@/components/CheckBox";
import Rating from "@/components/Rating";
import {useState} from "react";

const StarValue = () => {
 
    return (
        <div className={"flex flex-col gap-1 ml-3 "}>
            <h2 className={"font-medium"}>Star Value</h2>
            {Array(5).fill(null).map((item, index) => {
                return (
                    <>
                        <div className={"flex flex-row gap-4 items-center"}>
                            <CheckBox/>
                            <Rating rateNumber={5 - index}/>
                            <p>{5 - index} star</p>
                        </div>
                    </>
                )
            })}
       
        </div>
    );
};
export default StarValue;
