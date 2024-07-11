import React from "react";
import { FaBucket } from "react-icons/fa6";
import { GiCarKey, GiParachute } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbHeartRateMonitor } from "react-icons/tb";
import "./Navbar.css";

const Navbar = ({ show }) => {
  return (
    <div
      className={`sidenav  bg-white max-[450px]:opacity-90 min-h-screen overflow-y-auto   md:mt-[90px] mt-[86px] fixed  z-20 md:z-auto transform shadow-lg ${
        show ? "active" : " "
      }   `}
      // {`w-64 min-h-screen font-semibold bg-[#404345] text-white fixed lg:relative z-10 lg:z-auto transform ${
      //     isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      //   } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
    >
      <ul className=" min-h-screen menu pt-5   menu-sm  z-[10]  shadow ">
        <li>
          <a className="flex flex-col  justify-center items-center">
            <SiHomeassistantcommunitystore className="text-4xl mb-2 " />
            Dashboards
          </a>
        </li>
        <hr />
        <li>
          <a className="flex flex-col justify-center items-center">
            <TbHeartRateMonitor className="text-4xl mb-2 " />
            Pages
          </a>
        </li>
        <hr />
        <li>
          <a className="flex flex-col justify-center items-center">
            <GiParachute className="text-4xl mb-2 " />
            Applications
          </a>
        </li>
        <hr />
        <li>
          <a className="flex flex-col justify-center items-center">
            <GiCarKey className="text-4xl mb-2 " />
            UI
          </a>
        </li>
        <hr />
        <li>
          <a className="flex flex-col justify-center items-center">
            <MdOutlineRestaurantMenu className="text-4xl mb-2 " /> Menu
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
