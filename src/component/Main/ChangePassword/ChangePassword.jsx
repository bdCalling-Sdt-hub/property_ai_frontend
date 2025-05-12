/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input, message, Spin } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import userIcon from "../../../assets/user.png";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { useGetMyProfileQuery } from "../../../redux/features/user/userApi";
import { imageBaseUrl } from "../../../utils/imageUrl";

// import LogoImage from "../../../assets/auth/Logo.png";
function ChangePassword() {
  const [form] = Form.useForm();
  const [isImageLocked, setIsImageLocked] = useState(false);
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const {data, isLoading} = useGetMyProfileQuery()
  const [changePassword] = useChangePasswordMutation()

  
  useEffect(()=>{
    if (data?.data) {
      setUser(data?.data)
    }
  },[data])

  const handleSaveChange = async(value) => {
    console.log(value);
  try{
    const {confirmPassword, newPassword, oldPassword} = value 
    if (!oldPassword) {
      return toast.error( "provide old password ! ")
    }
    if (!confirmPassword || !newPassword) {
      return toast.error( "provide confirm & new password ! ")
    }
    if (confirmPassword !== newPassword) {
      return toast.error( "provide confirm & new same password ! ")
    }

    const res = await changePassword({old_password:oldPassword,
      new_password:newPassword}).unwrap()

      if (!res?.success) {
        return toast.error( " password update failed ! ")
      }
       toast.success(res?.message || "password update success !")
      navigate('/Profile')
       

    message.success("Profile updated successfully!");
  }catch(err){
    toast.error(err?.message || "update failed ")
  }
  };

  const handleCancel = () => {
    form.resetFields();
    navigate(-1)
  };



  const handleImageChangeButtonClick = () => {
    if (!isImageLocked) {
      setIsImageLocked(false); // Allow image change again if not locked
    }
  };

  if (isLoading) {
    return <Spin />
  }

  return (
    <div className="min-h-screen bg-[#f1eee7] ">
      {/* <div className="flex justify-end   pt-10 mr-1 md:pr-10">
        <Link to="/auth/login">
          <button className="px-7 py-3 bg-[#b6bb92] text-white rounded-md text-2xl">
            Login
          </button>
        </Link>
      </div> */}
      <br />
      <br />
      <div className="bg-[#d3d0cc] w-full md:w-[50%] mx-auto rounded-md">
        <div className=" py-36  p-6 rounded-lg  w-full max-w-2xl mx-auto">
          {/* Profile Picture and Buttons */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                {/* Display the uploaded image or default placeholder */}
                <img 
                src={`${imageBaseUrl}/${user?.profilePictureUrl}` || userIcon} // Show local image or default image
                     alt="Profile"
                     className="w-full h-full object-cover"
                   />
              </div>
              <div>
                <div className="flex space-x-1">
                  <div>
                <Link to={'/Profile'}> 
                <button
                        className="mr-1 px-4 rounded text-black py-1 bg-[#fff]"
                        type="primary"
                        onClick={handleImageChangeButtonClick}
                      >
                        Profile
                      </button>
                      </Link>
                  </div>
                  {/* <div>
                    <Link to="/ChangePassword">
                      <Button type="default">Change Password</Button>
                    </Link>
                  </div> */}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Maximum size 5mb. Format jpg, jpeg, png.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <Form form={form} layout="vertical" onFinish={handleSaveChange}>
            <Form.Item
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Current Password!",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Current Password"
                size="large" // Set input size to large
              />
            </Form.Item>

            <Form.Item
              name="newPassword"
              rules={[
                { required: true, message: "Please input your New Password!" },
                { type: "password", message: "Invalid password" },
              ]}
            >
              <Input
                type="password"
                placeholder="New Password"
                size="large" // Set input size to large
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Confirm Password"
                size="large" // Set input size to large
              />
            </Form.Item>

            <div className="flex justify-end space-x-4 mt-8">
              <Button
                size="large"
                type="default"
                className="text-red-500"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <button
                size="large"
                type="primary"
                className="bg-[#718f86] hover:bg-[#718f86] text-[#fff] px-3 rounded"
                >
                Save Change
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
