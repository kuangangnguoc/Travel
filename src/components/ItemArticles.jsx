const ItemArticles = ({ address, name, date, title, image }) => {
  return (
    <div className="relative bg-white flex flex-col gap-3 pb-3 rounded-lg border border-[#EAEAEA]">
      <div className="relative">
        <button className="absolute top-[24px] left-[24px] bg-[#2650D9] px-[20px] py-[6px] text-[14px] text-white rounded-xl">
          {address}
        </button>
        <img
          src={image}
          alt=""
          className="object-cover w-full p-2 overflow-hidden rounded-2xl"
        />
      </div>
      <div className="flex px-5 text-[#717171] gap-[40px] text-[14px]">
        <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </div>
      <div className="px-5 text-lg font-medium">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ItemArticles;
