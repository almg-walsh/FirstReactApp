import React, { Component } from "react";

class SortOrder extends Component {
    render() {
        const { order } = this.props
      return (
        <div>
          <label>
           <button id='asc' onClick={order}>Asc</button>
           <br />
           <button id='desc' onClick={order}>Desc</button>
          </label>
        </div>
      );
    }
  }

  export default SortOrder;