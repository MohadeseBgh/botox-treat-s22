import React, { useState } from "react";
import Company from "../Company";
const CompanyList = () => {
  const List =[
    { name: "Dropbox", site: "dropbox.com", owner: "Donat Twerski", score: "1,010" },
    { name: "Yahoo", site: "yahoo.com", owner: "Bonelwa N", score: "10,302" },
    { name: "MailChimp. Inc", site: "mailchimp.com", owner: "DonatTwerski", score: "3,222" },
  ] 

  return (
    <div className=" flex md:w-[55.438rem] w-[18.75rem] md:h-[51.063rem] h-[57rem]  flex-col ">
      
      {List.map((user, key) => (
        <Company
          name={user.name}
          site={user.site}
          owner={user.owner}
          score={user.score}
          key={key}
        />
      ))}
    </div>
  );
};

export default CompanyList;
