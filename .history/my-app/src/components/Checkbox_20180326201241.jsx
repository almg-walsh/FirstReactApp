import React, { Component } from "react";

class Checkbox extends Component {
    
  
    render() {
      const { label, checked } = this.props;
  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={checked}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;