
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Event from './Event.jsx';
import Summary from './Summary.jsx';

const App = React.createClass({
  getInitialState: function() {
    return {
     Events :[
            {
               id : 1,
               name : "Event 1",
               price : 650,
               content: "Some Content 1",
               isBought: false,
               count : 1
            },
            {
               id : 2,
               name : "Event 2",
               price : 750,
               content: "Some Content 2",
               isBought: false,
               count : 1
            },
            {
               id : 3,
               name : "Event 3",
               price : 550,
               content: "Some Content 3",
               isBought: false,
               count : 1
            }],
            boughtEvent: '',
    }
   },
   buyClick: function(index){
   let Events = this.state.Events;
      Events[index].isBought = true;
      this.setState({Events:Events,boughtEvent:Events[index]});
   },
   cancelClick: function(index){
      let Events = this.state.Events;
      Events[index].isBought = false;
      this.setState({Events:Events,boughtEvent:''})

   },
   removeTicket: function(id){
      let Events = this.state.Events;
      for(let i=0;i<this.state.Events.length;i++){
         if(Events[i].id == id){
               Events[i].isBought = false;
               this.setState({Events:Events,boughtEvent:''});
         }
      }
   },
 render: function() {

      var Events = this.state.Events.map(function(val,index) {
         return(
            <Event key={index} index={index} val={val} buyClick={this.buyClick} cancelClick={this.cancelClick}/>
         )
      }.bind(this));
      return (
         
         <div className="container">
            <div className="row division">
               <div className="col-sm-8">
               <h3>Events</h3>
                  <div className="box1">
                  {Events}
                  </div>
               </div>
               <div className="col-sm-4">
               <h3>Summary</h3>
                  <div className="box2">
                  <Summary boughtEvent={this.state.boughtEvent} removeTicket={this.removeTicket}/>
                  </div>
               </div>
            </div>
         </div>
      );
   }
});

export default App;