import React from 'react';
import DogDetails from './DogDetails';
import DogList from './DogList';
import HomePage from './HomePage';
import ScheduleVisit from './ScheduleVisit';

class WorkArea extends React.Component
{

   render()
   {
       return(
        <div className="workArea" id="work_area">
            {this.navigateToSpecificScreen()}
        </div>
       )
   } 

   navigateToSpecificScreen()
   {
        localStorage.setItem("USER",false);
       if(this.props.screenName === "home")
            return <HomePage  screen={this.props.screen}/>;
       else if(this.props.screenName === "dogs")
            return <DogList screen={this.props.screen}/>
       else if(this.props.screenName === "details")
            return <DogDetails screen={this.props.screen}/>;
       else if(this.props.screenName === "visit")
             return <ScheduleVisit/>;
       else
            return  <HomePage/>;
   }
}

export default WorkArea;