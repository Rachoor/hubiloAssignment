import React, {Component} from 'react';

const Summary = React.createClass({
getInitialState: function() {
  return {
  count : 1
  }
 },
 minusCount: function(){
  if(this.state.count==1){
    this.props.removeTicket(this.props.boughtEvent.id);
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
          {this.props.boughtEvent.name}
            <button type="button" className="btn btn-default" onClick={this.minusCount}>-</button>
            <div className="counter">{this.state.count}</div>
            <button type="button" className="btn btn-default" onClick={this.plusCount}>+</button>
            total: {this.props.boughtEvent.price * +this.state.count}
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