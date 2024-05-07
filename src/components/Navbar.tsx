import { useState } from "react";

import ShoppingBag3LineIcon from "remixicon-react/ShoppingBag3LineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";

import StyleNestLogo from "../assets/Logo.svg";

const Navbar = () => {
  // State to manage the toggle menu
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);

  // Function to handle toggling the menu
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className="max-w-[1216px] mx-auto p-4 py-[38px]">
      <nav className="flex flex-row items-center max-tablet:gap-0 gap-[103px]">
        {/* StyleNest logo */}
        <img src={StyleNestLogo} alt="styleNest logo" className="h-8 z-10" />
        {/* Menu */}
        <div className="grow flex flex-row items-center justify-between">
          {/* Menu items */}
          <div
            className={`
            max-tablet:absolute
            max-tablet:min-h-screen
            max-tablet:w-screen
            max-tablet:left-0
            max-tablet:px-7
            max-tablet:top-0
            max-tablet:pt-24
            max-tablet:py-[6px]
            ${toggleMenu ? "bg-white" : "bg-transparent"}
          `}
          >
            <ul
              className={`flex flex-col tablet:flex-row gap-[34px] ${
                toggleMenu ? "max-tablet:visible" : "max-tablet:hidden"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="text-neutral-900 px-2 tablet:text-neutral-600 hover:text-[#171717] text-sm tablet:text-base font-normal tablet:font-medium focus:outline-none focus:ring focus:ring-violet-200 rounded-tablet"
                >
                  Shop all
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-900 px-2 tablet:text-neutral-600 hover:text-[#171717] text-sm tablet:text-base font-normal tablet:font-medium focus:outline-none focus:ring focus:ring-violet-200 rounded-tablet"
                >
                  Latest arrivals
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Icons */}
        <div className="flex flex-row gap-5">
          {/* Shopping Bag Icon */}
          <ShoppingBag3LineIcon
            color="#525252"
            focusable="true"
            tabIndex={0}
            className="px-[3px] py-[2px] focus:outline-none focus:ring focus:ring-violet-200 rounded-tablet"
          />
          {/* Close Icon when menu is open */}
          {toggleMenu ? (
            <CloseLineIcon
              focusable="true"
              tabIndex={0}
              onClick={handleToggleMenu}
              className="px-[3px] py-[2px] hidden max-tablet:inline-flex z-10 focus:outline-none focus:ring focus:ring-violet-200 rounded-tablet"
            />
          ) : (
            /* Menu Icon when menu is closed */
            <MenuLineIcon
              color="#525252"
              focusable="true"
              tabIndex={0}
              className="px-[3px] py-[2px] hidden max-tablet:inline-flex z-10 focus:outline-none focus:ring focus:ring-violet-200 rounded-tablet"
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
