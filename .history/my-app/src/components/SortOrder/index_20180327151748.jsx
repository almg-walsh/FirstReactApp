import React, { Component } from "react";

class SortOrder extends Component {
    render() {
        const { onclick } = this.props
      return (
        <div>
          <label>
           <button id='desc' onClick={onclick}>desc</button>
           <br />

          </label>
        </div>
      );
    }
  }

  export default SortOrder;