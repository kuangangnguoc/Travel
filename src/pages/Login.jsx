import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth-context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-app/firebase-auth";
import Loading from "../components/Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  document.title = "Register";
  const { userInfo } = useAuth();
  useEffect(() => {
    console.log(userInfo);
    if (userInfo?.email) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleLogin = async (value) => {
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      toast.success("Successfully!!!");
      navigate("/");
    } catch (error) {
      if (error.message.includes("wrong-password"))
        toast.error("It seems your password was wrong");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-[1200px] h-[600px] bg-[#F9F7F1] rounded-xl shadow-xl flex items-center justify-center">
        <form
          action=""
          className="flex flex-col items-center justify-center w-[70%]"
          onSubmit={handleSubmit(handleLogin)}
        >
          <NavLink to={"/"}>
            <img src="logo.svg" alt="" className="bg-black" />
          </NavLink>
          <h3 className="text-5xl font-extrabold">Login</h3>
          <div className="flex w-full gap-10">
            <div className="flex flex-col w-full gap-3 mt-10">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                name="email"
                placeholder="Enter your email address"
                className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
              />
              {errors.mail && <p role="alert">{errors.mail?.message}</p>}
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="flex flex-col w-full gap-3 mt-10">
              <label htmlFor="password">Password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="relative w-[200px] h-[80px] mt-16 rounded-lg bg-[#ED4949] text-white font-bold text-xl"
          >
            {!isSubmitting ? <p>Login</p> : <Loading></Loading>}
          </button>

          <NavLink className="mt-4" to={"/register"}>
            You have an account? Register
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
