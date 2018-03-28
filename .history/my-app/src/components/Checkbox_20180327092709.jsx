import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isChecked: false
      }
    }
  


    render() {
      const { label} = this.props;

      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              onData1Changed={this.onData1Changed}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;