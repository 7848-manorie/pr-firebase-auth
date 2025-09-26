import React from "react";
// import GoogleLogin from "../components/GoogleLogin"; // Ensure this path is correct
import GoogleLogin  from "../components/GoogleLogin"

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome Back </h1>
        <p className="text-gray-600 mb-6">Login with your Google account to continue</p>

        {/* Google Login Button Component */}
        <GoogleLogin />

        <div className="mt-6 text-sm text-gray-400">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-blue-500 hover:underline">Terms</a> and{" "}
          <a href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default Login;
