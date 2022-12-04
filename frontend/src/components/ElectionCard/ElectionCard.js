import React, { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const ElectionCard = ({
  name,
  noOfVotes,
  handleVoteClicked,
  banner,
  endDate,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("wallet-address") === null ||
      localStorage.getItem("wallet-address") === undefined
    ) {
      navigate("/");
    }
  }, []);

  return (
    <section className="bg-white w-full shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img
            src={banner}
            alt=""
            className="rounded-t-xl w-full md:h-96 h-40 object-cover"
          />
        </div>
        <div className="md:px-8 px-4 py-4 pb-6 w-full text-xl bg-black text-white rounded-b-xl">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="md:w-4/5 w-full">
              <p className="truncate ... font-bold text-lg my-2">{name}</p>
              <p className="truncate ... text-sm">
                <i className="uil uil-stopwatch" />
                <span className="mx-1">
                  Voting closes in{" "}
                  {moment(endDate.toDate()).diff(moment(), "hours")} hours
                </span>
              </p>
              <p className="truncate ... text-sm">
                <i className="uil uil-ticket" />
                <span className="mx-1">{noOfVotes} votes</span>
              </p>
            </div>
            <Button
              type="secondary"
              className="my-5 text-base md:w-1/5 w-full font-bold"
              onClick={handleVoteClicked}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectionCard;
