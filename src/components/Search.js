import React from "react";
import axios from "axios";
import { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const getData = async () => {
    //data = await axios.get();
    console.log("aa");
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={getData()}>submit</button>
      </form>
    </div>
  );
};

export default Search;
