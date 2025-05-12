import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../../utils/imageUrl";
import userIcon from "../../../assets/user.png";

const Header = () => {
  // Assuming you have a state that tracks the login status
  const user = useSelector(state=>state?.auth?.user)
  return (
    <div>
      <div className="flex justify-end pt-5">
        {user ? <Link to={'/profile'}><img className="border h-12 w-12 rounded-full object-cover shadow" src={user?.profilePictureUrl ?  `${imageBaseUrl}/${user?.profilePictureUrl}` : userIcon} alt={user?.name} /></Link> :<Link to="/auth/login">
                  <button className="px-7 py-3 text-gray-700 rounded-md text-lg">
                    Sign in
                  </button>
                </Link>}
      </div>
    </div>
  );
};

export default Header;
