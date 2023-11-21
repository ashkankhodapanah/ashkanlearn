import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validationSchema from "../../Services/Error";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../features/Auth/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    Yup.reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: null });
      })
      .catch((error) => {
        setErrors({ ...errors, [name]: error.message });
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(login(formData));
    // console.log(response.payload);
    if (response.payload === "Request failed with status code 401") {
      // نمایش پیام خطا
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: response.payload.massage,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      }).then(() => {
        // انتقال به صفحه home
        navigate("/");
      });
    }
  };

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="identifier"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="identifier"
                  name="identifier"
                  type="identifier"
                  autoComplete="identifier"
                  required
                  value={formData.identifier}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.identifier && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.identifier}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-yellow-600 hover:text-orange-600"
                  >
                    forgot-password
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-yellow-600 hover:text-orange-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
