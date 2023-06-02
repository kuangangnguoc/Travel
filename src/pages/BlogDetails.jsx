import { NavLink } from "react-router-dom";
import Header from "./../components/Header";
import ItemArticles from "../components/ItemArticles";
import Footer from "../components/Footer";
const BlogDetails = () => {
  return (
    <div className="h-full min-w-full min-h-screen bg-white">
      <Header image="/imageDetail.png">
        <div className="absolute bottom-[30px] left-[50%] mb:hidden translate-x-[-50%] text-white flex items-center justify-center flex-col gap-4">
          <button className="px-[22px]  py-[8px] xs:hidden bg-[#234DD4] rounded-full ">
            Ho Chi Minh
          </button>
          <span className="text-[30px] xl:text-[20px] xs:text-[20px] text-center font-medium ">
            Cafe Apartment - Discover the perfect blend of old-world charm
          </span>
          <div className="flex gap-16">
            <div className="flex items-center gap-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z"
                  fill="white"
                />
              </svg>

              <span>Sytske</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z"
                  fill="white"
                />
              </svg>

              <span>26 April, 2020</span>
            </div>
          </div>
        </div>
      </Header>
      <div className="px-[500px] xl:px-[150px] lg:px-[100px] xs:px-[20px] mt-[50px] text-[#717171] leading-6 text-[15px] flex flex-col gap-5">
        <span className="">
          Originally constructed in the 1960s as an apartment building, the
          Nguyen Hue Cafe Apartment has undergone a fascinating transformation
          over the years. This architectural treasure witnessed the changing
          landscape of Saigon, surviving wars and societal shifts. Today, it
          stands as a symbol of resilience and adaption, embracing the cafe
          culture that has become an integral part of Vietnamese urban life.
        </span>
        <span>
          The Nguyen Hue Cafe Apartment is not just a place to enjoy a cup of
          coffee; it is an immersive experience for all senses. Stepping inside,
          visitors are greeted by a maze of narrow staircases, adorned with
          vintage posters and quirky artwork. Each floor holds a different cafe,
          offering its own unique ambiance and menu, allowing patrons to explore
          a variety of flavors and atmospheres in a single visit.
        </span>
        <svg
          width="43"
          height="24"
          viewBox="0 0 43 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d="M12.2 23.8L21.8 0H14.1L0 23.8H12.2ZM32.9 23.8L42.5 0H34.7L20.6 23.8H32.9Z"
            fill="#717171"
          />
        </svg>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#222222] text-[16px] italic font-medium text-center">
            In the heart of Saigon, the Nguyen Hue Cafe Apartment stands as a
            testament to the power of preserving heritage and embracing the
            flavors of the present.
          </span>
          <span>Luis Pickford</span>
        </div>
        <span>
          One of the most remarkable aspects of the Nguyen Hue Cafe Apartment is
          the fusion of local and international coffee cultures. Each cafe
          within the building offers its own twist on traditional Vietnamese
          coffee, as well as an array of international brews and specialties.
          From aromatic Vietnamese ca phe sua da to smooth Italian espresso,
          there is something to please every coffee aficionado’s palate.{" "}
        </span>
        <img src="/ImgDt.png" alt="" className="object-cover w-full" />
        <h4 className="text-[#222222] text-[18px] font-medium">Conclusion:</h4>
        <ul className="pl-5">
          <li className="leading-9">
            Worth place visiting if you are a cafeholic. The prices are
            reasonable and it also tastes heavenly. The path in the building is
            kinda small but they also have a elevator there. Not only cafe,
            there also concludes various small fusion and restaurants which are
            also amazing too. So, if you ever find yourself in Saigon, please
            come check out this place.
          </li>
        </ul>
        <div className="mt-[70px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#ededed]">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_473_1943)">
                  <path
                    d="M15.6719 10.3809V14.9961C15.6719 15.3623 15.374 15.6602 15.0078 15.6602H1.99219C1.62602 15.6602 1.32812 15.3623 1.32812 14.9961V10.3809H0V14.9961C0 16.0946 0.893695 16.9883 1.99219 16.9883H15.0078C16.1063 16.9883 17 16.0946 17 14.9961V10.3809H15.6719Z"
                    fill="#717171"
                  />
                  <path
                    d="M8.50162 0.0117188L4.375 4.13834L5.31412 5.07745L7.83755 2.55402V12.904H9.16568V2.55402L11.6891 5.07745L12.6282 4.13834L8.50162 0.0117188Z"
                    fill="#717171"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_473_1943">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="#717171">Share Post</span>
          </div>
          <div className="gap-4">
            <button className="px-[22px] py-[5px] m-1 rounded-full border border-[#EAEAEA]">
              Travelling
            </button>
            <button className="px-[22px] py-[5px] m-1 rounded-full border border-[#EAEAEA]">
              Art
            </button>
            <button className="px-[22px] py-[5px] m-1 rounded-full border border-[#EAEAEA]">
              Vacation
            </button>
            <button className="px-[22px] py-[5px] m-1 rounded-full border border-[#EAEAEA]">
              Tourism
            </button>
            <button className="px-[22px] py-[5px] m-1 rounded-full border border-[#EAEAEA]">
              Culture
            </button>
          </div>
        </div>
        <div className="mt-10 border-t flex justify-between border-[#EAEAEA] pt-[45px] pb-[100px]">
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-4">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.159285 4.64332C-0.0530952 4.83765 -0.0530951 5.16231 0.159285 5.35713L5.05963 9.85239C5.27473 10.0492 5.62357 10.0492 5.83813 9.85239C6.05323 9.65557 6.05323 9.33589 5.83813 9.13907L1.32706 5L5.83867 0.861422C6.05377 0.664108 6.05377 0.344925 5.83867 0.14761C5.62357 -0.0492051 5.27473 -0.0492051 5.06017 0.14761L0.159285 4.64332Z"
                  fill="#234DD4"
                />
              </svg>
              <span className="text-[#234DD4] font-medium text-[15px]">
                Previous Post
              </span>
            </div>
            <span>Given Set was without from god divide rule Hath</span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center justify-end gap-4">
              <span className="text-[#234DD4] font-medium text-[15px]">
                Previous Post
              </span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.84071 5.35668C6.05309 5.16235 6.05309 4.83769 5.84072 4.64287L0.940372 0.147612C0.725269 -0.0492042 0.376431 -0.0492043 0.161873 0.147612C-0.0532293 0.344428 -0.0532294 0.664109 0.161873 0.860925L4.67294 5L0.161327 9.13858C-0.0537748 9.33589 -0.0537748 9.65507 0.161327 9.85239C0.37643 10.0492 0.725268 10.0492 0.939826 9.85239L5.84071 5.35668Z"
                  fill="#234DD4"
                />
              </svg>
            </div>
            <span>Tree earth fowl given moveth deep lesser After</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F7F1] px-[375px] xl:px-[150px] lg:px-[100px] xs:px-[20px] pt-[60px] flex flex-col gap-[55px] pb-[80px]">
        <div className="flex items-center justify-between mb:flex-col mb:justify-center mb:gap-3">
          <div className="flex flex-col gap-3">
            <h4 className="font-medium text-[30px] mx-auto">
              Related articles
            </h4>
            <span className="text-[#717171]">
              Checkout Latest News And Articles From Our Blog
            </span>
          </div>
          <button className="w-[200px] h-[55px] bg-[#ED4949] rounded-lg text-white">
            View All Articles
          </button>
        </div>
        <div className="grid grid-cols-3 mb:grid-cols-1 gap-[30px]">
          <NavLink to={"/blog/cafe-apartment"}>
            <ItemArticles
              image={"/images.png"}
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
              image={"/images.png"}
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
              image={"/images.png"}
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
              image={"/images.png"}
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
              image={"/images.png"}
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
              image={"/images.png"}
              name={"Bao Ngoc"}
              date={"May 20, 2021"}
              address={"Quang Binh"}
              title={
                "Explore the UNESCO World Heritage largest cave of Vietnam"
              }
            ></ItemArticles>
          </NavLink>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
