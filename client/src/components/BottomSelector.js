import React, { Component } from 'react';
import '../App.css';

import Paper from 'material-ui/Paper';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RaisedButton from 'material-ui/RaisedButton';

const nearbyIcon = <IconLocationOn />;

class BottomSelector extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        selectedIndex: 0
      };
    }

      select = (index) => {
        this.props.onUpdate(index);
        this.setState({selectedIndex: index});
      }
      

      render() {
        return (
      <Paper zDepth={1} className="stick-bottom">
        <BottomNavigation style={{padding: 10}} selectedIndex={this.state.selectedIndex}>
        <RaisedButton className="submit-button"
          secondary={true}
          label="Insert Item"
          onClick={() => this.select(0)}
          />
        <RaisedButton className="submit-button"
          secondary={true}
          label="Inventory"
          onClick={() => this.select(1)}
          />

          
        
        </BottomNavigation>
      </Paper>
        )
    }
};

export default BottomSelector;