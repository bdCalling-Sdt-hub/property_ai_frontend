
// import LogoImage from "../../../assets/auth/Logo.png";
import { useNavigate, useParams, } from "react-router-dom";

import { Form } from "antd"; // Import Ant Design Form
import { toast } from "sonner";
import { useResetPasswordMutation } from "../../../redux/features/auth/authApi";
import CustomButton from "../../../utils/CustomButton";
import CustomInput from "../../../utils/CustomInput";


const NewPassword = () => {
  const { email } = useParams();
  console.log(email)
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const submit = async (values) => {
    const { password } = values;  // Only extract the password value

    try {
      // Send only the password to the server
      const res = await resetPassword({  newPassword:password, otp:email });

      if (res.error) {
        toast.error(res.error.data.message);
      }
      if (res.data) {
        toast.success(res.data.message);
        navigate("/auth/login");  // Redirect to authentication page after successful reset
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b9be8c] via-[#b5bb82] to-[#b9be8ccb]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center px-5 py-10 gap-8 ">
      <div className="mt-5  px-8  p-5 rounded-md border-2 border-[#b5bb82]">
        {/* <img
            src={LogoImage}
            className="w-[100px] h-[90px]  mb-3  mx-auto"
            alt="Logo"
          /> */}
        <div className="mb-5 ">
          <h1 className="font-semibold text-xl flex items-center gap-2">
            Reset Password
          </h1>
        </div>

        {/* Ant Design Form */}
        <Form
          layout="vertical"
          onFinish={submit} // Ant Design's form submission handler
          initialValues={{ password: "", confirmPassword: "" }} // Initial values
        >
          {/* CustomInput wrapped inside Form.Item for validation */}
          <Form.Item
          label="New Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your new password",
              },
            ]}
          >
            <CustomInput isPassword type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item
          label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <CustomInput
              isPassword
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          {/* CustomButton for submission */}
          <Form.Item>
            <CustomButton loading={isLoading} border className="w-full text-white">
              Update Password
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default NewPassword;
