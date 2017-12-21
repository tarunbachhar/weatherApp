import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import $ from 'jquery'
import Location from './components/Location'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      lat:null,
      long:null,
      error:null
    }
  }
  componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}

  render(){
    return(
      <div>
       <Location
        latitude={this.state.lat}
        longitude={this.state.long}
       />
      </div>
    )
  }
}

module.exports = App
