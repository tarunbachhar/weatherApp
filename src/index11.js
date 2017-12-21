import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import App from './App'
import Otherplaces from './components/Otherplaces'
import './style.css'

ReactDOM.render(
  <Router>
  <div>
   <nav>
    <button className="btn btn-success base"><NavLink to='/'><strong>Base</strong></NavLink></button>
    <button className="btn btn-success routin"><NavLink to='/otherplaces'><strong>Search</strong></NavLink></button>
  </nav>
  <div>
  <Route exact path='/' component={App}/>
  <Route exact path='/otherplaces' component={Otherplaces}/>
  </div>
  </div>
  </Router>,
  document.getElementById('root')
)
