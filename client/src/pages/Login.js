import React from "react";
import SignUp from "../components/SignIn";

const LogIn = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <SignUp />
        </div>
      </div>
    </main>
  );
};

export default LogIn;
