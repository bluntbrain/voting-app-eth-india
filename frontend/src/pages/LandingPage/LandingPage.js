import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ethers } from "ethers";
import {
  checkIfVoterIsRegistered,
  registerVoter,
  registerVoterForAElection,
} from "../../utils/firebaseFunctions";

const LandingPage = () => {
  const [walletAddress, setWalletAddress] = useState();

  // useEffect(() => {
  //   // console.log("checkIfVoterIsRegistered start");
  //   // registerVoterForAElection("8200608175", "1234").then((res) => {
  //   //   console.log("registerVoterForAElection FINAL", res);
  //   // });

  //   // checkIfVoterIsRegistered("8200608175").then((res) => {
  //   //     console.log("checkIfVoterIsRegistered", res);
  //   //   });

  //   // registerVoter("8200608179", "ishan", "In", "999999").then((res) => {
  //   //   console.log("registered", res);
  //   // });
  // }, []);

  const handleConnectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts);
    } catch {
      console.log("Error connecting");
    }
  };

  const handleInteract = async () => {
    if (typeof window.ethereum !== "undefined") {
      await handleConnectWallet();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      console.log({ provider });
    }
  };

  return (
    <>
      <Helmet>
        <title>Welcome to Web3 Voting</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Web3 Voting</h1>
        {walletAddress ? (
          walletAddress.map((address, index) => (
            <p className="my-5 text-2xl" key={index}>
              {address}
            </p>
          ))
        ) : (
          <button onClick={handleInteract}>Connect Wallet</button>
        )}
      </div>
    </>
  );
};

export default LandingPage;
