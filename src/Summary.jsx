import React, {Component} from 'react';

const Summary = React.createClass({
getInitialState: function() {
  return {
  count : 1
  }
 },
 minusCount: function(){
  if(this.state.count==1){
    alert("At least one item required");
  }
  else{
    this.setState({count:--this.state.count});
  }
 },
 plusCount: function(){
    this.setState({count:++this.state.count})
 },
 render: function() {
      return (
         
      <div className="my-component" >
      {this.props.boughtEvent ?
          <div>
          <h4>{this.props.boughtEvent.name}</h4>
            <button type="button" className="btn btn-default" onClick={this.minusCount}>-</button>
            <div className="counter">{this.state.count}</div>
            <button type="button" className="btn btn-default" onClick={this.plusCount}>+</button>
             X {this.props.boughtEvent.price}
            <p className="price"> total: {this.props.boughtEvent.price * +this.state.count}</p>
            <hr/>
            <h5> Subtotal:<p className="price">{this.props.boughtEvent.price * +this.state.count}</p></h5>
          </div>
          :
          <div>
          No Ticket chosen yet
          </div>
      }
      </div>
      );
   }
});

export default Summary;