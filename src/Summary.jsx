import React, {Component} from 'react';

const Summary = React.createClass({
getInitialState: function() {
  return {
  count : 1
  }
 },
 componentDidMount:  function() {
  this.setState({count:1});
 },
 minusCount: function(){
  if(this.props.val)
  {
      if(this.state.count==1){
        alert("At least one item required");
      }
      else {this.setState({count:--this.state.count});}
      if(this.state.count==0){
        this.props.removeTicket(this.props.val.id);
      }
      this.props.updateCount(this.props.val.id,this.state.count)
  }
 },
 plusCount: function(){
    this.setState({count:++this.state.count});
    this.props.updateCount(this.props.val.id,this.state.count)
 },
 
 render: function() {
  console.log(this.state.count);
      return (
      <div className="my-component" >
          <div>
          <h4>{this.props.val.name}</h4>
            <button type="button" className="btn btn-default" onClick={this.minusCount}>-</button>
            <div className="counter">{this.props.val.count}</div>
            <button type="button" className="btn btn-default" onClick={this.plusCount}>+</button>
             X {this.props.val.price}
            <p className="price"> total: {this.props.val.price * +this.props.val.count}</p>
            <hr/>
          </div>
      </div>
      );
   }
});

export default Summary;
