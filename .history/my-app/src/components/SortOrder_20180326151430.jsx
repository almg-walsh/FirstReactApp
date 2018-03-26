import React, { Component } from "react";

class SortOrder extends Component {
    render() {
        const { onclick } = this.props
      return (
        <div>
          <label>
           <button id='asc' onClick={onclick}>Asc</button>
           <button id='desc' onClick={onclick}>Desc</button>

          </label>
        </div>
      );
    }
  }

  export default SortOrder;