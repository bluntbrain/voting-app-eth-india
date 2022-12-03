import React, { useState } from "react";
import { Helmet } from "react-helmet";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

const LoginPage = () => {
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [isOptSent, setIsOptSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container className="md:px-72 md:py-20 px-5 py-8">
        <div className="flex flex-col items-start">
          {isOptSent ? (
            <div className="flex flex-col justify-between w-full px-2 py-2">
              <h1 className="font-bold text-4xl my-4 mx-3">Enter OTP</h1>
              <p className="text-gray-500 mb-10 mx-3">
                Enter the 5-digit OTP code that has been sent from SMS to
                complete your account registration
              </p>
              <div className="w-full flex flex-col items-center">
                <OtpInput
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  numInputs={6}
                  separator={<span style={{ width: "32px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid black",
                    borderRadius: "8px",
                    width: "60px",
                    height: "60px",
                    fontSize: "20px",
                    color: "gray",
                    fontWeight: "400",
                    caretColor: "blue",
                  }}
                  focusStyle={{
                    border: "1px solid blue",
                    outline: "none",
                  }}
                  className="mt-12 mb-20"
                />
              </div>
              <p className="mx-2 px-2">
                Haven’t got the OTP?{" "}
                <span className="text-blue-600">Resend</span>
              </p>
              <div className="mx-3 mt-10 ">
                <Button type="primary" className="py-2">
                  Proceed
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-between w-full px-2 py-2">
              <h1 className="font-bold text-4xl my-4 mx-3">Login</h1>
              <p className="text-gray-500 mb-10 mx-3">
                Please enter you Phone number. You will receive a 6 digit OTP
                for verification.
              </p>
              <p className="text-gray-500 mt-5 mx-3">Phone Number</p>
              <input
                type="number"
                className={` ${
                  number && number.length !== 10
                    ? "border-red-600"
                    : "border-gray-400"
                } border-2 mx-2 my-3 rounded-lg px-2 py-2`}
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                required
              />
              <p className="mx-2 px-2">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-600">
                  SignUp
                </Link>
              </p>
              <div className="mx-3 mt-10 ">
                <Button
                  type="primary"
                  className="py-2"
                  onClick={() => {
                    setIsOptSent(true);
                  }}
                >
                  Proceed
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
