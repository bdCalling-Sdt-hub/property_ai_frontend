/* eslint-disable react/no-unescaped-entities */
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, Upload } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "../../../redux/features/user/userApi";
import { imageBaseUrl } from "../../../utils/imageUrl";
import Loading from "../Loader";
import userIcon from "../../../assets/user.png";

// import LogoImage from "../../../assets/auth/Logo.png";
function PersonalInfo() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(null); // Store uploaded image URL
  const [imageFile, setImageFile] = useState(null); // Store uploaded image URL
  const [localImage, setLocalImage] = useState(null); // Store uploaded image URL

  const [isImageLocked, setIsImageLocked] = useState(false);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  const { data, isLoading } = useGetMyProfileQuery();
  const [updateProfile, { isLoading: resLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (data?.data) {
      const userData = {
        username: data?.data?.name,
        email: data?.data?.email,
        phone: data?.data?.phone,
      };
      setUser(userData);
      setUserImage(data?.data?.profilePictureUrl);
    }
  }, [data]);

  const handleSaveChange = async (value) => {
    // username: user?.name,
    // email: user?.email,
    // phone: user?.phone,
    const fromData = new FormData();

    if (!imageFile && !value?.username && !value?.phone) {
      toast.error("update feild input here !");
    }

    if (imageFile) {
      fromData.append("new_profile_picture", imageFile);
    }
    if (value?.username) {
      fromData.append("new_name", value?.username);
    }
    if (value?.phone) {
      fromData.append("new_phone_number", value?.phone);
    }

    try {
      const res = await updateProfile(fromData).unwrap();
      if (!res?.success) {
        return toast.error("update failed !");
      }
      setUserImage(null);
      return toast.success(res?.message || "update success ");
    } catch (err) {
      toast.error(err.message || "update failed !");
    }
  };

  const handleCancel = () => {
    form.resetFields();
    navigate(-1);
  };

  const handleImageChange = (file) => {
    setImageFile(file);
    setLocalImage(URL.createObjectURL(file));
  };

  const handleImageChangeButtonClick = () => {
    if (!isImageLocked) {
      setIsImageLocked(false); // Allow image change again if not locked
    }
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/auth/login");
  };

  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <div>user not found !</div>;
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
      {/* <Header /> */}
      <br />
      <br />
      <div className="bg-[#d3d0cc] w-full md:w-[50%] mx-auto rounded-md">
        <div className=" py-36  p-6 rounded-lg  w-full max-w-2xl mx-auto">
          {/* Profile Picture and Buttons */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 border rounded-full overflow-hidden">
                {/* Display the uploaded image or default placeholder */}
                <img
                  src={
                    localImage
                      ? localImage
                      : userImage
                      ? `${imageBaseUrl}/${userImage}`
                      : userIcon
                  } // Show local image or default image
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 space-x-1">
                  <div>
                    <Upload
                      className=""
                      showUploadList={false}
                      beforeUpload={handleImageChange} // Handle the file change
                      accept="image/*" // Accept only image files
                    >
                      <button
                        className="mr-1 px-2 py-1 rounded  bg-[#aac3bc]"
                        onClick={handleImageChangeButtonClick}
                      >
                        Change Picture
                      </button>
                    </Upload>
                  </div>
                  <div>
                    <Link to="/ChangePassword">
                      <Button type="default">Change Password</Button>
                    </Link>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="bg-[#edaa9d] px-3 rounded text-black"
                  >
                    Log Out
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Maximum size 5mb. Format jpg, jpeg, png.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSaveChange}
            initialValues={{
              username: user?.username,
              phone: user?.phone,
              email: user?.email,
            }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="User name"
                size="large" // Set input size to large
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Invalid email" },
              ]}
              initialValue={user}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large" // Set input size to large
                readOnly
              />
            </Form.Item>

            <Form.Item
              name="phone"
              // rules={[
              //   { required: true, message: "Please input your phone number!" },
              // ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Phone number"
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
                type="submit"
                className="bg-[#718f86] hover:bg-[#718f86] text-[#fff] px-3 rounded"
              >
                {!resLoading ? "Save Change" : <Spin />}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
