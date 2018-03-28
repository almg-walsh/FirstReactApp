import React, { Component } from "react";

class Checkbox extends Component {

  
    render() {
      const { label } = this.props;
      const { isChecked } = this.state;
  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={this.props.isChecked}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;