import React, { useEffect, useState } from "react";
import { getAllProducts } from "./api";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = (serch = "") => {
    getAllProducts(serch).then((res) => {
      if (res.status < 350) {
        setRows(res.data);
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
