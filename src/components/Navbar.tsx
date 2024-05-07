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
    <header className="max-w-[1216px] mx-auto p-4">
      <nav className="flex flex-row items-center max-md:gap-0 gap-[103px]">
        {/* StyleNest logo */}
        <img src={StyleNestLogo} alt="styleNest logo" className="h-8 z-10" />
        {/* Menu */}
        <div className="grow flex flex-row items-center justify-between">
          {/* Menu items */}
          <div
            className={`
            max-md:absolute
            max-md:min-h-screen
            max-md:w-screen
            max-md:left-0
            max-md:px-7
            max-md:top-0
            max-md:pt-24
            max-md:py-[6px]
            ${toggleMenu ? "bg-white" : "bg-transparent"}
          `}
          >
            <ul
              className={`flex flex-col md:flex-row gap-[34px] ${
                toggleMenu ? "max-md:visible" : "max-md:hidden"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="text-neutral-900 px-2 md:text-neutral-600 hover:text-[#171717] text-sm md:text-base font-normal md:font-medium focus:outline-none focus:ring focus:ring-violet-200 rounded-md"
                >
                  Shop all
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-900 px-2 md:text-neutral-600 hover:text-[#171717] text-sm md:text-base font-normal md:font-medium focus:outline-none focus:ring focus:ring-violet-200 rounded-md"
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
            className="px-[3px] py-[2px] focus:outline-none focus:ring focus:ring-violet-200 rounded-md"
          />
          {/* Close Icon when menu is open */}
          {toggleMenu ? (
            <CloseLineIcon
              focusable="true"
              tabIndex={0}
              onClick={handleToggleMenu}
              className="px-[3px] py-[2px] hidden max-md:inline-flex z-10 focus:outline-none focus:ring focus:ring-violet-200 rounded-md"
            />
          ) : (
            /* Menu Icon when menu is closed */
            <MenuLineIcon
              color="#525252"
              focusable="true"
              tabIndex={0}
              className="px-[3px] py-[2px] hidden max-md:inline-flex z-10 focus:outline-none focus:ring focus:ring-violet-200 rounded-md"
              onClick={handleToggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
