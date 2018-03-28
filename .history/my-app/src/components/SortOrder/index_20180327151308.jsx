import React, { Component } from "react";

class SortOrder extends Component {
    render() {
        const { onclick } = this.props
      return (
        <div>
          <label>
           <button id='asc' setClick={onclick}>Asc</button>
           <br />
           <button id='desc' setClick={onclick}>Desc</button>
          </label>
        </div>
      );
    }
  }

  export default SortOrder;