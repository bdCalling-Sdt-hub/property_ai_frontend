import { message, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaEdit, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import Swal from "sweetalert2";
import LogoImage from "../../../assets/auth/Logo.png";
import {
  useChatHistoryQuery,
  useDeleteChatsHistoryMutation,
  usePreviousChatQuery,
  useSendMessageMutation,
} from "../../../redux/features/chat/chatApi";
import Header from "../Header/Header";
import ChatDisplay from "./ChatDsiplay";

function HomePage() {


  const [expanded, setExpanded] = useState({
    Yesterday: true,
    "Previous 7 Days": true,
  });
  const [conversationId, setConversationId] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [chatHistoryData, setChatHistoryData] = useState([]);
  const [chats, setChats] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");

  const { data: chatHistory } = useChatHistoryQuery();
  const { data: chatsData,  } =
    usePreviousChatQuery(conversationId);
  const [sendMessage, { isLoading: resLoading }] = useSendMessageMutation();
  const [deleteChatsHistory] = useDeleteChatsHistoryMutation();

  useEffect(() => {
    if (chatHistory?.data?.length) {
      setChatHistoryData(chatHistory?.data);
    }
  }, [chatHistory]);

  // chat fetch
  useEffect(() => {
    if (chatsData?.success) {
      setChats(chatsData?.chatsData);
    }
  }, [chatsData]);

  const toggleExpand = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleItemClick = (message) => {
    setSelectedMessage(message);
  };




  const handleSendMessage = async (e) => {
    e.preventDefault();
    const messageValue = e.target.message.value;
    if (!messageValue) {
      return toast.error("please input your question !");
    }
    const payload = {
      message: messageValue,
      // "conversationId":"conversation_cijgpjd3pms8negjoumxanj71pgbzyte33ugy6achl54cw7h6cnlwv9uxyaddncr2ifsxtar7"
    };

    if (conversationId) {
      payload.conversationId = conversationId;
    }

    setChats((prev) => [
      ...prev,
      {
        _id: Date.now(),
        conversationId: conversationId ? conversationId : "",
        sender: "user",
        message: messageValue,
        id: Date.now(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    try {
      e.target.reset();
      const res = await sendMessage(payload).unwrap();
      if (!res?.success) {
        return toast.error("message send failed !");
      }
      if (!conversationId) {
        setConversationId(res?.conversationData?.id);
      }

      const newMessage = {
        _id: Date.now(),
        conversationId: res?.conversationData?.id,
        sender: res?.sender,
        message: res?.message || res?.propertyData,
        id: Date.now(),
        createdAt: res?.conversationData?.createdAt,
        updatedAt: res?.conversationData?.updatedAt,
      };

      setChats((prev) => [...prev, newMessage]);
    } catch (err) {
      toast.error(err?.message || "message send failed !");
    }
  };


  const handleNewChat = () => {
    setConversationId("");
    setChats([]);
  };

  //delete chats history
  const handleDelete = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be all chats History !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
    try{
      const res =await  deleteChatsHistory().unwrap()
      if(!res?.success) return message.error('history deleted failed! ')
        setChatHistoryData([])
        return message.success('history deleted success .! ')
    }catch(err){
      return  message.error(err?.message || "history deleted failed! ")
    }        
      }
    });
  }

  // scrolling
  const chatContainerRef = useRef(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {
      // Scroll to the bottom whenever chatsData changes
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Reset the initial render flag
    isInitialRender.current = false;
  }, [chats]);

  return (
    // <div className="h-screen bg-gradient-to-t from-[#b6bb92] to-[#b6bb92c0]">

    <div className="h-screen bg-[#f1eee7]">
      <div className="flex justify-center w-full md:w-[90%] mx-auto relative">
        <div
          className={`mt-10 transition-all duration-300 md:mr-5  ${
            !isSidebarVisible
              ? "absolute md:relative w-72 top-0 left-0 z-[999]"
              : "w-0"
          } overflow-hidden`}
        >
          <div className="w-full h-[80vh] max-w-md mx-auto bg-[#f1eee7] border-r-2 border-gray-300 p-6">
            {/* <div className="w-full h-[80vh] max-w-md mx-auto bg-gradient-to-bl to-[#b6bb92] from-[#b6bb92] p-6 rounded-lg shadow-lg "> */}
            <div className="sm:hidden">
              {!isSidebarVisible && (
                <div
                  onClick={toggleSidebar}
                  className="flex justify-end mb-5 items-center"
                >
                  <FaTimes className="cursor-pointer" size={24} />
                </div>
              )}
            </div>
            <div className="space-y-4">
              {/* {Object.keys(data).map((section) => (
                // <div key={section}>
                //   <div
                //     className="flex justify-between items-center cursor-pointer"
                //     onClick={() => {
                //       toggleExpand(section); // First function
                //       setYesterday(section); // Second function
                //     }}
                //   >
                //     <h2 className="text-xl font-semibold text-gray-800">
                //       {section}
                //     </h2>
                //     {expanded[section] ? (
                //       <IoChevronUp size={24} />
                //     ) : (
                //       <IoChevronDown size={24} />
                //     )}
                //   </div>
                //   {expanded[section] && (
                   
                //   )}
                // </div>
              ))} */}

              <div className="space-y-2 mt-2 max-h-[80vh] overflow-y-auto pr-2">
                <h1 className="text-xl flex  items-center justify-between font-semibold text-center text-gray-700">
                   <span>History</span><MdDelete onClick={handleDelete} className="text-2xl text-red-600 cursor-pointer" /> 
                </h1>
                <hr />
                {chatHistoryData.length > 0 && chatHistoryData?.map((item) => (
                  <div
                    key={item?._id}
                    className="p-2 border-b border-gray-300 cursor-pointer "
                    onClick={() => handleItemClick(item.title)}
                  >
                    <h3
                      onClick={() => {
                        toggleSidebar();
                        setConversationId(item.id);
                      }}
                      className="text-base font-semibold text-gray-700"
                    >
                      {item.title.slice(0, 25)}...
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[70%] w-[90%]">
          <br />
          <div className="w-full">
            {/* Sidebar Toggle Button placed below the user image */}
            <div className="w-[96%] mx-auto flex justify-between  items-center">
              {/* Sidebar Toggle Button */}
              <div className="bg-white  rounded-lg ">
                {!isSidebarVisible ? (
                  <FaTimes
                    className="cursor-pointer"
                    size={24}
                    onClick={toggleSidebar}
                  />
                ) : (
                  <FaBars
                    className="cursor-pointer"
                    size={24}
                    onClick={toggleSidebar}
                  />
                )}
              </div>
              {/* Edit Icon on the Right */}
              <div className="flex gap-3 items-center">
               <div> <button
                  onClick={handleNewChat}
                  className="flex items-center gap-2 bg-white p-3 rounded-md shadow-lg "
                >
                  new chat <FaEdit />

                </button>
                </div>
                  <Header />
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* {!inputData && (
            <div className="md:p-6  rounded-lg  mt-4">
              <div className="flex space-x-2 items-center">
                <h2 className="text-2xl font-bold m-0 min-w-[200px]">
                  {yesterday || "Today"}
                </h2>
                <hr className="border w-full border-gray-600 mt-2" />
              </div>
              <p className="mt-2 text-gray-700">

                {selectedMessage || "No message selected"}
              </p>
            </div>
          )} */}

          {/* {inputData && (
            <div className="flex items-center justify-end">
              <div className="md:p-6 rounded-lg mt-4  md:w-[650px]">
                <p className="text-gray-50 bg-[#b6bb92] px-5 py-2 rounded-lg text-justify">
                  {inputData && inputData}
                  
                </p>
              </div>
            </div>
          )} */}
          {/* {chats?.length > 0 && <div></div>} */}
          {chats?.length > 0 ? (
            <div
              ref={chatContainerRef}
              className=" max-h-[60vh] h-[60vh] lg:max-h-[65vh] lg:h-[65vh] overflow-auto shadow"
              // className="bg-[#f1f1f1f5] max-h-[60vh] h-[60vh] lg:max-h-[65vh] lg:h-[65vh] overflow-auto shadow"
            >
              <ChatDisplay isLoading={resLoading} chatsData={chats} />
            </div>
          ) : 
          <div className="h-[60vh] w-full space-y-4 flex justify-center items-center flex-col  border bg-[#f1f1f1f5] text-2xl lg:text-4xl text-gray-500 font-semibold">
              <h2 className="text-center">Whether you’re looking to buy or rent, <br /> I’m here to help you find your next home.</h2>
              {/* <h2>Find your Property !</h2> */}
               {/* <p className="text-xl lg:text-xl leading-10 text-center ">Whether you’re looking to buy or rent, <br /> I’m here to help you find your next home.</p> */}
              </div>}

          <div className="md:flex justify-center w-full">
            <div className="fixed bottom-4 flex justify-between w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 items-center ">
              <Link to={`/DiscoverFind`}>
                <img
                  src={LogoImage}
                  className="w-[60px] md:w-[100px] md:h-[90px]"
                  alt="logo"
                />
              </Link>

              <form
                onSubmit={handleSendMessage}
                className="flex w-full justify-between items-center gap-2  text-white"
              >
                {/* <div className="flex items-center justify-center md:p-2 rounded-full mr-3">
                  <span className="text-4xl">+</span>
                </div> */}
                {/* <form action=""></form> */}
                <input
                  size="lease"
                  name="message"
                  className=" text-sm shadow-md sm:text-base bg-[#FFFFFF] w-full py-3 px-3 rounded-md text-black"
                  placeholder={`I'm listening...`}
                />
                {resLoading ? (
                  <Spin className="p-2 border  rounded bg-white" />
                ) : (
                  <button className="p-2 bg-blue-600 rounded">
                    <RiSendPlane2Fill className="text-3xl" />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
