import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ethers } from "ethers";

const LandingPage = () => {
  const [walletAddress, setWalletAddress] = useState();

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
