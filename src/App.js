import React, { useEffect, useState } from "react";
import { getAllProducts } from "./api";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = (serch = "") => {
    setLoading(true);
    getAllProducts(serch).then((res) => {
      if (res.status < 350) {
        setRows(res.data);
        setLoading(false);
      } else {
        alert("An error occured while fetching products.");
      }
    });
  };

  const handleChange = (e) => {
    e.persist();
    setSearch(e.target.value);
  };

  const filteredist = rows.filter(
    (v) => v.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  );

  return (
    <div className="main">
      <div className="container">
        <input
          type="search"
          className="search-box"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search By Celebrity"
          autoFocus
        />
      </div>
      {loading && (
        <div className="meter">
          <span style={{ width: "100%" }}></span>
          Please wait products are being fetched
        </div>
      )}
      <div className="wrapper">
        {filteredist &&
          filteredist.map((v) => (
            <div key={v._id}>
              <img className="img" alt={v.name} src={v.thumbnail} />
              <p className="center">{v.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
