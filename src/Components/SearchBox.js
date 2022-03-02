import React, { Component } from "react";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <br/>
        <h1>Plan A Trip</h1>
        <form onSubmit="submitFunction" className="search-box">
          <label className="destination-label">Destination</label>
          <input className="search-input" name="citySearch" type="text" onChange="cityChange" />
          <label className="state-date-label">Start Date </label>
          <input className="date-input" name="startDate" type="date" onChange="startDateChange" />
          <label className="end-date-label">End Date </label>
          <input className="date-input" name="endDate" type="date" onChange="endDateChange" />

          <br/>
          <input className="submit-input" name="search-button" type="submit" value='Search Button'/>


        </form>
      </>
    );
  }
}
