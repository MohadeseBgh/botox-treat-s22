import Edit from '../icons/EditButton/editButton';
import FilterB from '../icons/FilterButton/filterButton';
import AddSvg from '../icons/AddSvg';

const Buttons = () => {
  return (
    <div
      className={"flex flex-row items-center md:mx-20 mx-4 my-4 md:my-0 md:gap-0.5"}>
      <div
        className={"md:text-2xl basis-5/12 font-sans text-[#171725] font-bold h-full "}>
        Companies List
      </div>
      <div
        className={"flex flex-row justify-end basis-7/12 md:gap-4 gap-5 h-full"}>
        <div
          className={"flex flex-row items-center justify-center gap-[0.688rem] md:bg-color4 rounded-lg md:px-[0.813rem] text-sm font-medium md:py-[0.563rem]"}>
          <FilterB/>
          <div className={"hidden md:block"}>
            Filter
          </div>

        </div>
        <div
          className={" flex flex-row items-center justify-center bg-color5 text-white rounded-lg md:pr-[0.813rem] text-sm font-medium"}>
          <div className={"text-2xl "}>
            <AddSvg/>
          </div>
          <div className={"hidden md:block"}>
            Add Company
          </div>

        </div>
        <div
          className={"flex items-center justify-center bg-color4 rounded-lg text-sm hidden md:block"}>
          <Edit/>
        </div>
      </div>

    </div>
  )
}
export default Buttons
