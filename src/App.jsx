import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import logo from "./assets/logo.png";
import logo2 from "./assets/badhon.jpg";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AiOutlineWindows } from "react-icons/ai";
import { FaToggleOn } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import Card from "./Components/Card";

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="absolute">
      <header className=" navbar   fixed z-10 bg-opacity-80 max-w-screen-xl mx-auto   bg-white md:py-7 py-6 md:px-8  shadow-lg flex justify-between items-center">
        <div className="  max-[450px]:ml-10 flex gap-1 ml-4 md:gap-10 items-center">
          <div className="text-3xl text-[#8e8d8d]">
            <RxHamburgerMenu className="cursor-pointer" onClick={toggleNav} />
          </div>
          <div className="relative max-[450px]:ml-0 ml-4 flex gap-1 items-center">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block absolute px-3 py-1 rounded-3xl bg-[#f8f8f8] border input-bordered w-24 md:w-auto"
            />
            <CiSearch className="md:relative text-2xl right-9 text-[#d6d6db]" />
            <div>
              <h2 className="flex gap-1 items-center px-4 py-1 rounded-full bg-[#f8f8f8]">
                EN <BiSolidDownArrow className="text-xs" />
              </h2>
            </div>
            <div className="hidden md:block">
              <h2 className="px-4 ml-2 py-1 rounded-full border border-[#922c88] text-[#922c88]">
                Buy
              </h2>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <img src={logo} alt="" className="md:w-10 w-7" />
          <h2 className="hidden md:block font-bold text-2xl">GOGO</h2>
        </div>
        <div className="flex gap-3 items-center">
          <FaToggleOn className="text-2xl text-[#e6e5e5]" />
          <AiOutlineWindows className="text-2xl hidden md:block" />
          <div className="flex items-start">
            <CiBellOn className="text-2xl" />
            <sup className="border rounded-full px-2 text-xs">3</sup>
          </div>
          <MdOutlineZoomOutMap className="text-xl hidden md:block" />
          <h2 className="hidden md:block">Md.Fazlul haque</h2>
          <img src={logo2} alt="" className="w-10 rounded-full" />
        </div>
      </header>
      <div className="">
        <Navbar show={showNav} />
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
}

export default App;
