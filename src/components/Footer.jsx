import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoToggle } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="h-38 w-full bg-black text-white text-[16px] py-6 px-16 absolute bottom-0 shadow">
      <ul className="flex flex-row justify-center items-center gap-4 flex-wrap w-[60%] m-auto ">
        <li className="d-inline-block">
          <div>
            <Link className="flex gap-1 items-center">
              <span>Help</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex flex-nowrap gap-1 items-center">
              <span>Site Index</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>IMDb Pro</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Box Office Mojo</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Licence IMDB data</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Press Room</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Adversiting</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Jobs</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Conditions of Use</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-1 items-center">
              <span>Privacy Policy</span> <MdOutlineOpenInNew />
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link className="flex gap-2 items-center">
              <IoToggle className="text-2xl" />
              <span>Your Ads Yours choice</span>
            </Link>
          </div>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-2 mt-4">
        <img
          className="w-[100px]"
          src="https://up.yimg.com/ib/th?id=OIP.cs6rsE5Ogsa4Hm_2Y6hiPwHaEK&pid=Api&rs=1&c=1&qlt=95&w=186&h=104"
          alt="logo"
        />
      </div>
      <div className="text-center">c 1990-2025 by IMDb.com, Inc</div>
    </div>
  );
};

export default Footer;
