import React, { Component } from 'react';
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import 'flex.css/dist/data-flex.css'; //flex布局
import {
 NavLink
} from 'react-router-dom'
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:false,
            firstShow:true
        }
    }
    render() {
        return (
        	<div className="appBox"  data-flex="dir:top box:justify">
          <div className="headerBox">
        	   <header>
	        	   	<div className="left">
	        	   		<i className="icon-category iconfont" onClick={()=>{
                            this.setState({
                                isShow:!this.state.isShow,
                                firstShow:false
                            })
                        }}></i> 
	        	   		<span></span>
	        	   	</div>
	        	   	<div className="right">
	        	   		
	        	   		<span></span>
	        	   		<i className="icon-account iconfont"></i>
	        	   	</div>
        	   </header>
             <div className="blocker" onClick={()=>{
                            this.setState({
                                isShow:!this.state.isShow,
                                firstShow:false
                            })
                        }} style={{display:this.state.isShow?'block':'none'}} ></div>
                <nav className={this.state.isShow?'show':'hide'} style={{display:this.state.firstShow?'none':'block'}}>
                    <ul onClick={()=>{
                         this.setState({
                                isShow:!this.state.isShow
                         })
                    }}>
                        <li><NavLink
                              to="/home"
                              activeClassName="selected"
                            >主页</NavLink>
                        </li>
                         <li><NavLink
                              to="/film"
                              activeClassName="selected"
                            >页面1</NavLink>
                        </li>
                         <li><NavLink
                              to="/cinema"
                              activeClassName="selected"
                            >页面2</NavLink>
                        </li>
                         <li><NavLink
                              to="/me"
                              activeClassName="selected"
                            >我的</NavLink>
                        </li>
                         <li><NavLink
                              to="/card"
                              activeClassName="selected"
                            >页面3</NavLink>
                        </li>
                    </ul>

                </nav>
                </div>
                 <div className="contentBox">
              	   <section className="contentWrap">
              	       {this.props.children}
              	   </section>
                 </div>
                  <div className="footerBox" data-flex="dir:left box:mean">
                    <div>主页</div>
                    <div>列表</div>
                    <div>我的</div>
                  </div>
                
        	</div>
        );
    }
}

export default App;
