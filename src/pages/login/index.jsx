import React from "react";
import { useRouter } from "next/router";
import { Axios } from "../../core/axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/store/slices/uiSlices";
import { authActions } from "../../redux/store/slices/authSlice";
import Cookies from "js-cookie";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const router = useRouter();
  // if (router.asPath.includes("/login")) {
  //   dispatch(uiActions.setLayout());
  // }

  //Admin Login function
  const login = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let config = {
      method: "post",
      url: "/admin-auth/login",
      data: {
        email,
        password,
      },
    };

    const { data } = await Axios(config);
    dispatch(authActions.setToken({ token: data }));
    router.push("/");
  };

  return (
    <div className='mt-36'>
      <div className='bg-white p-8 mx-auto w-[550px] h-[450px] shadow-md '>
        <h2 className='text-2xl font-semibold text-[#1EB3A6] text-center'>
          Log into your account
        </h2>
        <form
          className='w-full flex flex-col justify-center gap-7 mt-10'
          onSubmit={login}>
          <div>
            <label htmlFor='username' className='text-xs text-gray-500'>
              Email
            </label>
            <input
              type='email'
              name='username'
              id='username'
              className='w-full py-1 border-b-2 border-[#1EB3A6] outline-none text-gray-600'
              ref={emailRef}
            />
          </div>
          <div>
            <label htmlFor='password' className='text-xs text-gray-500'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='w-full py-1 border-b-2 border-[#1EB3A6] outline-none text-gray-600'
              ref={passwordRef}
            />
          </div>
          <div className='flex justify-start items-start gap-1 -mt-3'>
            <input type='checkbox' name='remember' id='checkbox' />
            <label
              htmlFor='checkbox'
              className='text-xs text-gray-500 mt-[-1px]'>
              Remember password
            </label>
          </div>
          <div>
            <button className='w-full py-3 font-semibold bg-[#1EB3A6] text-white rounded'>
              Log In
            </button>
          </div>
        </form>
        <div className='text-center mt-3'>
          <a href='#' className='text-sm text-[#1EB3A6]'>
            Forgot Password? Get Help
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
