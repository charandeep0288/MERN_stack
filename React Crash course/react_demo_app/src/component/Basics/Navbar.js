import React from "react";

// console.log(uniqueList);

const Navbar = ({ filterItem, menuList }) => {

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((category) => {
            return ( // we need to return something
              <button
                className="btn-group__item"
                onClick={() => filterItem(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
