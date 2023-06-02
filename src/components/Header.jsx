import Head from "./Head";

// eslint-disable-next-line react/prop-types
const Header = ({ image, children }) => {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <img
          src={image}
          alt=""
          className="object-cover min-w-screen h-[100%]"
        />
      </div>
      <Head></Head>
      {children}
    </div>
  );
};

export default Header;
