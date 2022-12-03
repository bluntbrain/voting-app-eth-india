import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  fetchElectionCandidates,
  fetchElections,
} from "../../utils/firebaseFunctions";

const VotingPage = () => {
  const [allElections, setAllElections] = useState([]);
  const [currentCandidates, setCurrentCandidates] = useState([]);

  // useEffect(() => {
  //   fetchElections().then((resp) => {
  //     console.log("hello", resp);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("finding", allElections[0]?.candidates);
  //   fetchElectionCandidates().then((resp) => {
  //     console.log("candidates", resp);
  //   });
  // }, [allElections]);

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
