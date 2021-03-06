import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e){
      this.props.onClickChange(e.target.value);
    }

    render() {
      const { label } = this.props;
      const isChecked = this.props.isChecked;

  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={this.handleChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;