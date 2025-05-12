import { Link, useNavigate } from "react-router-dom";
import LogoImage from "../../../assets/auth/Group.png";
import Logo from "../../../assets/auth/Logo.png";
import { useGoogleLoginMutation } from "../../../redux/features/auth/authApi";
import SignInWithGooglePage from "../athetication/GoogleLogin";
import { toast } from "sonner";
import { loggedUser } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const SocialMedia = () => {
  const [googleLogin, { isLoading : googleLoader }] = useGoogleLoginMutation();
  const navigate = useNavigate()
  const dispatch = useDispatch()


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
    <div className="min-h-screen bg-gradient-to-br from-[#b6bb92] via-[#aaaf84c9] to-[#b6bb929f] mx-2 md:mx-0">
       <div className="flex justify-end pt-10 mr-1 md:pr-10">
        <Link className="px-7 py-2 bg-[#7c8061] text-white rounded-md" to="/chat">Skip now</Link>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="border-2 border-[#7c8061] p-10 rounded-xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-8">
            <img
              src={Logo} // You can replace this with your logo
              alt="Logo"
              className="w-[100px] h-[90px]"
            />
          </div>
          <div className="space-y-4">
          <SignInWithGooglePage loginWithGoogle={loginWithGoogle} googleLoader={googleLoader} />

            <button className="w-full py-3 px-6   border border-black rounded-lg flex items-center justify-center space-x-2 h">
              <img src={LogoImage} alt="Microsoft" className="w-6 h-6" />
              <span>Sign in with Microsoft</span>
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link to="/auth/register">
              <button className="bg-[#5454AA] text-white hover:underline  border border-black rounded-lg w-full py-3 px-6 ">
                Sign up as a New User
              </button>
            </Link>
          </div>
          <div className="mt-4 text-sm text-center text-gray-500">
            <p className="flex space-x-5 justify-center">
              <a href="#" className="hover:underline">
                <Link to="/PrivacyTerms">Privacy Terms</Link>
              </a>{" "}
              
              <a href="#" className="hover:underline">
                {" "}
                Privacy
              </a>{" "}
              
              <a href="#" className="hover:underline">
                {" "}
                <Link to='/FAQ'>
                FAQ
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
