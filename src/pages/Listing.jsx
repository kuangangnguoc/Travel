import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Head from "../components/Head";
import ItemHome from "../components/ItemHome";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Listing = () => {
  return (
    <div className="w-full h-full">
      <Head className={"bg-[#ED4949]"}></Head>
      <div className="pt-[174px] flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center gap-2 ">
          <span className="font-medium text-[30px]">Listings</span>
          <span className=" text-[16px] text-[#717171]">Home / Listings</span>
        </div>
        <div className="px-[375px] xl:px-[150px] lg:px-[100px] xs:px-[20px] grid grid-cols-3 mb:grid-cols-2 gap-[30px] ">
          <div className="col-span-1 bg-[#F4F4F4] h-max p-[30px] rounded-md flex flex-col gap-5 mb:hidden">
            <input
              type="text"
              placeholder="To search type"
              className="px-[22px] py-[15px] w-full rounded-lg outline-none"
            />
            <button className="w-full bg-white rounded-lg">
              <div className="flex items-center justify-between px-[22px] py-[15px] text-[#717171]">
                <span>All Category</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84016 0.493663L9.5126 0.163823C9.40951 0.0608136 9.27235 0.00406517 9.12577 0.00406517C8.97926 0.00406517 8.84194 0.0608136 8.73885 0.163823L5.00224 3.9006L1.26131 0.159676C1.15838 0.0566672 1.02107 0 0.87456 0C0.728055 0 0.590655 0.0566672 0.487646 0.159676L0.160001 0.487484C-0.0533338 0.700656 -0.0533338 1.04789 0.160001 1.26107L4.61402 5.7311C4.71695 5.83403 4.8541 5.90655 5.00191 5.90655H5.00362C5.1502 5.90655 5.28736 5.83395 5.39029 5.7311L9.84016 1.27318C9.94325 1.17025 9.99984 1.02895 10 0.882446C10 0.73586 9.94325 0.596509 9.84016 0.493663Z"
                    fill="#717171"
                  />
                </svg>
              </div>
            </button>

            <button className="w-full bg-white rounded-lg">
              <div className="flex items-center justify-between px-[22px] py-[15px] text-[#717171]">
                <span>Location</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84016 0.493663L9.5126 0.163823C9.40951 0.0608136 9.27235 0.00406517 9.12577 0.00406517C8.97926 0.00406517 8.84194 0.0608136 8.73885 0.163823L5.00224 3.9006L1.26131 0.159676C1.15838 0.0566672 1.02107 0 0.87456 0C0.728055 0 0.590655 0.0566672 0.487646 0.159676L0.160001 0.487484C-0.0533338 0.700656 -0.0533338 1.04789 0.160001 1.26107L4.61402 5.7311C4.71695 5.83403 4.8541 5.90655 5.00191 5.90655H5.00362C5.1502 5.90655 5.28736 5.83395 5.39029 5.7311L9.84016 1.27318C9.94325 1.17025 9.99984 1.02895 10 0.882446C10 0.73586 9.94325 0.596509 9.84016 0.493663Z"
                    fill="#717171"
                  />
                </svg>
              </div>
            </button>
            <span className="text-[#717171]">
              Radius around selected destination
            </span>
            <div>
              <Box width={"100%"}>
                <Slider
                  defaultValue={20}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <button className="w-full bg-white rounded-lg">
              <div className="flex items-center justify-between px-[22px] py-[15px] text-[#717171]">
                <span>Price Range</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84016 0.493663L9.5126 0.163823C9.40951 0.0608136 9.27235 0.00406517 9.12577 0.00406517C8.97926 0.00406517 8.84194 0.0608136 8.73885 0.163823L5.00224 3.9006L1.26131 0.159676C1.15838 0.0566672 1.02107 0 0.87456 0C0.728055 0 0.590655 0.0566672 0.487646 0.159676L0.160001 0.487484C-0.0533338 0.700656 -0.0533338 1.04789 0.160001 1.26107L4.61402 5.7311C4.71695 5.83403 4.8541 5.90655 5.00191 5.90655H5.00362C5.1502 5.90655 5.28736 5.83395 5.39029 5.7311L9.84016 1.27318C9.94325 1.17025 9.99984 1.02895 10 0.882446C10 0.73586 9.94325 0.596509 9.84016 0.493663Z"
                    fill="#717171"
                  />
                </svg>
              </div>
            </button>
            <div>
              <span className="text-[18px] font-medium">Tags</span>
            </div>
            <div>
              <ul className="flex flex-col gap-5 list-none">
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]">
                      {" "}
                      Accepts Credit Cards
                    </span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]"> Smoking Allowed</span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]"> Bike Parking</span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#a5a5a5"
                      checked
                    />
                    <span className="text-[#717171]"> Street Parking</span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]"> Wireless Internet</span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]"> Alcohol </span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]">Pet </span>
                  </label>
                </li>
                <li className="">
                  <label className="flex gap-5">
                    <input
                      type="checkbox"
                      name="option1"
                      value="Option 1"
                      className="w-[18px] h-[18px] outline-1 outline-[#717171]"
                    />
                    <span className="text-[#717171]">Friendly</span>
                  </label>
                </li>
              </ul>
            </div>
            <button className="w-full bg-[#ED4949] rounded-lg">
              <div className="flex items-center justify-center px-[22px] py-[20px] text-white">
                <span>Search</span>
              </div>
            </button>
            <div className="flex items-center justify-center ">
              <span className="text-[#717171] underline">Reset Filter</span>
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-5">
            <div className="flex items-center justify-between">
              <p className="flex gap-3 mb:hidden">
                <span className="text-[#717171]">Showing</span>
                <span>1 – 8 of 10 results</span>
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="text-[#717171]">Sort by:</span>
                  <span className="flex items-center gap-5">
                    <span>Default</span>
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.07671 4.86424L8.86404 1.07685C8.9517 0.989247 9 0.872312 9 0.747627C9 0.622941 8.9517 0.506006 8.86404 0.418408L8.58519 0.139492C8.40349 -0.0419999 8.10818 -0.0419999 7.92675 0.139492L4.74638 3.31986L1.56248 0.135963C1.47482 0.0483653 1.35795 -3.34045e-07 1.23333 -3.39492e-07C1.10858 -3.44945e-07 0.991712 0.0483653 0.903975 0.135963L0.625198 0.414879C0.537531 0.502546 0.489235 0.619412 0.489235 0.744097C0.489235 0.868783 0.537531 0.985718 0.625198 1.07332L4.41599 4.86424C4.50393 4.95205 4.62135 5.00028 4.74617 5C4.87148 5.00028 4.98883 4.95205 5.07671 4.86424Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="7.5"
                      fill="white"
                      stroke="#EAEAEA"
                    />
                    <rect x="14" y="14" width="4" height="4" fill="#ED4949" />
                    <rect x="22" y="14" width="4" height="4" fill="#ED4949" />
                    <rect x="14" y="22" width="4" height="4" fill="#ED4949" />
                    <rect x="22" y="22" width="4" height="4" fill="#ED4949" />
                  </svg>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="7.5"
                      fill="white"
                      stroke="#EAEAEA"
                    />
                    <rect x="10" y="13" width="2" height="2" fill="#C4C4C4" />
                    <rect x="10" y="19" width="2" height="2" fill="#C4C4C4" />
                    <rect x="10" y="25" width="2" height="2" fill="#C4C4C4" />
                    <rect x="15" y="13" width="15" height="2" fill="#C4C4C4" />
                    <rect x="15" y="19" width="15" height="2" fill="#C4C4C4" />
                    <rect x="15" y="25" width="15" height="2" fill="#C4C4C4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mb:grid-cols-1 gap-[30px]">
              <div className="col-span-1">
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
              </div>
              <div className="col-span-1">
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
                <NavLink to={"/listing/details"}>
                  <ItemHome
                    image="ItemHome.png"
                    avatar={"Avatar.png"}
                    address={"Sai Gon, Ho Chi Minh city"}
                    title={"Cheerful 1-bedroom in a townhouse with parking."}
                    description={
                      "This unique place has a style all its own, pets allowed and only 25  mins to the city centre."
                    }
                  ></ItemHome>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[375px] lg:px-[100px] xs:px-[20px] mb:px-[10px] mb:gap-[15px] mt-[53px] flex items-center justify-center gap-[30px] pb-[120px]">
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M5.95306 10.8242L6.31589 10.4639C6.4292 10.3505 6.49162 10.1996 6.49162 10.0383C6.49162 9.87719 6.4292 9.72614 6.31589 9.61274L2.20543 5.50246L6.32045 1.38744C6.43376 1.27422 6.49609 1.12317 6.49609 0.962016C6.49609 0.80086 6.43376 0.649721 6.32045 0.536411L5.95986 0.176001C5.72537 -0.0586672 5.34341 -0.0586672 5.10892 0.176001L0.19188 5.07542C0.0786593 5.18864 -0.00111412 5.33951 -0.00111413 5.5021L-0.00111413 5.50398C-0.00111414 5.66522 0.0787489 5.8161 0.19188 5.92932L5.09559 10.8242C5.20881 10.9376 5.36425 10.9998 5.5254 11C5.68665 11 5.83993 10.9376 5.95306 10.8242Z"
            fill="#222222"
          />
        </svg>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black rounded-full cursor-pointer hover:text-white hover:bg-[#234DD4]">
          1
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          2
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-white bg-[#234DD4] cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          3
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer  hover:text-white hover:bg-[#234DD4] rounded-full">
          4
        </span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          5
        </span>
        <span>...</span>
        <span className="w-[35px] h-[35px] flex justify-center items-center text-black cursor-pointer rounded-full hover:text-white hover:bg-[#234DD4]">
          15
        </span>
        <span>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M0.543028 0.175823L0.180204 0.536142C0.0668945 0.649542 0.00447124 0.800413 0.00447124 0.961658C0.00447125 1.12281 0.0668945 1.27386 0.180204 1.38726L4.29066 5.49754L0.175644 9.61256C0.0623339 9.72578 -4.90954e-08 9.87683 -4.20511e-08 10.038C-3.50067e-08 10.1991 0.0623339 10.3503 0.175644 10.4636L0.536232 10.824C0.770722 11.0587 1.15268 11.0587 1.38717 10.824L6.30421 5.92458C6.41743 5.81136 6.49721 5.66048 6.49721 5.4979L6.49721 5.49602C6.49721 5.33478 6.41734 5.1839 6.30421 5.07068L1.4005 0.175823C1.28728 0.0624236 1.13185 0.000179241 0.97069 -4.24302e-08C0.809445 -3.5382e-08 0.656159 0.0624237 0.543028 0.175823Z"
              fill="#222222"
            />
          </svg>
        </span>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Listing;
