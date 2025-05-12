// import LogoImage from "../../../assets/auth/Logo.png";
import { LoadingOutlined } from "@ant-design/icons";
import { Form, Spin } from "antd";
import {
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGoogleLoginMutation, useRegisterMutation } from "../../../redux/features/auth/authApi";
import { loggedUser } from "../../../redux/features/auth/authSlice";
import CustomInput from "../../../utils/CustomInput";
import SignInWithGooglePage from "../athetication/GoogleLogin";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    try {
      const res = await register(values).unwrap();
      if (res?.code!==200) {
        // Show error message if login fails
        toast.error(res?.message);
      } else {
        toast.success(res?.message);
        navigate(`/auth/otp/${values?.email}`); // Navigate to the root page after successful login
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const [googleLogin, { isLoading : googleLoader }] = useGoogleLoginMutation();



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
    <div className="min-h-screen flex items-center justify-center bg-[#f1eee7]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center px-5 ">
        <div className="mt-5  px-8  p-5 rounded-md border-2  shadow">
          <div className="mb-3">
            {/* <img
              src={LogoImage}
              className="w-[100px] h-[90px]  mx-auto mb-3"
              alt="Logo"
            /> */}
            <h1 className="font-semibold text-xl">Sign Up</h1>
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
              label="User Name"
              name="name"
              rules={[
                { required: true, message: "Please Enter your User!" },
                { type: "User", message: "The input is not a valid User!" },
              ]}
            >
              <CustomInput
                type="text"
                icon={HiOutlineUser}
                placeholder="user Name"
              />
            </Form.Item>

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

            <div>
            <SignInWithGooglePage loginWithGoogle={loginWithGoogle} googleLoader={googleLoader} />

            </div>

            <Form.Item>
            <button className="w-full bg-[#cfc8c7] py-3 rounded text-gray-700"> Click to Register{isLoading &&  <Spin indicator={<LoadingOutlined spin />} size="small" />}
                </button>
            </Form.Item>

            <h1 className="text-center">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-gray-500  underline">
                Sign In
              </Link>
            </h1>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
