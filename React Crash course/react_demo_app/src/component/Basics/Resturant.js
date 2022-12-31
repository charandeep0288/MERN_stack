import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Resturant = () => {
  // UseState Hooks -> use it to manage data
  const [menuData, setMenuData] = useState(Menu); // OR React.useState(Menu);
//   console.log(menuData);


  return (
    <>
      <MenuCard menuData = {menuData} />
    </>
  );
};

export default Resturant;
