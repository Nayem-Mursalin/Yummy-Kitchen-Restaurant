import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleSignin = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
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
