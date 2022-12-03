import React, { useState, useEffect } from "react";
import { fetchElectionCandidates } from "../../utils/firebaseFunctions";
import Button from "../ui/Button";
import { ethers } from "ethers";
import { abiJson } from "../../utils/abi";
import { castVote } from "../../utils/contractFunctions";

const VotingSheet = ({ electionId, onClose }) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(-1);

  useEffect(() => {
    fetchElectionCandidates(electionId).then((resp) => {
      console.log("gettin cand here", resp);
      electionId && setCandidates(resp);
    });
  }, [electionId]);

  const handleVoteClicked = () => {
    console.log("handleVoteClicked");
    castVote(selectedCandidate);
    console.log("handleVoteClicked");
  };

  return (
    <div className="flex flex-col w-full md:px-32 px-2 items-center">
      <div className="md:w-1/2 w-full flex flex-row my-5 items-center justify-center relative">
        <i
          className="uil uil-arrow-left text-4xl absolute left-0 transform transition duration-5000 hover:scale-105 cursor-pointer"
          onClick={onClose}
        />
        <p className="text-xl font-bold">Karnataka Elections 2022</p>
      </div>
      <div className="md:w-1/2 w-full relative">
        <img
          src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
          alt=""
          className="rounded-xl w-full md:h-60 h-40 object-cover"
        />
      </div>
      <p className="text-lg mt-4 mx-1">Total votes</p>
      <p className="text-green-600 text-4xl my-1 font-bold">2500</p>
      <p className="text-lg mt-3 mx-1">Voting closes in 8 hours</p>
      <p>{selectedCandidate}</p>
      {candidates.map((item, index) => {
        return (
          <div onClick={() => setSelectedCandidate(item?.candidateId)}>
            <p>{item.name}</p>
          </div>
        );
      })}
      <Button
        type="secondary"
        className="my-5 text-base md:w-1/5 w-full font-bold"
        onClick={handleVoteClicked}
      >
        Cast vote
      </Button>
    </div>
  );
};

export default VotingSheet;
