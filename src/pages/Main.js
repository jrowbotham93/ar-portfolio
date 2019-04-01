import React from 'react';
import './styles/App.scss'

class Main extends React.Component{
  render(){
    return(
      <div className="grid-container">
        <div className="header colour-purple"></div>
        <div className="content-one"></div>
        <div className="content-two"></div>
        <div className="content-three"></div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Main;