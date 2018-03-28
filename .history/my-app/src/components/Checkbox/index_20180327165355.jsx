import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange = () =>{
      const handleCheckboxChange = this.props;
      const isChecked = this.state;
    }

    render() {
      const { label } = this.props;
  
      return (
      <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={this.props.isChecked}
              onChange={this.handleChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;