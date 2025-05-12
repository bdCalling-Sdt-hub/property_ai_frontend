// import LogoImage from "../../../assets/auth/Logo.png";
import { LoadingOutlined } from "@ant-design/icons";
import { Checkbox, Form, Spin } from "antd";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGoogleLoginMutation, useLoginMutation } from "../../../redux/features/auth/authApi";
import { loggedUser } from "../../../redux/features/auth/authSlice";
import CustomInput from "../../../utils/CustomInput";
import SignInWithGooglePage from "../athetication/GoogleLogin";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [googleLogin, { isLoading : googleLoader }] = useGoogleLoginMutation();


  // manual login 
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password }).unwrap()
      if (!res.success) {
        // Show error message if login fails
        toast.error(res.error.data.message);
      } else {
        const user = res?.data;
        const token = res?.token;
        // console.log(token)
        // console.log(res.data)
        dispatch(loggedUser({ user, token }));
        toast.success(res?.message);
        navigate("/"); // Navigate to the root page after successful logina
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  // google login 
  const loginWithGoogle = async (credential) => {
    try {
      const res = await googleLogin(credential).unwrap()
      if (!res.success) {
        // Show error message if login fails
        toast.error(res.error.data.message);
      } else {
        const user = res?.userData;
        const token = res?.token;
        // console.log(token)
        // console.log(res.data)
        dispatch(loggedUser({ user, token }));
        toast.success(res?.message);
        navigate("/"); // Navigate to the root page after successful logina
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f1eee7]">
      <div className="flex items-center justify-end pt-10 mr-1 md:pr-10">
        <Link to="/chat" className="px-7 py-2 bg-[#7c8061] text-white rounded-md">Skip now</Link>
      </div>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center px-5 ">
          <div className="mt-5  px-8  p-5 rounded-md border-2 border-[#7c8061]">
            <div className="mb-3">
              {/* <img src={LogoImage} className="w-[100px] h-[90px]  mx-auto mb-3" alt="Logo" /> */}
              <h1 className="font-semibold text-xl ">Sign In</h1>
            </div>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="space-y-4"
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "The input is not a valid email!" },
                ]}
              >
                <CustomInput
                  type="email"
                  icon={HiOutlineMail}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <CustomInput
                  type="password"
                  icon={HiOutlineLockClosed}
                  placeholder="Password"
                  isPassword
                />
              </Form.Item>

              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox className="">Remember me</Checkbox>
                </Form.Item>
                <Link to="/auth/forget-password" className="text-[#5454AA]">
                  Forgot password?
                </Link>
              </div>

              {/* login with google  */}
              <div>
                {/* <button className="flex items-center justify-center py-2 px-4 bg-[#3269c0] text-white  w-full rounded-md">
                  <img
                    className="w-6 h-6 mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt=""
                  />{" "}
                  Google{" "}
                </button> */}
                <SignInWithGooglePage loginWithGoogle={loginWithGoogle} googleLoader={googleLoader} />
              </div>

              <Form.Item>
                {/* <CustomButton
                  loading={isLoading}
                  className="w-full bg-[#aac3bc]"
                  border={true}
                  
                >
                  Sign In
                </CustomButton> */}
                <button className="w-full bg-[#cfc8c7] py-3 rounded text-gray-700"> Sign In                 {isLoading &&  <Spin indicator={<LoadingOutlined spin />} size="small" />}
                </button>
              </Form.Item>


              <h1 className="text-center">
              Register as a new user{" "}
                <Link to="/auth/register" className="text-gray-500  underline">
                Sign Up
                </Link>
              </h1>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
