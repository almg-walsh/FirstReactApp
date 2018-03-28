import React, { Component } from "react";

class SortOrder extends Component {
    render() {
        const { order } = this.props
      return (
        <div>
          <label>
           <button id='asc' setClick={order}>Asc</button>
           <br />
           <button id='desc' setClick={order}>Desc</button>
          </label>
        </div>
      );
    }
  }

  export default SortOrder;