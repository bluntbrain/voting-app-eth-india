import React, { useState, useEffect } from "react";
import { fetchElectionCandidates } from "../../utils/firebaseFunctions";
import moment from "moment";
import Button from "../ui/Button";
import { castVote } from "../../utils/contractFunctions";

const VotingSheet = ({ electionId, name, noOfVotes, endDate, onClose }) => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(-1);
  const [isVoteCasted, setIsVoteCasted] = useState(false);

  useEffect(() => {
    fetchElectionCandidates(electionId).then((resp) => {
      electionId && setCandidates(resp);
    });
  }, [electionId]);

  const handleVoteClicked = () => {
    castVote(selectedCandidate);
    setIsVoteCasted(true);
  };

  return (
    <div className="flex flex-col w-full md:px-32 px-2 items-center">
      <div className="md:w-1/2 w-full flex flex-row my-5 items-center justify-center relative">
        <i
          className="uil uil-arrow-left text-4xl absolute left-0 transform transition duration-5000 hover:scale-105 cursor-pointer"
          onClick={onClose}
        />
        <p className="text-xl font-bold">{name}</p>
      </div>
      <div className="md:w-1/2 w-full relative">
        <img
          src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
          alt=""
          className="rounded-xl w-full md:h-60 h-40 object-cover"
        />
      </div>
      <p className="text-lg mt-4 mx-1">Total votes</p>
      <p className="text-green-600 text-4xl my-1 font-bold">{noOfVotes}</p>
      {!isVoteCasted && (
        <p className="text-lg mt-3 mx-1">
          Voting closes in {moment(endDate.toDate()).diff(moment(), "hours")}{" "}
          hours
        </p>
      )}
      {!isVoteCasted &&
        candidates.map((item) => {
          return (
            <div
              onClick={() => setSelectedCandidate(item?.candidateId)}
              key={item?.candidateId}
              className={`w-full md:w-1/2 bg-gray-100 my-2 py-2 px-3 rounded-lg border-2 ${
                item?.candidateId === selectedCandidate
                  ? "border-green-500"
                  : "border-gray-300"
              } flex flex-row justify-between cursor-pointer`}
            >
              <p>{item.name}</p>
              {item?.candidateId === selectedCandidate && (
                <i className="uil uil-check text-xl text-green-500" />
              )}
            </div>
          );
        })}
      {isVoteCasted ? (
        <div className="flex flex-col my-5">
          <iframe
            title="voteCasted"
            src="https://embed.lottiefiles.com/animation/50465"
          />
          <p className="text-gray-500">
            Congratulations. Your vote has been casted!
          </p>
        </div>
      ) : (
        <Button
          type="secondary"
          className="my-5 text-base md:w-1/5 w-full font-bold border-gray-300 border-2 px-2 py-2"
          onClick={handleVoteClicked}
          disabled={selectedCandidate === -1}
        >
          Cast vote
        </Button>
      )}
    </div>
  );
};

export default VotingSheet;
