import React, {Component} from 'react';

const Summary = React.createClass({
getInitialState: function() {
  return {
  count : 1
  }
 },
 minusCount: function(){
  if(this.props.val)
  {
      if(this.props.val.count==1){
        alert("At least one item required");
      }
      else{
        this.setState({count:--this.props.val.count});
      }
  }
 },
 plusCount: function(){
    this.setState({count:++this.props.val.count})
 },
 total: function(){
  var total = 0;
    this.setState({total:this.props.val * + this.state.count})
 },
 render: function() {
      return (
         
      <div className="my-component" >
      {this.props.boughtEvent ?
          <div>
          <h4>{this.props.val.name}</h4>
            <button type="button" className="btn btn-default" onClick={this.minusCount}>-</button>
            <div className="counter">{this.props.val.count}</div>
            <button type="button" className="btn btn-default" onClick={this.plusCount}>+</button>
             X {this.props.val.price}
            <p className="price"> total: {this.props.val.price * +this.state.count}</p>
            <hr/>
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