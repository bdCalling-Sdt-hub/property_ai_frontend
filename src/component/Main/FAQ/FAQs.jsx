/* eslint-disable react/no-unescaped-entities */

import { Spin } from "antd";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAllFaqQuery } from "../../../redux/features/setting/settingApi";
import Header from "../Header/Header";
// import LogoImage from "../../../assets/auth/Logo.png";
function FAQs() {
  const {data, isLoading}= useAllFaqQuery()

  const [showFaq, setShowFaq]  = useState(0)
    if (isLoading) {
      return <Spin />
    }
  return (
    <div className="min-h-screen bg-[#f1eee7]">
      <div className="flex justify-end pt-10 mr-1 md:pr-10">
        <Header />
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-center text-[#434343]">
          Frequently Asked Questions
        </h1>
        <div className="w-full md:w-[90%] lg:w-[40%] xl:w-[50%] mx-auto mt-8 space-y-4 p-2">
          {/* <div className="bg-[#b6bb92] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section1"
              className="hidden peer"
            />
            <label
              htmlFor="section1"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">01 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the first section. You can add any details
              you like.
            </div>
          </div> */}


          {data?.data?.length > 0 && data?.data?.map((item,i)=><div key={i} className="bg-[#cac7c0] border-b-1 border-black text-gray-600 rounded-lg shadow-md p-5 ">
           <div>
         <div className="flex justify-between items-center">
         <h3 onClick={()=>setShowFaq(i===showFaq ? null : i)} className="font-medium text-xl w-full ">{item?.question}</h3> <div>
            {showFaq===i ? <FaMinus onClick={()=>setShowFaq(null)} className="cursor-pointer" /> : <FaPlus onClick={()=>setShowFaq(i)} className="cursor-pointer" /> }

           </div>
         </div>
         <p 
  className={`${showFaq === i ? 'block opacity-100 pt-3' : 'opacity-0 h-0'} transition-opacity duration-[1s] ease-in-out`}
>
  Ans : {item?.answer}
</p>

           </div>
          </div>)}

          {/* <div className="bg-[#b6bb92] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section2"
              className="hidden peer"
            />
            <label
              htmlFor="section2"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">02 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the second section. You can add any
              details you like.
            </div>
          </div>

          <div className="bg-[#8A8AC5] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section3"
              className="hidden peer"
            />
            <label
              htmlFor="section3"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">03 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the third section. You can add any details
              you like.
            </div>
          </div>

          <div className="bg-[#8A8AC5] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section4"
              className="hidden peer"
            />
            <label
              htmlFor="section4"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">04 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the fourth section. You can add any
              details you like.
            </div>
          </div>
          <div className="bg-[#8A8AC5] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section5"
              className="hidden peer"
            />
            <label
              htmlFor="section5"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">04 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the fourth section. You can add any
              details you like.
            </div>
          </div>

          <div className="bg-[#8A8AC5] border-b-1 border-black text-white rounded-lg shadow-md">
            <input
              type="radio"
              name="accordion"
              id="section6"
              className="hidden peer"
            />
            <label
              htmlFor="section6"
              className="flex items-center justify-between p-4 cursor-pointer"
            >
              <span className="text-lg font-semibold">04 How it’s work</span>
              <span className="peer-checked:hidden bg-white rounded-full px-1 text-black">+</span>
              <span className="peer-checked:block hidden bg-white rounded-full px-1 text-black">-</span>
            </label>
            <div className="peer-checked:block hidden p-4 text-sm text-gray-300">
              This is the content for the fourth section. You can add any
              details you like.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
