/* eslint-disable react/no-unescaped-entities */

import { useParams } from "react-router-dom";
import { useGetBlogQuery } from "../../../redux/features/chat/chatApi";
import { imageBaseUrl } from "../../../utils/imageUrl";

// import LogoImage from "../../../assets/auth/Logo.png";
const DiscoverDetails = () => {
    const {id} = useParams()
    const {data} = useGetBlogQuery(id)
    console.log(data);
  console.log(id);
  return (
    <div className="min-h-screen bg-[#f1eee7]">
       <div className="p-5 mx-auto w-full md:w-3/4 lg:w-7/12">
          <figure className="flex gap-5 flex-wrap">
            {data?.data?.images?.length > 0 && data?.data?.images?.map((image, i)=> <img className="max-w-[45%] rounded " key={i} src={`${imageBaseUrl}/${image}`} />) }
          </figure>
           <div className="mt-10">
             <h1 className="text-xl md:text-3xl lg:text-2xl  xl:text-4xl font-bold ">{data?.data?.name}</h1>
             <br />
             <p className="text-sm md:text-lg text-justify">{data?.data?.description}</p>
               
           </div>
        </div>
    {/* <div className="min-h-screen bg-gradient-to-t from-[#b6bb92] to-[#b6bb92c7] "> */}
      {/* <div className="flex  justify-center">
        <div className="p-4 md:p-8 md:w-[80%] lg:w-[50%] w-full">
          <img src="https://i.ibb.co.com/cKdRwDYB/Rectangle-18852.png" alt="" />
           <div className="w-full md:w-[97%] lg:w-[90%] mx-auto mt-10">
             <h1 className="text-xl md:text-3xl lg:text-2xl  xl:text-4xl font-bold ">Discover the world's hidden gems</h1>
             <br />
             <p className="text-sm md:text-lg text-justify">
             One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.
             </p>
               <br /><br />
             <h1 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl font-bold">Discover the world's hidden gems</h1>
             <br />
             <p className="text-sm md:text-lg text-justify">
             One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.
             </p>
           </div>
        </div>

        <div className="p-4 md:p-8 md:w-[80%] lg:w-[50%] w-full">
  <img src="https://i.ibb.co.com/cKdRwDYB/Rectangle-18852.png" alt="" />
   <div className="w-full md:w-[97%] lg:w-[90%] mx-auto mt-10">
     <h1 className="text-xl md:text-3xl lg:text-2xl  xl:text-4xl font-bold ">Discover the world's hidden gems</h1>
     <br />
     <p className="text-sm md:text-lg text-justify">
     One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.
     </p>
       <br /><br />
     <h1 className="text-xl md:text-3xl lg:text-2xl xl:text-4xl font-bold">Discover the world's hidden gems</h1>
     <br />
     <p className="text-sm md:text-lg text-justify">
     One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.One of the primary responsibilities of property managers is handling tenants. This includes finding and screening tenants, collecting rent, addressing complaints, and managing lease agreements. Effective communication with tenants helps build trust and ensures a smooth rental experience.
     </p>
   </div>
</div>
      </div> */}
    </div>
  );
};

export default DiscoverDetails;


