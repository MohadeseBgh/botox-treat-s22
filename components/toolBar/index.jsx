import Ic_Search from '../icons/Ic_Search/ic_Search'
import Notification from '../icons/Notification/notification'
import Ic_Chat from '../icons/Ic_Chat/ic_Chat'
import DropDown from '../icons/DropDown/dropDown'
import Ic_Menue from '../icons/Ic_Menu/ic_Menue'
const ToolBar = () => {

  return (
    <div className={"flex flex-row h-[4.375rem] bg-white justify-between gap-px"}>

      <div className={"flex flex-row content-center justify-center items-center ml-3.5 md:ml-[1.936rem] md:gap-[0.625rem] gap-[1.188rem] bg-color1 md:bg-white my-3.5 md:my-0 ml-3.5 md:my-0 rounded-lg"}>
        <div className={" hidden md:block"}>
          <Ic_Search/>
        </div>
        <button className={" md:hidden block pl-3.5"}>
          <Ic_Menue/>
        </button>
        <input type="text" placeholder="Search..."
               className={"md:w-[7.938rem] w-[9.875rem] focus:outline-none placeholder:text-color2 placeholder:font-sans placeholder:text-sm bg-color1 md:bg-white"}/>
      </div>

      <div className={"flex flex-row content-center justify-center items-center"}>
        <div className={"text-base text-[#44444F] md:mr-[1.688rem] mr-[0.719rem]"}>
          +Add
        </div>

          <div className={"flex item-center justify-center relative md:mr-2.5 hidden md:block"}>
            <Notification w={"19"} h={"21"}/>
            <div className={"absolute -top-1.5 -right-1.5"}>
              <Ic_Chat w={"13"} h={"12"}/>
            </div>
          </div>
        <div className={"flex item-center justify-center relative mr-2.5 block md:hidden"}>
          <Notification w={"15"} h={"17.5"}/>
          <div className={"absolute -top-0 -right-0.5"}>
            <Ic_Chat w={"6"} h={"6"}/>
          </div>
        </div>

        <div className={"bg-color3 rounded-full h-6 w-6 md:h-8 md:w-8 md:ml-[1.563rem] mr-3.5"}>

        </div>
        <div className={"mr-[2.103rem] ml-[0.795rem] hidden md:block"}>
          <DropDown/>
        </div>
      </div>

    </div>
  )
}
export default ToolBar;
