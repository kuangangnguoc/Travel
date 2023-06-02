import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../context/auth-context";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "../components/Loading";

const Register = () => {
  const schemaValidate = yup.object().shape({
    name: yup.string().required("Please your name"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please your email"),
    password: yup
      .string()
      .required("Please your password")
      .min(6, "Your password must be at least 8 characters or greater"),
  });
  const navigate = useNavigate();
  document.title = "Register";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaValidate),
  });
  const { userInfo } = useAuth();

  useEffect(() => {
    console.log(userInfo);
    if (userInfo?.email) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSignUp = async (value) => {
    console.log(value);
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, value.email, value.password);

    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...value,
      createdAt: serverTimestamp(),
    });
    navigate("/");
    toast.success("Successfully!!!");
  };

  useEffect(() => {
    const errorsMessage = Object.values(errors);
    if (errorsMessage.length > 0) {
      toast.error(errorsMessage[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-[1200px] sm:h-[1000px] h-[600px] bg-[#F9F7F1] rounded-xl shadow-xl flex items-center justify-center">
        <form
          action=""
          className="flex flex-col items-center justify-center w-[70%]"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <NavLink to={"/"}>
            <img src="logo.svg" alt="" className="bg-black" />
          </NavLink>
          <h3 className="text-5xl font-extrabold">Register</h3>
          <div className="flex w-full gap-10 sm:flex-col sm:gap-0">
            <div className="flex flex-col w-full gap-3 mt-10 ">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Enter your name"
                className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
              />
            </div>
            <div className="flex flex-col w-full gap-3 mt-10">
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="Enter your email"
                className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
              />
            </div>
          </div>
          <div className="flex w-full gap-10 sm:flex-col sm:gap-0">
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
            <div className="flex flex-col w-full gap-3 mt-10">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                {...register("confirmpassword")}
                type="password"
                name="confirmpassword"
                placeholder="Please confirm your password"
                className="px-5 py-3 border border-[#EAEAEA] rounded-sm outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="relative w-[200px] h-[80px] mt-16 rounded-lg bg-[#ED4949] text-white font-bold text-xl"
          >
            {!isSubmitting ? <p>Register</p> : <Loading></Loading>}
          </button>
          <NavLink className="mt-4" to={"/login"}>
            You have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
