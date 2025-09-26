import React from "react";
import Logout from "../components/logout";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800"> Home Page</h1>

        <img
          src={user.picture}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
        />

        <h2 className="text-xl font-semibold text-gray-700">Welcome, {user.name}</h2>
        <p className="text-gray-500 mb-6">{user.email}</p>

        <Logout />
      </div>
    </div>
  );
};

export default Home;
