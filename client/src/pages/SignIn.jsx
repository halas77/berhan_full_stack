import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));
      console.log(res);
      reset();
    } catch (err) {
      setError("Email or password Invalid.");
      console.log(err);
    }
  };

  return (
    <div className="flex gap-20 h-screen w-full">
      {/* left */}
      <div className="w-3/5 hidden sm:flex justify-center items-center bg-gradient-to-b from-yellow-400 to-yellow-700">
        <img src={"/login.png"} width={500} height={500} alt="Image"></img>
      </div>

      {/* right */}
      <div className="bg-white flex flex-col justify-center h-screen w-full">
        <form
          className="max-w-[450px] w-full mx-auto bg-gray-50 shadow-lg px-10 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl font-bold text-center py-6">
            Berhan Platform
          </h2>

          <div className="flex flex-col py-2">
            <label className="font-semibold">Email</label>
            <input
              className="border p-2 rounded-md"
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label className="font-semibold">Password</label>
            <input
              className="border p-2 rounded-md"
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="border w-full my-5 py-2 bg-yellow-500 text-white disabled:bg-indigo-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
