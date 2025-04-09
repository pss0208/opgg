import React from "react";
import "./Home.css";
import Search from "../components/Search";

class Home extends React.Component {
  state = {
    keyword: "",
  };

  render() {
    const { keyword } = this.state;
    return (
      <div className="home">
        <Search keyword={keyword} />
      </div>
    );
  }
}

export default Home;
