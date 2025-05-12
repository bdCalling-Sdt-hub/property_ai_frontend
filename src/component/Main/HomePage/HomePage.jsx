/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/banner/banner.png";
import userIcon from "../../../assets/user.png";
import { imageBaseUrl } from "../../../utils/imageUrl";

function HomePage() {
  const user = useSelector(state=>state?.auth?.user)
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    // <div className="min-h-screen bg-gradient-to-t from-[#b6bb92] to-[#b6bb92c5] ">
    <div className="min-h-screen bg-[#f1eee7]">
  <div className="bg-[#f1eee7]">
 
      {/* <Link to="/auth"> */}
        <div className="flex justify-center flex-col items-center h-full mx-1">
        <div className="relative flex justify-between items-center p-2 md:p-8 pt-10 mr-1 md:pr-10  w-full md:w-[60%] lg:w-[38%]">
        {/* <div className="flex justify-end p-2 md:p-8 pt-10 mr-1 md:pr-10  w-full md:w-[60%] lg:w-[38%]"> */}
        {user ? <div></div> :
          <div className="">
            <FaBars 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="text-2xl" />
            {showTooltip  && (
              <div className="absolute z-0 top-[4.2rem] left-1/3 transform -translate-x-1/2 bg-[#edaa9d] text-white text-center py-2 px-4 rounded-md opacity-100 transition-opacity duration-300">
                Register as a new user to activate chat history
              </div>
            )}
          </div> 
            }

        {user ? <Link to={'/profile'}><img className="border h-12 w-12 rounded-full object-cover shadow" src={user?.profilePictureUrl ?  `${imageBaseUrl}/${user?.profilePictureUrl}` : userIcon} alt={user?.name} /></Link> :<Link to="/auth/login">
          <button className="px-7 py-3 text-gray-700 rounded-md text-lg">
            Sign in
          </button>
        </Link>}
        {/* {!user && <Link to="/auth/login">
          <button className="px-7 py-3 text-gray-700 rounded-md text-lg">
            Sign in
          </button>
        </Link>} */}
      </div>
          <div className="p-2 md:p-8 rounded-xl w-full md:w-[60%] lg:w-[38%] text-center space-y-4">
            {/* <div className="flex justify-center mb-4">
              <img src={LogoImage} alt="logo" className="w-20 h-20" />
            </div> */}
            <h3 className="text-left text-3xl leading-[2.6rem] font-semibold text-[#414141] my-2 ">Hi, I’m Savvy, <br />
            your property companion.</h3>

            <p className="text-left text-lg text-[#414141] leading-7 my-2 ">
            See me as your very own search assistant and property guru. Buying or renting, I will introduce you to recently listed properties and give you expert answers to all your property questions along the way.
            </p>
            <p className="text-left text-lg text-[#414141] leading-7 my-2 ">Sign in to personalise your home search experience. I will remember your requirements and bring you new property matches when they become available.
            </p>
           <div className="pt-5">
           <div className="text-center  mb-3 flex justify-start text-gray-700">
              <Link to={`${user ? '/chat' : '/auth/register'}`} className=" bg-[#bab1b3]  px-5 py-3 rounded-full">Launch Savvy Assistant</Link>
            </div>
            <div className="text-center mt-5 flex justify-start gap-5 text-gray-700">
            {/* <Link to={'/chat'} className="bg-[#edaa9d] w-full py-3 rounded-full">Search</Link>
            <Link to={'/chat'} className="bg-[#aac3bc] w-full py-3 rounded-full">Find</Link>
            <Link to={'/chat'} className="bg-[#cfc8c7] w-full py-3 rounded-full">Ask</Link>
            <Link to={'/chat'} className="bg-[#d6ced6] w-full py-3 rounded-full">Learn</Link> */}
            <Link to={'/chat'} className="bg-[#edaa9d] w-full py-3 rounded-full">Search</Link>
            <Link to={'/chat'} className="bg-[#aac3bc] w-full py-3 rounded-full">Ask</Link>
            <Link to={'/chat'} className="bg-[#cfc8c7] w-full py-3 rounded-full">Learn</Link>
            </div>
           </div>
            <div className="flex justify-center mt-4">
              <div className="w-4 h-4 bg-gradient-to-r from-[#E6E6F2] via-[#E6E6F2] to-[rgba(0,0,127,0.35)] rounded-full mx-1"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-[#E6E6F2] via-[#E6E6F2] to-[rgba(0,0,127,0.35)] rounded-full mx-1"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-[#E6E6F2] via-[#E6E6F2] to-[rgba(0,0,127,0.35)] rounded-full mx-1"></div>
            </div>
          </div>
        </div>
      {/* </Link> */}
  </div>
  <div className="min-h-[50vh] w-full">
    <img src={bgImage} alt="image" className="w-full h-auto" />
  </div>
  <div className="text-gray-700">
    <p className="text-center pb-2 flex gap-2 justify-center">
      <Link to={'/Profile'}>Profile</Link>
      <span>|</span> 
      <Link to={'/PrivacyTerms'}>Privacy Policy</Link> 
      <span>|</span> 
      <Link to={'/FAQ'}>Faq</Link> 
      <span>|</span> 
      <Link to={'/PrivacyTerms'}>Terms and Conditions of Use</Link> 
      </p>
    <p className="text-center pb-5">SavvyMove Limited is registered with the ICO under number ZB881615.</p>
  </div>
    </div>
  );
}

export default HomePage;
