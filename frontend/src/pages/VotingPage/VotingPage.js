import React from "react";
import { Helmet } from "react-helmet";

const VotingPage = () => {
  return (
    <>
      <Helmet>
        <title>Voting Page</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Voting Page</h1>
      </div>
    </>
  );
};

export default VotingPage;
