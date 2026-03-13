import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col py-10 items-center justify-center bg-gray-100 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Join <span className="text-red-500">Blushora</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Create an account to start your glow-up journey
        </p>
      </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <User size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <Mail size={18} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <Lock size={18} className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the{" "}
              <span className="text-red-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-red-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:opacity-90 transition">
            Create Account
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-sm text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-red-500 cursor-pointer font-medium">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
