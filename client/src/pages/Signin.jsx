import React, { useState } from "react";

import SigninForm from "./SigninForm.jsx";
import SignupForm from "./SignupForm.jsx";


const Signin = () => {

  const [currentMode, setCurrentMode] = useState("signin");

  return (
    <div className="min-h-screen flex flex-col items-center gap-6">

      <div className="w-full flex justify-center gap-4 mt-10">

        <button
          onClick={() => setCurrentMode("signin")}
          className="bg-blue-400 text-white py-2 px-4 rounded-lg"
        >
          SIGN IN
        </button>

        <button
          onClick={() => setCurrentMode("signup")}
          className="bg-blue-400 text-white py-2 px-4 rounded-lg"
        >
          SIGN UP
        </button>

      </div>

      {/* Form Area */}
      <div>
        {currentMode === "signin" ? (
          <SigninForm />
        ) : (
          <SignupForm />
        )}
      </div>

    </div>
  );
};

export default Signin;