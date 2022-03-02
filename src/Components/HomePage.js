import React, { Component } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox"

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <SearchBox />
      </>
    );
  }
}
