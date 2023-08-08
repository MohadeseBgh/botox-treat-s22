import ToolBar from '../../components/toolBar'
import SideBar from '../../components/sideBar'
import Buttons from '../../components/buttons'
import Title from '../../components/Title/title'
import RightSide from "@/components/RightSide";
import Index from "@/components/CompanyList";
const HomePage = () => {
  return (
    <div className={"bg-white h-screen w-screen flex flex-row "}>
      <div className={"w-full md:basis-2/12 h-full hidden md:block bg-white"}>
        <SideBar/>
      </div>
      <div className={"flex flex-col w-full md:border-l-2 md:border-color0 md:basis-10/12"}>
        <div className={"basis-1/12"}>
          <ToolBar/>
        </div>
        <div className={"bg-white md:pt-[1.875rem] md:pb-10 border-t-2 border-color0 basis-1/12"}>
          <Buttons/>
        </div>
        <div className={"flex flex-row h-full basis-10/12"}>
          <div className={"h-full w-full hidden md:block md:basis-3/12 "}>
            <RightSide/>
          </div>
          <div className={" flex flex-col w-full basis-9/12"}>
            <div className={"basis-1/12 w-full"}>
              <Title/>
            </div>
            <div className={"basis-11/12"}>
              <Index/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
