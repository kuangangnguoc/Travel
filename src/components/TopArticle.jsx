const TopArticle = ({ image, title, date }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={image} alt="" className="rounded-md" />
      <div className="flex flex-col gap-2">
        <span className="font-medium ">{title}</span>
        <span className="text-[15px] text-[#717171]">{date}</span>
      </div>
    </div>
  );
};

export default TopArticle;
