
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
            bEvents: [],
            total:0
    }
   },
   buyClick: function(index){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      Events[index].isBought = true;
      bEvents.push(Events[index]);
      this.setState({Events:Events,bEvents:bEvents});
      setTimeout(()=>{this.updateTotal();},50);
   },
   cancelClick: function(index){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      Events[index].isBought = false;
      for(let i=0;i<bEvents.length;i++){
      	if(bEvents[i].id==Events[index].id){
	      bEvents.splice(i, 1);
      	}
      }
      this.setState({Events:Events,bEvents:bEvents});
      setTimeout(()=>{this.updateTotal();},50);
      
   },
   removeTicket: function(id){
      let Events = this.state.Events;
      let bEvents = this.state.bEvents;
      for(let i=0;i<this.state.Events.length;i++){
         if(Events[i].id == id){
               Events[i].isBought = false;
               bEvents.splice(i, 1);
               this.setState({Events:Events});
         }
      }

      for(let i=0;i<bEvents.length;i++){
      	if(bEvents[i].id==id){
	      bEvents.splice(i, 1);
	      this.setState({bEvents:bEvents});
      	}
      }
   },
   updateCount: function(id,count){
      let bEvents = this.state.bEvents;
      let total = 0;
   	for(let i=0;i<bEvents.length;i++){
      	if(bEvents[i].id==id){
	      bEvents[i].count = count;
	      this.setState({bEvents:bEvents});
      	}
      	total += bEvents[i].price * bEvents[i].count;
      }
      this.setState({total:total});
   },
   updateTotal: function(){
   let total = 0;
   let bEvents = this.state.bEvents;
   	for(let i=0;i<bEvents.length;i++){
      	total += bEvents[i].price * bEvents[i].count;
      }
      this.setState({total:total});

   },
 render: function() {

      var Events = this.state.Events.map(function(val,index) {
         return(
            <Event key={index} index={index} val={val} buyClick={this.buyClick} cancelClick={this.cancelClick}/>
         )
      }.bind(this));
      var bEvents = this.state.bEvents.map(function(val,index) {
         return(
            <Summary key={index} index={index} val={val} removeTicket={this.removeTicket} updateCount={this.updateCount}/>
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
                  
                  	{this.state.bEvents.length?
                  		<div>
	                  		{bEvents}
                  			total:{this.state.total}
                  		</div>
                  		:
			          <div>
			          No Ticket chosen yet
			          </div>                  		
                  	}
                  </div>
               </div>
            </div>
         </div>
      );
   }
});

export default App;