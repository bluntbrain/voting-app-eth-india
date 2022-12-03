import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import countries from "../../data/countries.json";
import { WorldIDWidget } from "@worldcoin/id";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [uid, setUid] = useState();

  const checkEmptyFeilds = () => {
    if (name === undefined) return true;
    else return false;
  };

  useEffect(() => {
    console.log(name, uid, country);
  }, [name, uid, country]);

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container className="md:px-72 md:py-20 px-5 py-8">
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-between w-full px-2 py-2">
            <h1 className="font-bold text-4xl my-4 mx-3">Registration</h1>
            <p className="text-gray-500 mb-10 mx-3">
              Please fill the information below, according to your official
              documents.
            </p>
            <p className="text-gray-500 mt-5 mx-3">Name</p>
            <input
              type="text"
              className="border-gray-300 border-2 mx-2 my-3 rounded-lg px-2 py-2"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <p className="text-gray-500 mt-5 mx-3">Country</p>
            <select
              className="border-gray-300 border-2 mx-2 my-3 rounded-lg px-2 py-2"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              required
            >
              {countries.map((country) => (
                <option value={country.code}>{country.name}</option>
              ))}
            </select>
            <p className="text-gray-500 mt-5 mx-3">
              {country === "IN" ? "Aadhaar Number" : "Social Security Number"}
            </p>
            <input
              type="text"
              className="border-gray-300 border-2 mx-2 my-3 rounded-lg px-2 py-2"
              value={uid}
              onChange={(e) => {
                setUid(e.target.value);
              }}
            />
            <div style={{ alignItems: "center" }}>
              <p
                style={{ textAlign: "center", marginBottom: 6 }}
                className="text-gray-500"
              >
                OR USE WORLD COIN
              </p>

              <WorldIDWidget
                actionId="wid_staging_266c21e35a9d5a2f0d55d9905c78cd68"
                signal="my_signal"
                // enableTelemetry
                onSuccess={(verificationResponse) => {
                  console.log(verificationResponse);
                  setUid(verificationResponse);
                }} 
                onError={(error) => console.error(error)}
                debug={true} 
              />
            </div>
            <div className="mx-3 mt-10 ">
              <Button type="primary" className="py-2">
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;
