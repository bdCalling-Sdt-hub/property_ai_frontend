
// import LogoImage from "../../../assets/auth/Logo.png";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../../utils/CustomButton";

import { toast } from "sonner";
import { useForgetOtpVerifyMutation, useForgotPasswordMutation, } from "../../../redux/features/auth/authApi";

const ForgetOtpValidation = () => {
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();
  const [forgetOtpVerify, { isLoading }] = useForgetOtpVerifyMutation();

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };
  const handleMatchOtp = async () => {

    try {
      const res = await forgetOtpVerify({
        otp: otp
      }).unwrap();
      if (res?.statusCode!==200) {
        toast.error(res?.message);
        return
      }
        toast.success(res?.message);
        navigate(`/auth/new-password/${otp}`);
      
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleResendPassword = async () => {
    try {
      const res = await forgotPassword({ email }).unwrap();
      if (res?.code!==200) {
        toast.error(res?.message);
        return
      }
        toast.success(res?.message);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#bcc288] via-[#b6bb86] to-[#b9be8ce0]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center  px-5 py-10 gap-8">
      
      <div className="mt-5  px-8  p-5 rounded-md border-2 border-[#b9be8c]">
        {/* <img
            src={LogoImage}
            className="w-[100px] h-[90px]  mb-3  mx-auto"
            alt="Logo"
          /> */}
        <div className="mb-5 space-y-5">
          <h1 className="font-semibold text-xl flex items-center gap-2 ">
            OTP Verification
          </h1>
          <h1 className="">Check your email to see the verification code</h1>
        </div>
        <OTPInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-container"
          inputStyle={{
            width: "100%",
            maxWidth: "6.5rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            border: "1px solid #1397D5",
            textAlign: "center",
            outline: "none",
            borderRadius: "5px",
          }}
        />
        <div onClick={handleMatchOtp} className="mt-5">
          <CustomButton loading={isLoading} border className="w-full text-white">
            Verify
          </CustomButton>
        </div>
        <div className="flex justify-between items-center my-4">
          <h1 className="">Didn’t receive code?</h1>
          <button onClick={handleResendPassword} className="text-[#8e926b]">
            Resend
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ForgetOtpValidation;