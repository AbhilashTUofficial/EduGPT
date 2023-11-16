import React from "react";
import OtpInput from "react-otp-input";

export default function Otpbox() {
  return (
    <div className="rounded-md p-4 text-lg text-center mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <OtpInput
          numInputs={4}
          separator={<span style={{ width: "8px" }}></span>}
          inputStyle={{
            border: "none",
            borderRadius: "20px",
            width: "54px",
            height: "54px",
            fontSize: "16px",
            color: "#000",
            fontWeight: "400",
            backgroundColor: "#F7FAFC",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            letterSpacing: "1.25rem",
            textAlign: "center",
          }}
          containerStyle={{
            justifyContent: "space-evenly",
            display: "flex",
            width: "100%",
            maxWidth: "240px",
            gap: "20px",
          }}
          focusStyle={{
            border: "px solid #CFD3DB",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}
