import React from 'react'
import $ from 'jquery'
import Nav from '../images/placeholder.png'
import Wind from '../images/wind.png'

class Otherplaces extends React.Component {
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
      data20:[],
      display:false,
      city:""
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(e){
    var  m = this.refs.searchplaces.value;
    this.setState({
      city:m
    })
    e.preventDefault();
    console.log(this.state.city)
  }
  handleClick(){
    var self = this;
    var arrr = [];
    var name = this.state.city
    var der = 'http://api.openweathermap.org/data/2.5/weather?q='+name+'&appid=f46a72390b88d87a3575b9ecd8243054'
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
        data20:arrr[20],
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
    var date= Date();
    var temp = this.state.data6.temp
    var emp = (temp-273.15).toFixed(2)
    var sty = {display: this.state.display ? 'block' : 'none'}
    var Name = typeof(this.state.data20)==="string" ? this.state.data20 : this.state.data18
    var speed = typeof(this.state.data8.speed)==="number"? this.state.data8.speed : this.state.data10.speed
    var pres = typeof(this.state.data8.deg)==="number"? this.state.data8.deg: this.state.data8.deg
    return(
           <div className="container-fluid">
           <div>
           <form className="form-horizontal myform" onSubmit={this.handleAdd}>
            <div className="form-group" >
             <div className="col-sm-3">
              <input type="text" className="form-control" ref="searchplaces" placeholder="Search"/>
              <button type="submit"  className="btn btn-danger bats"><strong>Submit</strong></button>
             </div>
            </div>
           </form>
           <button className="btn btn-primary nav" onClick={this.handleClick}><strong><img src={Nav} alt="Locate"/></strong></button>
           </div>
            <div style={sty}>
              <span><h1>{Name}</h1></span>
              <img src={final} alt="no-image" height="150" widht="150"/>
              <h1 className="tempa"><strong>{emp} °C</strong></h1>
              <h3 className="descripton">{this.state.data2.description}</h3>
              <div className="presure">
              <h3 className="pressure">Pressure: {this.state.data6.pressure} hPa</h3>
              <h3 className="humidity">  Humidity: {this.state.data6.humidity} %</h3>
              </div>
              <div>
              <h3 className="pressure"><img src={Wind} alt="windspeed"/>: {speed} m/sec</h3>
              <h3 className="humidity">Wind Direction : {pres} deg</h3>
              </div>
            </div>
            </div>
    )
  }
}

module.exports = Otherplaces
