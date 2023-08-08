import Logo from '../icons/Logo/logo';
import React, {useState} from 'react';
import Selector from '../icons/Selector/selector';
import MenueItem from '../MenuItem/menueItem'
import Ic_D0 from '../icons/SideBarIcons/ic_D0';
import Ic_D1 from '../icons/SideBarIcons/ic_D1';
import Ic_D2 from '../icons/SideBarIcons/ic_D2';
import Ic_D3 from '../icons/SideBarIcons/ic_D3';
import Ic_D4 from '../icons/SideBarIcons/ic_D4';
import Ic_D5 from '../icons/SideBarIcons/ic_D5';
import Ic_D6 from '../icons/SideBarIcons/ic_D6';
import Ic_D7 from '../icons/SideBarIcons/ic_D7';


const SideBar = () => {
  const [items , setItems]=useState([{menue:"Overview" , icon:Ic_D0 ,click:false},{menue:"Contacts" , icon:Ic_D1 ,click:false},{menue:"Companies" , icon:Ic_D2 ,click:false}
    ,{menue:"Deals" , icon:Ic_D3 ,click:false},{menue:"Document" , icon:Ic_D4 ,click:true},{menue:"Message" , icon:Ic_D5 ,click:false}
    ,{menue:"Calendar" , icon:Ic_D6 ,click:false},{menue:"Report" , icon:Ic_D7 ,click:false}])
  const itemListClass="w-full flex flex-row items-center content-center  py-3.5 ";

  return(
    <div className={"w-full h-full"}>
      <div className={"pl-[1.563rem] pr-[7.063rem] pt-[1.325rem] pb-[1.125rem] bg-white border-b-2 border-color0"}>
        <Logo/>
      </div>
      <div className={"flex flex-col w-full mt-10 gap-[0.938rem]"}>
        {items.map((item, index) => (
          <MenueItem  text={item.menue} icon={item.icon} key={index} click={item.click}/>
        ))}
      </div>
    </div>
  )
}
export default SideBar;
