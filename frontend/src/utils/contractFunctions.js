import { ethers } from "ethers";
import { abiJson } from "./abi";

const MoodContractAddress = "0x4fe156f485597020af45E1282Dc2b463c67C9E01";
const MoodContractABI = abiJson.abi;
let MoodContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "maticmum");

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

export async function castVote(selectedCandidate) {
  // const mood = document.getElementById("mood").value;
  try {
    const setMoodPromise = MoodContract.castVote(selectedCandidate);
    await setMoodPromise;
    // show success massage to user
  } catch (err) {
    // console.log("error in castVote", error.message);
    console.log({ err });
    alert("You've already voted! Thanks")
  }
}
