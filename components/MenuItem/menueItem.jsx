import Selector from '../icons/Selector/selector';
import {useState} from "react";
import Ic_D0 from '../icons/SideBarIcons/ic_D0';

const MenueItem = (props) => {
    const itemListClass="w-full flex flex-row items-center content-center  py-3.5 ";
  return(
    <div>
      <div className={`${props.click === true ? "bg-color1" : "bg-white"} ${itemListClass}`}>
        {props.click && <div>
          <Selector/>
        </div>}
        <div className={`${props.click === true ? "px-4" : "px-5"}`}>
          {props.click && <props.icon color={"#1C1C24"}/>}
          {!props.click && <props.icon color={"#92929D"}/>}
        </div>
        <div className={"text-sm"}>
          {props.text}
        </div>
      </div>
    </div>
  )
}
export default MenueItem;
