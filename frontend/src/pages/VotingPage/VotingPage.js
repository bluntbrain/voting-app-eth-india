import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const VotingPage = () => {
  const [allElections, setAllElections] = useState([]);
  const [currentCandidates, setCurrentCandidates] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetchElections();
  }, []);

  useEffect(() => {
    console.log("finding", allElections[0]?.candidates);
    fetchElectionCandidates();
  }, [allElections]);

  const fetchElections = async () => {
    await getDocs(collection(db, "elections")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllElections(newData);
      console.log(newData);
    });
  };

  const fetchElectionCandidates = async () => {
    await getDocs(collection(db, "candidates")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      let filteredCandidates = newData.filter(checkIsValidCandidate);
      setCurrentCandidates(filteredCandidates);
      console.log("filteredCandidates", filteredCandidates);
    });
  };

  function checkIsValidCandidate(item) {
    if (allElections[0].candidates.includes(item.id)) return true;
    else return false;
  }

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
