import React, {Component} from 'react';

const Event = React.createClass({
  getInitialState: function() {
    return {
      count : 1
    }
   },
   buyClick: function(){
      if(this.props.val.isBought){
        this.props.cancelClick(this.props.index);
        this.props.val.count =1;
      }
      else{
        this.props.buyClick(this.props.index);
      }
   },
  render: function() {
      return (
                  
      <div className="event-box" onClick="">
        <div className="content">
          <h4>{this.props.val.name}</h4>
          <p> {this.props.val.content}</p>
        </div>
        <div className="price">
          <h4>{this.props.val.price}₹</h4>
          <button type="button" className="btn btn-primary" onClick={this.buyClick}>
                {this.props.val.isBought ? 'Cancel' : 'Buy'}
              </button>
        </div>
      </div>
      );
   }
});

export default Event;