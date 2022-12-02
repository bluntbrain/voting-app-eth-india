import React from "react";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Web3 Voting</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Web3 Voting</h1>
      </div>
    </>
  );
};

export default LandingPage;
