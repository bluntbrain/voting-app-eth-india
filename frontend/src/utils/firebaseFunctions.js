import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export const fetchElections = async () => {
  await getDocs(collection(db, "elections")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });
};

export const fetchElectionCandidates = async (electionId) => {
  await getDocs(collection(db, "candidates")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    let filteredCandidates = newData.filter((item) => {
      if (filteredCandidates[0].candidates.includes(item.id)) return true;
      else return false;
    });
    console.log("filteredCandidates", filteredCandidates);
    return filteredCandidates;
  });
};

export const checkIfVoterIsRegistered = async (phone) => {
  // Add a new document in collection "cities"
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "voters", phone);
    getDoc(docRef).then((docSnap) => {
      console.log("XXXXXX", docSnap.data());
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        resolve({ userExists: true });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        resolve({ userExists: false });
      }
    });
  });
};

export const registerVoter = (phone, name, country, uid) => {
  // Add a new document in collection "cities"
  return new Promise((resolve, reject) => {
    try {
      setDoc(doc(db, "voters", phone), {
        phone: phone,
        name: name,
        country: country,
        uid: uid,
      });
      resolve({ success: true });
    } catch (error) {
      resolve({ success: false });
    }
  });
};

export const registerVoterForAElection = (phone, electionId, ethAddress) => {
  console.log("registerVoterForAElection 1");

  // check if user is present in white list provided by government / person organizing elections

  // Add a new document in collection "cities"
  return new Promise((resolve, reject) => {
    console.log("registerVoterForAElection 2");
    const washingtonRef = doc(db, "elections", electionId);

    // Atomically add a new region to the "regions" array field.
    updateDoc(washingtonRef, {
      regions: arrayUnion(ethAddress),
    })
      .then((resp) => {
        resolve({ success: true });
        console.log("registerVoterForAElection 3", resp);
      })
      .catch((err) => {
        resolve({ success: false });
      });
  });
};

export const voteFunction = () => {
  // priyansh will write
};
