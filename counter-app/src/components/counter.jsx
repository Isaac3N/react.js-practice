import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
    };
    render() { 
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment> );
        // jsx expression which gets compiled to react.CreateELement
    }
    formatCount(){
        const { count } = this.state;
        return count === 0? <h3>Zero</h3> :  count;
    }
}
  
export default Counter;