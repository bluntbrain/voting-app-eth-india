import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import {
  checkIfVoterIsRegistered,
  registerVoter,
  registerVoterForAElection,
} from "../../utils/firebaseFunctions";
import MetamaskLogo from "../../assets/logo/MetamaskLogo.js";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await localStorage.setItem("wallet-address", accounts[0]);
      navigate("/elections");
    } catch {
      console.log("Error connecting");
    }
  };

  const handleInteract = () => {
    if (typeof window.ethereum !== "undefined") {
      handleConnectWallet();

      // const provider = new ethers.providers.Web3Provider(window.ethereum);

      // console.log({ provider });
    }
  };

  return (
    <>
      <Helmet>
        <title>Welcome to Web3 Voting</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <button
          type="button"
          onClick={handleInteract}
          className="border-2 border-black px-2 py-2 bg-white rounded-xl md:w-1/4 w-full transform transition duration-5000 hover:scale-105"
        >
          <span className="text-4xl font-bold">Login with</span>
          <MetamaskLogo />
        </button>
      </div>
    </>
  );
};

export default LandingPage;
