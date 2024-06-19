import { useMemo, useState } from "react";

export default function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#090909",
    width: "100%",
  };

  const btnStyle = {
    padding: "15px 30px",
    margin: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#0056b3";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#007bff";
  };

  // Memoization

  const isEven = useMemo(() => {
    return counterOne % 2 === 0; // True || False
  }, [counterOne]);

  return (
    <div style={containerStyle}>
      <button
        style={btnStyle}
        onClick={() => setCounterOne((prev) => prev + 1)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {counterOne}
      </button>
      <h1>{isEven ? "Even" : "Odd"}</h1>
      <button
        style={btnStyle}
        onClick={() => setCounterTwo((prev) => prev + 1)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {counterTwo}
      </button>
    </div>
  );
}
