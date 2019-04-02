import React from 'react';
import NavigationBar from '../components/NavigationBar';

class Main extends React.Component{
  render(){
    return(
      <div className="grid-container">
        <div className="header bg-purple large-text ">
          <NavigationBar/>
        </div>
        <div className="content-one bg-mint"></div>
        <div className="content-two bg-yellow"></div>
        <div className="content-three bg-blue"></div>
        <div className="footer bg-purple"></div>
      </div>
    );
  }
}

export default Main;