import React from 'react'
import $ from 'jquery'
import Nav from '../images/placeholder.png'
import Wind from '../images/wind.png'

class Location extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data0:[],
      data2:[],
      data6:[],
      data8:[],
      data10:[],
      data14:[],
      data18:[],
      display:false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    var self = this;
    var arrr = [];
    var lati = this.props.latitude
    var longi = this.props.longitude
    var der = 'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&APPID=f46a72390b88d87a3575b9ecd8243054'
    $.getJSON(der,function(sata){
      $.each(sata,function(key,value){
          arrr.push(arrr.push(value))
       })
       console.log(arrr)
      self.setState({
        data0:arrr[0],
        data2:arrr[2][0],
        data6:arrr[6],
        data8:arrr[8],
        data10:arrr[10],
        data14:arrr[14],
        data18:arrr[18],
        display:true
      })
    })
  }

  render(){
    var str = "http://openweathermap.org/img/w/";
    var gate = this.state.data2.icon;
    var ggg= ".png";
    var fi = str.concat(gate);
    var final = fi.concat(ggg);
    var date=Date();
    var temp = this.state.data6.temp
    var emp = (temp-273.15).toFixed(2)
    var sty = {display: this.state.display ? 'block' : 'none'}
    return(
           <div>
           <div>
           <button className="btn btn-primary nav" onClick={this.handleClick}><strong><img src={Nav} alt="Locate"/></strong></button>
           </div>
            <div style={sty}>
              <span><h1>{this.state.data18} , {this.state.data14.country}</h1></span>
               <h3><strong>{date  }</strong></h3>
              <img src={final} alt="no-image" height="150" widht="150"/>
              <h1 className="tempa"><strong>{emp} °C</strong></h1>
              <h3 className="descripton">{this.state.data2.description}</h3>
              <div className="presure">
              <h3 className="pressure">Pressure: {this.state.data6.pressure} hPa</h3>
              <h3 className="humidity">  Humidity: {this.state.data6.humidity} %</h3>
              </div>
              <div>
              <h3 className="pressure"><img src={Wind} alt="windspeed"/>: {this.state.data8.speed} m/sec</h3>
              <h3 className="humidity">Wind Direction : {this.state.data8.deg} deg</h3>
              </div>
            </div>
            </div>
    )
  }
}

module.exports = Location
