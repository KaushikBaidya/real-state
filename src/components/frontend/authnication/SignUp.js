import React, { useState } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import { usePostData } from "../../../hooks/dataApi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/context";

const schema = yup.object({
  fullName: yup.string().required("Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8).max(16),
});

const SignUp = () => {
  const history = useHistory();
  const location = useLocation();
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fullName, email, password } = errors;

  let { from } = location.state || { from: { pathname: "/dashboard" } };

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: "/auth/signup",
        formData: formData,
      });
      if (status === 201) {
        reset();
        value.setUser(data.token);
        history.push(from);
        toast.success(data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data.message);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto flex justify-center ">
        <div className="bg-white p-12 my-8 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Create Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="Name"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                {...register("fullName")}
              />
              <p className="text-red-500">{fullName?.message}</p>
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                {...register("email")}
              />
              <p className="text-red-500">{email?.message}</p>
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
                {...register("password")}
              />
              <p className="text-red-500">{password?.message}</p>
            </div>

            <button
              className="block w-full bg-yellow-300 p-4 rounded text-yellow-900 hover:bg-darkBlue hover:text-white transition duration-300"
              disabled={submitting}
            >
              Sign Up
            </button>
          </form>
          <div>
            <p className="text-sm text-center mt-6">
              Already Account
              <Link to="/signin" className="text-indigo-600 hover:underline">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
