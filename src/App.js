import './App.css';
import React from 'react';
import Header from './screens/Header';
import WorkArea from './screens/WorkArea';

class App extends React.Component {

  constructor()
  {
    super();
    this.state={
        m_strScreen :"home",
    }
  }

  navigateToSpecificScreen(screen)
  {
    this.setState({m_strScreen : screen})
  }

  render()
  {
    return (
       <div>
        <Header screen={this.navigateToSpecificScreen.bind(this)}/>
        <WorkArea screen={this.navigateToSpecificScreen.bind(this)} screenName = {this.state.m_strScreen}/>
        <div id="loginPopup"></div>
      </div>
    );
  }
 
}

export default App;
