import { NavLink } from "react-router-dom";
import Logo from "../icon/Logo";
import Search from "../icon/Search";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-app/firebase-auth";

const Head = ({ className }) => {
  const [show, setShow] = useState(false);
  function ClickShow() {
    setShow(!show);
  }
  const { userInfo } = useAuth();
  return (
    <div
      className={`absolute text-white top-0 flex items-center justify-between w-full h-[94px] ${className}`}
    >
      <div className="flex pl-[30px] xl:gap-[80px] xs:gap-[20px] lg:gap-[40px] gap-[127px]">
        <NavLink to={"/"}>
          <div className="flex items-center">
            <Logo></Logo>
            <span className="text-[30px] font-medium leading-[43px] mb:text-[20px]">
              Travel exprience
            </span>
          </div>
        </NavLink>
        <div className="flex gap-[42px] xs:gap-[10px] items-center sm:hidden">
          <span className="font-normal text-[15px] ">
            What are you looking for?
          </span>
          <Search></Search>
        </div>
      </div>
      <div className="flex font-normal xl:gap-[80px] lg:gap-[40px] xs:gap-[20px] xl:pr-[150px] lg:pr-[50px] xs:pr-[10px] text-[15px] pr-[215px] gap-[100px]">
        <div className="font-normal text-[15px] flex gap-[40px] mb:hidden">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/listing"}>Listings</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
        </div>

        {userInfo?.email ? (
          <div className="flex gap-5">
            <p className="whitespace-nowrap">
              Xin chào, {userInfo.email.substring(0, 6)}
            </p>
            <button
              className="cursor-pointer whitespace-nowrap"
              onClick={() => signOut(auth)}
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="font-normal text-[15px] flex gap-[40px] mb:hidden">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Resgister</NavLink>
          </div>
        )}

        <div className="relative flex items-center xs:hidden xl:hidden 2xl:hidden lg:hidden mb:block">
          <svg
            width="24"
            height="18"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={ClickShow}
          >
            <path
              d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
              fill="white"
            />
          </svg>
          {show ? (
            <div className="absolute w-[100px] right-0 flex flex-col rounded-lg mt-2 items-end gap-5 p-3 bg-[#F9F7F1] text-black shadow-xl">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/listing"}>Listings</NavLink>
              <NavLink to={"/blog"}>Blog</NavLink>
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink to={"/register"}>Resgister</NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
