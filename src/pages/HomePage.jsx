// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import SearchButton from "../icon/SearchButton";
import Header from "../components/Header";
import ItemHome from "../components/ItemHome";
import Dot from "../icon/Dot";
import Pag from "../icon/Pag";
import ItemArticles from "../components/ItemArticles";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  @media (max-width: 655px) {
    & {
      display: none;
    }
  }
  @media (min-width: 0px) {
    & {
      gap: 30px;
    }
  }
  @media (min-width: 1024px) {
    & {
      gap: 100px;
    }
  }
`;
const HomePage = () => {
  return (
    <div className="min-w-full h-full bg-[#F9F7F1] min-h-screen">
      <Header image={"bgHome.png"}>
        <div className="absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-35%] flex flex-col gap-2 items-center">
          <h1 className="text-[50px] font-medium lg:text-[40px] xs:text-[36px] mb:hidden text-center">
            Explore Amazing Destinations
          </h1>
          <div className="flex flex-col gap-[51px] items-center">
            <span className="text-[18px] font-normal lg:text-[16px] xs:text-[14px] mb:hidden text-center">
              Find great places to stay, eat, shop, or visit from local experts.
            </span>
            <StyledDiv className="h-[70px] w-[1137px] lg:w-[900px] xs:w-[700px] py-3 sm:w-[550px] sm:hidden mb:hidden  bg-white rounded-[100px] items-center">
              <div className="flex h-full">
                <div className="w-full h-full ml-3 ">
                  <label htmlFor="search" className="ml-6 text-black">
                    Where
                  </label>
                  <input
                    name="search"
                    type="text"
                    className="w-full pl-6 pr-10 text-black outline-none rounded-[100px] mt-[8px]"
                    placeholder="Where are you going?"
                  />
                </div>
                <div className="w-full h-full ml-4 border-l border-[#717171]">
                  <label htmlFor="search" className="ml-6 text-black">
                    Check in
                  </label>
                  <input
                    name="search"
                    type="text"
                    className="w-full pl-6 pr-10 text-black outline-none rounded-[100px] mt-[8px]"
                    placeholder="Add Dates"
                  />
                </div>
                <div className="w-full h-full ml-3 border-l border-[#717171]">
                  <label htmlFor="search" className="ml-6 text-black">
                    Check in
                  </label>
                  <input
                    name="search"
                    type="text"
                    className="w-full pl-6 pr-10 text-black outline-none rounded-[100px] mt-[8px]"
                    placeholder="Add Dates"
                  />
                </div>
                <div className="w-full h-full ml-3 border-l border-[#717171]">
                  <label htmlFor="search" className="ml-6 text-black">
                    Guest
                  </label>
                  <input
                    name="search"
                    type="text"
                    className="w-[90%] pl-6 pr-10 text-black outline-none rounded-[100px] mt-[8px]"
                    placeholder="Add Guest"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 translate-y-[-20%] right-2">
                <SearchButton></SearchButton>
              </div>
            </StyledDiv>
          </div>
        </div>
      </Header>
      <div className="px-[375px] xl:px-[200px] lg:px-[100px] xs:px-[10px] sm:px-[20px] flex flex-col items-center w-full mt-[55px] mx-auto ">
        <div className="flex flex-col items-center gap-3 mx-auto ">
          <h3 className="text-[30px] font-medium">Exclusive deals</h3>
          <span className="text-[16px] font-normal text-center text-[#717171]">
            Discover some of the most popular listings in Vietnam based on user
            reviews and ratings.
          </span>
          <div className="grid grid-cols-3 sm:flex sm:flex-col gap-[30px] ">
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
                image="Home1.png"
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
          <div className="flex gap-2 mt-3">
            <Dot></Dot>
            <Pag></Pag>
            <Dot></Dot>
            <Dot></Dot>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-3 mt-[80px]">
          <h3 className="text-[30px] font-medium">Exclusive deals</h3>
          <span className="text-[16px] font-normal text-[#717171]">
            Discover some of the most popular listings in Vietnam based on user
            reviews and ratings.
          </span>
          <div className="flex gap-[20px] mt-2">
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%]">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome1.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%] mb:hidden">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[20px] mt-2">
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome3.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%] mb:hidden">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-[100%] h-[100%] bg-black opacity-30 rounded-lg"></div>
              <img
                src="ImageTrendHome2.png"
                alt=""
                className="h-[100%] rounded-lg"
              />
              <div className=" flex flex-col absolute bottom-[28px] text-white gap-1 items-center left-[50%] translate-x-[-50%] ">
                <span className="text-lg font-medium">Ha Giang</span>
                <span className="text-sm font-normal">62 Listings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] relative">
        <img src="Maskgroup.png" alt="" />
        <div className="absolute flex flex-col items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white gap-[70px] xs:gap-[30px]">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-medium text-[30px]">How it Works</h3>
            <span className="text-[16px] font-normal text-center">
              Bringing business and community members together.
            </span>
          </div>
          <div className=" flex gap-[96px] lg:gap-[40px] xs:gap-[5px] sm:gap-[10px] mb:hidden">
            <div className="flex flex-col items-center gap-[37px] xs:gap-[20px] ">
              <div className="w-[100px] h-[100px] lg:w-[80px] lg:h-[80px] bg-[#ED4949] xs:w-[70px] xs:h-[70px] rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_401_2563)">
                    <path
                      d="M39.5444 37.3446L29.7822 27.5832C32.2086 24.6653 33.6705 20.9184 33.6705 16.8358C33.6705 7.55249 26.1184 4.26962e-09 16.8358 4.26962e-09C7.55249 -0.000207351 0 7.55228 0 16.8356C0 26.1182 7.55249 33.6703 16.8358 33.6703C20.9182 33.6703 24.6651 32.2086 27.5828 29.7824L37.3452 39.544C37.6488 39.8476 38.0469 39.9994 38.4448 39.9994C38.8428 39.9994 39.2409 39.8476 39.5447 39.5438C40.152 38.9365 40.152 37.952 39.5444 37.3446ZM3.11032 16.8356C3.11032 9.26731 9.26752 3.11012 16.8358 3.11012C24.4034 3.11012 30.5602 9.26731 30.5602 16.8356C30.5602 24.4032 24.4036 30.56 16.8358 30.56C9.26752 30.56 3.11032 24.4032 3.11032 16.8356Z"
                      fill="white"
                    />
                    <path
                      d="M16.8325 8.70703C13.5584 8.70703 10.8945 11.3705 10.8945 14.6444C10.8945 19.6143 15.5353 24.3117 15.7329 24.5093C16.0365 24.8129 16.4344 24.9647 16.8325 24.9647C17.2305 24.9647 17.6284 24.8129 17.9319 24.5095C18.1296 24.3119 22.7726 19.6145 22.7726 14.6444C22.7724 11.3707 20.1077 8.70703 16.8325 8.70703ZM16.8288 21.0463C15.5754 19.4534 14.0049 16.9274 14.0049 14.6446C14.0049 13.0857 15.2732 11.8176 16.8325 11.8176C18.3927 11.8176 19.6621 13.0857 19.6621 14.6446C19.6621 17.0518 17.9917 19.5786 16.8288 21.0463Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_2563">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium lg:text-[14px]">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center lg:text-[12px] sm:hidden">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[37px] xs:gap-[20px] ">
              <div className="w-[100px] h-[100px] bg-[#ED4949] lg:w-[80px] lg:h-[80px] xs:w-[70px] xs:h-[70px] rounded-full flex items-center justify-center ">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_401_2573)">
                    <path
                      d="M35.7031 6.25H34.5312V3.51562C34.5312 1.57711 32.9541 0 31.0156 0C29.0771 0 27.5 1.57711 27.5 3.51562V4.47539C27.5 5.68977 26.6845 6.77094 25.5168 7.10453L24.375 7.43078V7.42188C24.375 6.77469 23.8503 6.25 23.2031 6.25H18.5156C17.8684 6.25 17.3438 6.77469 17.3438 7.42188V12.6562H3.51562C1.57711 12.6562 0 14.2334 0 16.1719V38.8281C0 39.2603 0.237891 39.6574 0.618906 39.8613C0.792188 39.9541 0.982187 40 1.1718 40C1.39914 40 1.62586 39.9339 1.82187 39.8031L6.21422 36.875H28.5156C30.4541 36.875 32.0312 35.2979 32.0312 33.3594V21.0938H35.7031C38.0724 21.0938 40 19.1662 40 16.7969V10.5469C40 8.17758 38.0724 6.25 35.7031 6.25ZM19.6875 8.59375H22.0312V18.75H19.6875V8.59375ZM29.6875 33.3594C29.6875 34.0055 29.1618 34.5312 28.5156 34.5312H5.85938C5.62805 34.5312 5.40188 34.5998 5.20937 34.7281L2.34375 36.6385V16.1719C2.34375 15.5257 2.86945 15 3.51562 15H17.3438V19.9219C17.3438 20.5691 17.8684 21.0938 18.5156 21.0938H23.2031C23.8052 21.0938 24.3006 20.6395 24.3669 20.0552C25.4109 20.721 26.6384 21.0938 27.9149 21.0938H29.6875V33.3594ZM37.6562 16.7969C37.6562 17.8738 36.7801 18.75 35.7031 18.75H27.9149C26.4901 18.75 25.1594 18.0312 24.375 16.8558V9.86836L26.1606 9.3582C28.3292 8.73859 29.8438 6.7307 29.8438 4.47539V3.51562C29.8438 2.86945 30.3695 2.34375 31.0156 2.34375C31.6618 2.34375 32.1875 2.86945 32.1875 3.51562V7.42188C32.1875 8.06906 32.7122 8.59375 33.3594 8.59375H35.7031C36.7801 8.59375 37.6562 9.46992 37.6562 10.5469V16.7969Z"
                      fill="white"
                    />
                    <path
                      d="M5.85938 22.0312H13.6719C14.3191 22.0312 14.8438 21.5066 14.8438 20.8594C14.8438 20.2122 14.3191 19.6875 13.6719 19.6875H5.85938C5.21219 19.6875 4.6875 20.2122 4.6875 20.8594C4.6875 21.5066 5.21219 22.0312 5.85938 22.0312Z"
                      fill="white"
                    />
                    <path
                      d="M26.1719 24.375H5.85938C5.21219 24.375 4.6875 24.8997 4.6875 25.5469C4.6875 26.1941 5.21219 26.7188 5.85938 26.7188H26.1719C26.8191 26.7188 27.3438 26.1941 27.3438 25.5469C27.3438 24.8997 26.8191 24.375 26.1719 24.375Z"
                      fill="white"
                    />
                    <path
                      d="M26.1719 29.0625H5.85938C5.21219 29.0625 4.6875 29.5872 4.6875 30.2344C4.6875 30.8816 5.21219 31.4062 5.85938 31.4062H26.1719C26.8191 31.4062 27.3438 30.8816 27.3438 30.2344C27.3438 29.5872 26.8191 29.0625 26.1719 29.0625Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_2573">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium lg:text-[14px]">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center lg:text-[12px] sm:hidden">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[37px] xs:gap-[20px] sm:hidden">
              <div className="w-[100px] h-[100px] bg-[#ED4949] lg:w-[80px] lg:h-[80px] xs:w-[70px] xs:h-[70px] rounded-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_401_2585)">
                    <path
                      d="M35.7143 4.28571H31.4286V1.4286C31.4286 0.639592 30.789 0 30 0C29.211 0 28.5714 0.639592 28.5714 1.4286V4.28571H11.4285V1.4286C11.4285 0.639592 10.7889 0 10 0C9.2111 0 8.57142 0.639592 8.57142 1.4286V4.28571H4.28571C1.91878 4.28571 0 6.20449 0 8.57142V35.7143C0 38.0812 1.91878 40 4.28571 40H35.7143C38.0812 40 40 38.0812 40 35.7143V8.57142C40 6.20449 38.0812 4.28571 35.7143 4.28571ZM37.1428 35.7143C37.1428 36.5033 36.5032 37.1429 35.7142 37.1429H4.28571C3.49671 37.1429 2.85711 36.5033 2.85711 35.7143V17.1428H37.1428V35.7143ZM37.1428 14.2857H2.85711V8.57142C2.85711 7.78242 3.49671 7.14282 4.28571 7.14282H8.57142V9.99994C8.57142 10.7889 9.21101 11.4285 10 11.4285C10.789 11.4285 11.4286 10.7889 11.4286 9.99994V7.14282H28.5715V9.99994C28.5715 10.7889 29.2111 11.4285 30.0001 11.4285C30.7891 11.4285 31.4287 10.7889 31.4287 9.99994V7.14282H35.7144C36.5034 7.14282 37.143 7.78242 37.143 8.57142V14.2857H37.1428Z"
                      fill="white"
                    />
                    <path
                      d="M29.5444 20.4167C28.9908 19.8819 28.1131 19.8819 27.5596 20.4167L17.141 30.8352L12.4366 26.1309C11.8691 25.5828 10.9648 25.5985 10.4167 26.166C9.88195 26.7196 9.88195 27.5972 10.4167 28.1509L16.131 33.8652C16.6889 34.4228 17.5931 34.4228 18.151 33.8652L29.5795 22.4366C30.1276 21.8691 30.1119 20.9648 29.5444 20.4167Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_2585">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[18px] font-medium lg:text-[14px]">
                  Find accommodation
                </span>
                <span className="text-[15px] font-normal w-[310px] text-center lg:text-[12px]">
                  Explore and engage with exceptional nearby accommodations,
                  immersing yourself in the authentic local lifestyle.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mx-auto flex items-center flex-col mt-[90px] gap-[45px]">
          <div className="flex flex-col items-center gap-2 ">
            <h3 className="text-[30px] font-medium text-center">
              Testimonials From Our Customers
            </h3>
            <span className="font-normal text-[#717171] text-center">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </span>
          </div>
          <div className="flex">
            <div className="w-[550px] xl:w-[400px] lg:w-[300px] xs:hidden relative h-[320px] rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <div className="absolute w-full h-full bg-[#F9F7F1] opacity-60"></div>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] lg:w-[280px] text-[15px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
            <div className="w-[550px] xl:w-[400px] lg:w-[300px] mb:w-full mb:px-[20px] relative h-[320px] bg-white rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <span className="absolute font-normal text-[100px] text-[#717171] left-[50px] top-[50px]">
                “
              </span>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px ]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] lg:w-[280px] text-[15px] mb:w-[300px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
            <div className="w-[550px] xl:w-[400px] lg:w-[300px] xs:hidden relative h-[320px] rounded-[15px] flex flex-col items-center gap-[20px] justify-center">
              <div className="absolute w-full h-full bg-[#F9F7F1] opacity-60"></div>
              <img src="Avatar1.png" alt="" className=" w-[70px] h-[70px ]" />
              <div className="flex flex-col items-center gap-[2px]">
                <span className="text-[18px] font-medium">Viet</span>
                <span className="text-[15px] font-normal text-[#717171]">
                  Hai Phong
                </span>
              </div>
              <span className="text-[#717171] text-center w-[387px] lg:w-[280px]  text-[15px]">
                The best hotel booking site Ive used. Instant confirmation,
                competitive prices, and hassle-free cancellations.
              </span>
            </div>
          </div>
          <div className="flex gap-2 ">
            <Dot></Dot>
            <Pag></Pag>
            <Dot></Dot>
            <Dot></Dot>
          </div>
        </div>
      </div>

      <div className="px-[375px] xl:px-[200px] lg:px-[100px] xs:px-[10px] sm:px-[20px] flex flex-col items-center w-full mt-[100px] mx-auto ">
        <div className="flex flex-col items-center gap-3 mx-auto">
          <h3 className="text-[30px] font-medium">Articles</h3>
          <span className="text-[16px] font-normal text-[#717171] text-center">
            Checkout Latest News And Articles From Our Blog
          </span>
          <div className="grid grid-cols-3 gap-[30px] mt-[50px] sm:flex sm:flex-col">
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <ItemArticles
                image={"images.png"}
                name={"Bao Ngoc"}
                date={"May 20, 2021"}
                address={"Quang Binh"}
                title={
                  "Explore the UNESCO World Heritage largest cave of Vietnam"
                }
              ></ItemArticles>
            </NavLink>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="w-[200px] h-[55px] bg-[#ED4949] rounded-lg text-white font-semibold">
              View all articles
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
