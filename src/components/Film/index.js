import React, { Component } from 'react';
import NowPlaying from "../NowPlaying/index"; 
import ComingSoon from "../ComingSoon/index"; 
import Me from "../Me/index"; 
import "./index.scss";
import {
  NavLink
} from 'react-router-dom'
class App extends Component {
   
    constructor(props) {
        super(props);
    }


    componentWillMount() {
      
    }

    render() {
        return (
            <div>
                <ul className="filmnav">
                     <li><NavLink
                              to="/film/now-playing"
                              activeClassName="filmselected"
                            >tab1标题</NavLink>
                     </li>
                     <li><NavLink
                              to="/film/coming-soon"
                              activeClassName="filmselected"
                            >tab2标题</NavLink>
                     </li>
                </ul>

               {this.props.children}
            </div>
        );
    }
}

export default App;
