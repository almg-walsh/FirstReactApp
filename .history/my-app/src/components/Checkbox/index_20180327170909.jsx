import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = () =>{
      const {handleCheckboxChange, label} = this.props;
      const {isChecked} = this.state;

      handleCheckboxChange(!isChecked, label)
    }

    render() {
      const { label } = this.props;
  
      return (
      <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              onChange={this.handleChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;