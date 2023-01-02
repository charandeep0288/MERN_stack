import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set( // ... spread operator
    Menu.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];

const Resturant = () => {
  // UseState Hooks(should be used as a first line in the function) -> use it to manage data
  const [menuData, setMenuData] = useState(Menu); // OR React.useState(Menu);
  //   console.log(menuData);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currEle) => {
      return currEle.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
