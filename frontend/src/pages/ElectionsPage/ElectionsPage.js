import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Container from "../../components/ui/Container";
import ElectionCard from "../../components/ElectionCard";
import VotingSheet from "../../components/VotingSheet";
import MetamaskLogo from "../../assets/logo/MetamaskLogo";

const ElectionsPage = () => {
  const [allElections, setAllElections] = useState([]);
  const [isVotingSheetVisible, setIsVotingSheetVisible] = useState(false);

  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    await getDocs(collection(db, "elections")).then((data) => {
      const fetchedElections = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllElections(fetchedElections);
    });
  };

  const handleSearch = () => {
    console.log("Seach button clicked");
  };

  const handleVoteClicked = () => {
    console.log("Vote clicked");
    setIsVotingSheetVisible(!isVotingSheetVisible);
  };

  return (
    <>
      <Helmet>
        <title>Elections Page</title>
      </Helmet>
      <Container className="md:px-10 md:py-20 px-5 py-8">
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-full px-2 py-2 text-4xl">
            <h1 className="font-bold">Elections</h1>
            <button
              type="button"
              class="border-2 border-black px-2 py-2 bg-white rounded-xl w-1/4 text-green-500 text-sm"
            >
              Connected
            </button>
          </div>
          <div className="flex flex-row w-full px-5 rounded-l-full rounded-r-full my-4 py-2 text-2xl bg-gray-100">
            <i
              className="uil uil-search transform transition duration-5000 hover:scale-105 cursor-pointer text-gray-500"
              onClick={handleSearch}
            />
            <input
              type="text"
              className="outline-0 px-4 w-full bg-gray-100 placeholder-gray-500"
              placeholder="Search"
            />
          </div>
          <div className="px-4 py-2 w-full">
            <div className="text-md inline-flex items-center cursor-pointer font-bold leading-sm px-3 py-1 text-black bg-gray-100 rounded-full mx-1 transform transition duration-5000 hover:scale-105">
              <i className="uil uil-clock-nine" />
              <span className="mx-1">Ongoing</span>
            </div>
            <div className="text-md inline-flex items-center cursor-pointer font-bold leading-sm px-3 py-1 text-gray-500 rounded-full mx-1 transform transition duration-5000 hover:scale-105">
              <i className="uil uil-archive" />
              <span className="mx-1">Archived</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:px-48 px-1 my-4">
            {allElections.length !== 0 &&
              allElections.map((election) => (
                <div key={election.id} className="my-4 w-full">
                  <ElectionCard
                    name={election.name}
                    noOfVotes={election.noOfVotes}
                    handleVoteClicked={handleVoteClicked}
                  />
                </div>
              ))}
          </div>
          {isVotingSheetVisible && (
            <VotingSheet onClose={() => setIsVotingSheetVisible(false)} />
          )}
        </div>
      </Container>
    </>
  );
};

export default ElectionsPage;
