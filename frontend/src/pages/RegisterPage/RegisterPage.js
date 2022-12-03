import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import countries from "../../data/countries.json";
import { registerVoter } from "../../utils/firebaseFunctions";

const RegisterPage = () => {
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [uid, setUid] = useState();

  const navigate = useNavigate();

  const handleRegisterUser = async () => {
    const phone = localStorage.getItem("phone");
    console.log({ phone });
    if (
      name !== undefined &&
      country !== undefined &&
      uid !== undefined &&
      phone !== null
    ) {
      await registerVoter(phone, name, country, uid);
      navigate("/connect-wallet");
    } else {
      console.log("Error in registering user");
    }
  };

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
            />
            <p className="text-gray-500 mt-5 mx-3">Country</p>
            <select
              className="border-gray-300 border-2 mx-2 my-3 rounded-lg px-2 py-2"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
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
            <div className="mx-3 mt-10 ">
              <Button
                type="primary"
                className="py-2"
                onClick={handleRegisterUser}
              >
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
