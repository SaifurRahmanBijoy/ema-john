import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container bg-slate-50 w-5/6 sm:w-1/3 mx-auto mt-2 border-2 border-slate-300 drop-shadow-xl rounded-sm">
      <h2 className="text-3xl text-center py-3 font-serif">Login</h2>
      <form className="px-5">
        <div className="form-control mb-1">
          <label
            className="block mb-1 text-md font-mono pl-2 text-slate-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="rounded text-green-800 w-full py-1 px-2 border-2 mb-3"
          />
        </div>
        <div className="form-control mb-1">
          <label
            className="block mb-1 text-md font-mono pl-2 text-slate-600"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="rounded text-green-800 w-full py-1 px-2 border-2 mb-3"
          />
        </div>
        <input
          className="w-full rounded-sm py-1 mb-3 justify-center bg-orange-200 hover:bg-orange-300 text-slate-800 hover:text-slate-100"
          type="submit"
          value="Login"
        />
      </form>
      <p className="text-sm px-7 mb-3">
        New to Ema-John?{" "}
        <Link className="text-blue-500 underline" to="/signup">
          Create a new account!
        </Link>
      </p>
    </div>
  );
};

export default Login;
