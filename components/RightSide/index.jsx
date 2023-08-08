import StarValue from "@/components/StarValue";
import React from "react";
import Filter from "@/components/Filter/";

const RightSide = () => {
    return (
        <div className={" flex flex-col w-full h-full "}>
            <div className={"flex"}>
                <Filter/>
            </div>
            <div className={"flex"}>
                <StarValue/>
            </div>
        </div>
    )
}
export default RightSide;
