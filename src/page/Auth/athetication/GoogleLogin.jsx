/* eslint-disable react/prop-types */
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Spin } from "antd";
 
// Define the googleAuthClientId
const googleAuthClientId = "26923651394-ofin3np9rm8j30nvek8l4r5dub4tie9c.apps.googleusercontent.com"; // Replace with your actual Google client ID
 
const SignInWithGooglePage = ({loginWithGoogle, googleLoader}) => {
  const handleLogin = (response) => {
    loginWithGoogle(response);
  };
 
  const handleError = () => {
    console.log("Google login failed");
  };
 
  return (
<GoogleOAuthProvider clientId={googleAuthClientId}>
<div>
 {!googleLoader ? <GoogleLogin
          onSuccess={handleLogin}
          onError={handleError} // Using onError instead of onFailure
        /> :  <div className="border text-center py-1 rounded" > <Spin size="small" /></div>}
</div>
</GoogleOAuthProvider>
  );
};
 
export default SignInWithGooglePage;