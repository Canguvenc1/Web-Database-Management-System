import React, { Component } from 'react';
import './App.css';

import BottomSelector from './components/BottomSelector';
import InsertForm from './components/InsertForm';
import ViewList from './components/ViewList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';







class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedIndex: 0
    };

  }




  onUpdate = (val) => {
    this.setState({
      selectedIndex: val
    })
  };


  // callApi = async (url) => {
  //   const response = await fetch(this.youTubeGetID(url));
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
    return (
      <MuiThemeProvider>
       <div className="App">
        {this.state.selectedIndex===0 ? <InsertForm/> : <ViewList/>}
      </div>   
      {this.state.selectedIndex===0 &&         
        <BottomSelector onUpdate={this.onUpdate}/>
      } 
    </MuiThemeProvider>
    );
  }
}

export default App;


