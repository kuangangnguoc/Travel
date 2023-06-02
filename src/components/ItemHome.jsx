import Heart from "../icon/Heart";
import Star from "../icon/Star";

const ItemHome = ({ image, avatar, address, title, description }) => {
  return (
    <div className="bg-white rounded-lg ">
      <div className="relative">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="object-cover w-full p-2 overflow-hidden aspect-video rounded-2xl"
          />
        </div>
        <div className="absolute top-[24px] left-[24px] flex right-[24px] justify-between">
          <button className="p-2  border-white bg-transparent border-[2px] rounded-md text-white font-bold text-[14px]">
            $150/ night
          </button>
          <button>
            <Heart></Heart>
          </button>
        </div>
        <div className="absolute bottom-[20px] left-[24px] flex gap-1">
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <span className="text-[14px] text-white font-normal">
            (25 reviews)
          </span>
        </div>
        <div className="absolute w-[50px] h-[50px] bottom-[-20px] rounded-full right-[24px] border-[2px] border-white">
          <img src={avatar} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>
      <div className=" flex flex-col pl-5 pt-4 gap-[11px] pr-[25px]">
        <div>
          <span>{address}</span>
        </div>
        <span className="text-[18px] font-medium">{title}</span>
        <span className="text-[15px] font-normal text-[#717171]">
          {description}
        </span>
      </div>
      <div className="flex justify-end w-full pr-6">
        <button className="w-[95px] h-[40px] bg-[#ED4949] rounded-lg mb-4 mt-4 text-white">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ItemHome;
