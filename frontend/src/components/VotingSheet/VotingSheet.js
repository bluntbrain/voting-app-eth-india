import React from "react";
import BottomSheet from "bottom-sheet-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const VotingSheet = ({ open, onClose }) => {
  return (
    <BottomSheet
      isExpandable={true}
      onClose={onClose}
      containerClassName="h-full"
    >
      <Container className="md:px-10 md:py-20 px-5 py-8">
        <h1>Hello</h1>
      </Container>
    </BottomSheet>
  );
};

export default VotingSheet;
