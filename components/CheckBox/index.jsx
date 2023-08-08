import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {CheckIcon} from "@radix-ui/react-icons";


const CheckBox = () => {
    return (
        <div>
            <Checkbox.Root
                className="shadow-blackA7 hover:bg-violet3 flex h-[14px] w-[14px] appearance-none items-center justify-center rounded-[4px] border-black border-2 outline-none hover:bg-black hover:text-white"
                defaultChecked
                id="c1"
            >
                <Checkbox.Indicator className="text-violet11 ">
                    <CheckIcon/>
                </Checkbox.Indicator>
            </Checkbox.Root>
        </div>
    )
}
export default CheckBox;
