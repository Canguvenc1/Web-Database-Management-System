import React, { Component } from 'react';
import '../App.css';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class InserForm extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        model_name: '',
        brand_name: '',
        memory_GB: '',
        os_name: '',
        ssd: '',
        battery_duration_hours: '',
        screen_size_value: '',
        screen_type_value: '',
        color: '', 
        submited: false
      };
      this._handleModelName = this._handleModelName.bind(this);
      this._handleBrand = this._handleBrand.bind(this);
      this._handleMemory = this._handleMemory.bind(this);
      this._handleOS = this._handleOS.bind(this);
      this._handleSSD = this._handleSSD.bind(this);
      this._handleBatteryDuration = this._handleBatteryDuration.bind(this);
      this._handleScreenSize = this._handleScreenSize.bind(this);
      this._handleScreenType = this._handleScreenType.bind(this);
      this._handlePrice = this._handlePrice.bind(this);
      this._handleColor = this._handleColor.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    callApi = async (requestObj) => {
      const response = await fetch(JSON.stringify(requestObj));
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    };

    _handleModelName(event) {
      this.setState({model_name: event.target.value});
    }

    _handleBrand(event) {
      this.setState({brand_name: event.target.value});
    }

    _handleMemory(event) {
      this.setState({memory_GB: event.target.value});
    }

    _handleOS(event) {
      this.setState({os_name: event.target.value});
    }

    _handleSSD(event) {
      this.setState({ssd: event.target.value});
    }

    _handleBatteryDuration(event) {
      this.setState({battery_duration_hours: event.target.value});
    }

    _handleScreenSize(event) {
      this.setState({screen_size_value: event.target.value});
    }

    _handleScreenType(event) {
      this.setState({screen_type_value: event.target.value});
    }

    _handleColor(event) {
      this.setState({color: event.target.value});
    }

    _handlePrice(event) {
      this.setState({price: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({submited: true})

      let requestObj = {
        model_name: this.state.model_name,
        brand_name: this.state.brand_name,
        memory_GB: this.state.memory_GB,
        os_name: this.state.os_name,
        ssd: this.state.ssd,
        battery_duration_hours: this.state.battery_duration_hours,
        screen_size_value: this.state.screen_size_value,
        screen_type_value: this.state.screen_type_value,
        color: this.state.color,
        price: this.state.price
      }
      this.callApi(requestObj).then(res => this.setState({ response: res.express })).catch(err => console.log(err));
      event.preventDefault();
    }

    render() {
        return (
            <div className="container">
              <div style={{marginTop: "120px"}}>
              <h1>Techno Rate</h1>
              <Paper rounded={true} className="modernForm" zDepth={3}>
                <TextField hintText="Macbook Air" floatingLabelText="Model Name" 
                  value={this.state.model_name} onChange={this._handleModelName} underlineShow={false}
                />
               
                <TextField hintText="Apple" floatingLabelText="Brand Name"  onChange={this._handleBrand}
                  value={this.state.brand_name}  underlineShow={false} 
                />
    
                <Divider />
                
                <TextField hintText="8" floatingLabelText="Memory (GB)" onChange={this._handleMemory}
                  value={this.state.memory_GB} underlineShow={false} 
                />
    
                <TextField hintText="MAC" floatingLabelText="Operating System" onChange={this._handleOS} 
                value={this.state.os_name} underlineShow={false}
                />
    
                <Divider />
    
                <TextField hintText="128" floatingLabelText="SSD (GB)" onChange={this._handleSSD}
                value={this.state.ssd} underlineShow={false} 
                />
    
                <TextField hintText="12" floatingLabelText="Batery Duration (Hours)" underlineShow={false}
                value={this.state.battery_duration_hours} onChange={this._handleBatteryDuration} />

                <Divider />

                <TextField hintText="13" floatingLabelText="Screen Size" underlineShow={false}
                value={this.state.screen_size_value} onChange={this._handleScreenSize} />
                
                <TextField hintText="Amoled" floatingLabelText="Screen Type" underlineShow={false}
                value={this.state.screen_type_value} onChange={this._handleScreenType} />  
                
                <Divider />

                <TextField hintText="Gray" floatingLabelText="Color" underlineShow={false}
                value={this.state.color} onChange={this._handleColor} />  
                
                <TextField hintText="1099" floatingLabelText="Price" underlineShow={false}
                value={this.state.price} onChange={this._handlePrice} />  


              </Paper>
           { 
            //  this.state.submited === false &&
              <RaisedButton className="submit-button"
                secondary={true}
                label="Submit"
                onClick={this.handleSubmit}
            />
          }
          </div>
        </div>
        );
      }
    }
    
export default InserForm;