import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiosPublic from "../../hooks/useaxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useaxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          console.log("User info updated");
          //Create
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user Added to Database hi");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign In Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Yummy Kitchen | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* For Name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* For Email  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Password  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 32,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Please, Input Password</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password Must be 6 Character long
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password Must be within 32 Character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password Must have 1 digit, 1 capital latter, 1 small latter
                    & 1 special character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                ></input>
              </div>
            </form>
            <p>
              <small>
                Already Have an Account? <Link to="/login">Log in</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
