import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state
    
  }

    handleChange(e){
      this.setState({
        
      })
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