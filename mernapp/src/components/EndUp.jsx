import React from "react";
import { useNavigate } from "react-router-dom";
import Aurora from "../Animate/Aurora";

const EndUp = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // Behind the content
        }}
      >
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Above the background
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "#fff", // Ensures visibility
          width: "100%",
        }}
      >
        <p style={{ fontSize: "10vh", fontWeight: "bold" }}>
          Your Order Has Been Delivered!!
        </p>
        <p style={{ fontSize: "3vh" }}>Please Visit Again</p>
        <button
          className="btn btn-success text-white"
          style={{ fontWeight: "600" }}
          onClick={() => navigate("/")}
        >
          Shop Again
        </button>
      </div>
    </div>
  );
};

export default EndUp;
