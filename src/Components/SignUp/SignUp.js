import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("Password must be 6 characters or more!");
      return;
    }
    if (password !== confirm) {
      setError("Your passwords did not match!");
      return;
    }
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="form-container bg-slate-50 w-5/6 sm:w-1/3 mx-auto mt-2 border-2 px-5 border-slate-300 drop-shadow-xl rounded-sm">
      <h2 className="text-3xl text-center py-3 font-serif">Sign Up</h2>
      <form onSubmit={handleSubmit} className="">
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
        <div className="form-control mb-1">
          <label
            className="block mb-1 text-md font-mono pl-2 text-slate-600"
            htmlFor="confirm"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            required
            className="rounded text-green-800 w-full py-1 px-2 border-2 mb-3"
          />
        </div>
        <input
          className="w-full rounded-sm py-1 mb-3 justify-center bg-orange-200 hover:bg-orange-300 text-slate-800 hover:text-slate-100"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p className="text-sm px-2 mb-3">
        Already have an account?{" "}
        <Link className="text-blue-500 underline" to="/login">
          Login!
        </Link>
      </p>
      <p className="text-red-400 text-sm px-2 mb-2">{error}</p>
      <hr className="mb-5" />
    </div>
  );
};

export default SignUp;
