import React from "react";
import useDataFetch from "./useDataFetch";

const DataDisplay = ({ endpoint }) => {
  const { data, loading, error } = useDataFetch(endpoint);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const DisplayData = data.map((item) => {
    return (
      <div
        key={item.id}
        style={{
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "lightblue",
          margin: "10px auto",
          width: "70%",
        }}
      >
        <h2 style={{ background: "orange", color: "black" }}>
          Name:{item.name}
        </h2>
        <h3>username: {item.username}</h3>
        <b>Email: {item.email}</b>
        <hr />
        <address>Address: {item.address.street}</address>
      </div>
    );
  });
  return (
    <div>
      <h1>Fetched Data:</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {DisplayData}
    </div>
  );
};

export default DataDisplay;
