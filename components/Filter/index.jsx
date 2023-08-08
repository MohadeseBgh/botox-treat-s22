import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import CheckBox from "@/components/CheckBox";

const Filter = () => {
    return (
        <div className={"flex flex-col  ml-3"}>
            <Accordion.Root
                className="w-[15.875rem] rounded-md"
                type={"multiply"}
                defaultValue="item-1"
                collapsible={true}
            >
                <Accordion.Item value="item-1">
                    <Accordion.Header>
                        <Accordion.Trigger className={"font-medium"}>Company Type</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Agriculture</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>B2B</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Cosmetics</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Agency</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Services</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Real Estate</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Food & Beverages</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Entertainment</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Daily Used</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Games & Recreation</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Aeroplane</p></div>
                        <div className={"flex flex-row items-center my-2.5"}><CheckBox/> <p
                            className={" ml-4"}>Transportation</p></div>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

        </div>
    )
}
export default Filter;
