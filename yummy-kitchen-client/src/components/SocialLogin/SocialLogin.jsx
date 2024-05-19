import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useaxiosPublic from "../../hooks/useaxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useaxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignin} className="btn">
          <FaGoogle className="mr-4"></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
