import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

const VotingSheet = ({ open }) => {
  return (
    <BottomSheet hidden={open}>
      <h1>Hello</h1>
    </BottomSheet>
  );
};

export default VotingSheet;
