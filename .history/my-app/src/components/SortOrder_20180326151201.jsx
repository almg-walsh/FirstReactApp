import React, { Component } from "react";

class SortOrder extends Component {
    constructor(props) {
      super(props);

      this.toggleOrderChange = this.toggleOrderChange.bind(this);
    }
  
    toggleOrderChange = () => {
      const { handleOrderChange } = this.props;
  
      this.setState(({ isChecked }) => ({
        isChecked: !this.state.isChecked
      }));
  
      handleOrderChange();
    };
  
    render() {
      return (
        <div>
          <label>
           <button id='asc' onClick={this.toggleOrderChange}>Asc</button>
           <button id='desc' onClick={this.toggleOrderChange}>Desc</button>

          </label>
        </div>
      );
    }
  }

  export default SortOrder;