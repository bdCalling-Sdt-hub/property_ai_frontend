/* eslint-disable react/no-unescaped-entities */

import moment from "moment/moment";
import { usePrivacyQuery } from "../../../redux/features/setting/settingApi";
import Header from "../Header/Header";
import Loading from "../Loader";
// import LogoImage from "../../../assets/auth/Logo.png";
function PrivacyTerms() {

  const {data, isLoading} = usePrivacyQuery()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-[#f1eee7]">
      <div className="flex justify-end   pt-10 mr-1 md:pr-10">
        <Header />
      </div>
      <br />
      <br />
      <div className=" md:p-8">
        <div className="w-full min-h-[50vh] md:w-[90%] lg:w-[80%]  mx-auto bg-[#FFFFFF80] p-4 md:p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Privacy Terms
          </h1>
          <p className="text-xl  text-[#000080] font-bold mt-2">
            Last Update :  {moment(data?.data?.updatedAt).format("d-mm-yy")}
          </p>

            <p>            {data?.data?.privacy_terms}
            </p>

        </div>
      </div>
    </div>
  );
}

export default PrivacyTerms;
