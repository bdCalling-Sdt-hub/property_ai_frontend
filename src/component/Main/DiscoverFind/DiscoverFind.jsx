/* eslint-disable react/no-unescaped-entities */

import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../../redux/features/chat/chatApi";
import { imageBaseUrl } from "../../../utils/imageUrl";
import Loading from "../Loader";
// import LogoImage from "../../../assets/auth/Logo.png";
const DiscoverFind = () => {
  const {data , isLoading} = useGetBlogsQuery()
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="min-h-screen bg-[#f1eee7] text-gray-700">
    {/* <div className="min-h-screen bg-gradient-to-t from-[#b6bb92] to-[#b6bb92c7] "> */}
      <div className="flex space-y-5 flex-col justify-center items-center px-4 py-12 md:py-20">
        <h1 className="font-clash font-semibold text-[28px] leading-[40px] text-center  md:text-[36px] md:leading-[50px] lg:text-[44px] lg:leading-[62px] max-w-4xl">
          Discover insight, find opportunities and get
          <br className="hidden md:block" /> expert advice — all in one place
        </h1>
     
        {/* <div className="w-full md:w-[60%] xl:w-[40%] mx-auto py-3 bg-[#D9DCF1] px-3 rounded-md">
          <Link to="/Discover/1">
            <img
              className="w-full  h-[400px]"
              src="https://i.ibb.co.com/cKdRwDYB/Rectangle-18852.png"
              alt=""
            />
            <h1 className=" text-2xl font-semibold pt-2">
              Make Trending & insights
            </h1>
          </Link>
        </div>
        <br />
          <Link className="w-full" to="/HistoricalSale">
        <div className="w-full md:w-[60%] xl:w-[40%] mx-auto py-3 bg-[#D9DCF1] px-3 rounded-md flex items-center space-x-5">
          <img
            className="w-full md:w-[45%]  h-[202px]"
            src="https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png"
            alt=""
          />
          <h1 className=" text-3xl font-semibold pt-2">
            Unlock Historical <br /> Sale Prices
          </h1>
        </div>
          </Link>
        <br />
        <Link className="w-full" to="/propertyValue">
        <div className="w-full md:w-[60%] xl:w-[40%] mx-auto py-3 bg-[#D9DCF1] px-3 rounded-md flex items-center space-x-5">
          <img
            className="w-full md:w-[45%]  h-[202px]"
            src="https://i.ibb.co.com/7Jx3wWhs/Rectangle-18839.png"
            alt=""
          />
          <h1 className=" text-3xl font-semibold pt-2">
            Find Out Your <br /> Property’s Value
          </h1>
        </div>
        </Link>
        <br />
        <Link className="w-full" to="/Discover/2">
        <div className="w-full md:w-[60%] xl:w-[40%] mx-auto py-3 bg-[#D9DCF1] px-3 rounded-md flex items-center space-x-5">
          <img
            className="w-full md:w-[45%]  h-[202px]"
            src="https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png"
            alt=""
          />
          <h1 className=" text-3xl font-semibold pt-2">
            Track Market <br /> Trends
          </h1>
        </div>
        </Link> */}

          {data?.data?.length > 0 
          ? data?.data?.map((blog, i)=>   <Link to={`/Discover/${blog?.id}`} key={i} className="w-full" >
     <div className="w-full md:w-[60%] xl:w-[40%] mx-auto py-3 bg-[#f0e7d3] px-3 rounded-md flex items-center flex-col md:flex-row space-x-5 shadow">
       <img
         className="w-full  md:w-[45%]  h-[202px]"
         src={`${imageBaseUrl}/${blog?.images[0]}`}
         alt=""
       />
    <div>
    <h1 className="py-3 text-3xl font-semibold pt-2">
         {blog?.name}
       </h1>
    </div>
     </div>
     </Link>
         
       ): <div> upcoming Blog ...</div>}


        {/* close icon fixed displayed at the bottom */}
        <div className="fixed bottom-32 flex justify-center">
          <Link to="/chat">
            <div className="bg-white w-[56px] h-[60px] rounded-full flex justify-center items-center">
              <IoClose size={40} className="text-black" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFind;

