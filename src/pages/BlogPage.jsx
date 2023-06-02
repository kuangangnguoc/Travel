import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemArticles from "../components/ItemArticles";
import TopArticle from "../components/TopArticle";

const BlogPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-white">
      <Header image={"ImageBlog.png"}>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-3 text-white">
          <h3 className="text-[30px] font-medium mb:hidden">Blog</h3>
          <span className="mb:hidden">Home / Blog</span>
        </div>
      </Header>
      <div className="px-[375px] xl:px-[150px] lg:px-[100px] xs:px-[20px] grid grid-cols-3 mb:gap-[10px] mb:grid-cols-2 gap-[30px] mt-[70px] mb:px-[10px]">
        <div className="flex flex-col col-span-1 gap-5">
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
        <div className="flex flex-col col-span-1 gap-5">
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
        <div className="flex flex-col col-span-1 gap-7 mb:hidden">
          <div className="h-[115px] rounded-lg flex items-center justify-center bg-[#F9F7F1] px-[30px]">
            <input
              type="text"
              placeholder="To search type"
              className="px-[22px] py-[20px] w-full rounded-lg outline-none"
            />
          </div>
          <div className="rounded-lg flex flex-col justify-start bg-[#F9F7F1] px-[30px] py-[30px] gap-4">
            <span className="font-medium text-[18px]">Popular Cities</span>
            <ul className="flex flex-col gap-4 pl-[20px] text-[#717171]">
              <li>Da Nang</li>
              <li>Nha Trang</li>
              <li className="text-[#ED 4949]">Hue</li>
              <li>Ninh Binh</li>
              <li>Ho Chi Minh</li>
              <li>Da Lat</li>
              <li>Hai Phong</li>
            </ul>
          </div>
          <div className="rounded-lg flex  flex-col justify-start bg-[#F9F7F1] px-[30px] py-[30px] gap-4">
            <span className="font-medium text-[18px]">Top Article</span>
            <NavLink to={"/blog/cafe-apartment"}>
              <TopArticle
                image={"ImageBlog1.png"}
                title={"Vietnam in Spring, what to do?"}
                date={"January 7, 2021"}
              ></TopArticle>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <TopArticle
                image={"ImageBlog1.png"}
                title={"Vietnam in Spring, what to do?"}
                date={"January 7, 2021"}
              ></TopArticle>
            </NavLink>
            <NavLink to={"/blog/cafe-apartment"}>
              <TopArticle
                image={"ImageBlog1.png"}
                title={"Vietnam in Spring, what to do?"}
                date={"January 7, 2021"}
              ></TopArticle>
            </NavLink>
          </div>
          <div className="rounded-lg flex flex-col justify-start bg-[#F9F7F1] px-[30px] py-[30px] gap-4 ">
            <span className="font-medium text-[18px]">Tags</span>
            <div className="">
              <button className="px-[20px] py-[8px] border bg-white rounded-2xl text-[#717171] mr-3 mb-3">
                Travelling
              </button>
              <button className="px-[20px] py-[8px] border bg-white rounded-2xl text-[#717171] mr-3 mb-3">
                Art
              </button>
              <button className="px-[20px] py-[8px] border bg-white rounded-2xl text-[#717171] mr-3 mb-3">
                Vacation
              </button>
              <button className="px-[20px] py-[8px] border bg-white rounded-2xl text-[#717171] mr-3 mb-3">
                Tourism
              </button>
              <button className="px-[20px] py-[8px] border bg-white rounded-2xl text-[#717171] mr-3 mb-3">
                Culture
              </button>
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

export default BlogPage;
