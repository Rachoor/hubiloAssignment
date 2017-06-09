
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
            },
            {
               id : 4,
               name : "Event 4",
               price : 450,
               content: "Some Content 4",
               isBought: false,
               count : 1
            }],
            boughtEvent: [],
            bEvents: []
    }
   },
   buyClick: function(index){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      Events[index].isBought = true;
      if(Events[index].isBought)
         {bEvents[index] = Events[index];}
      this.setState({Events:Events,boughtEvent:Events[index],bEvents:bEvents});
   },
   cancelClick: function(index){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      Events[index].isBought = false;
      bEvents.splice(index, 1);
      this.setState({Events:Events,boughtEvent:bEvents[index],bEvents:bEvents})
   },
   removeTicket: function(id){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      for(let i=0;i<this.state.Events.length;i++){
         if(Events[i].id == id){
               Events[i].isBought = false;
               bEvents.splice(i, 1);
               this.setState({Events:Events,boughtEvent:'',bEvents:bEvents});
         }
      }
   },
 render: function() {

      var Events = this.state.Events.map(function(val,index) {
         return(
            <Event key={index} index={index} val={val} buyClick={this.buyClick} cancelClick={this.cancelClick}/>
         )
      }.bind(this));
      var bEvents = this.state.bEvents.map(function(val,index) {
         return(
            <Summary key={index} index={index} val={val} boughtEvent={this.state.boughtEvent} removeTicket={this.removeTicket}/>
         )
      }.bind(this));
      console.log(bEvents);
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
                  {bEvents}
                  </div>
               </div>
            </div>
         </div>
      );
   }
});

export default App;