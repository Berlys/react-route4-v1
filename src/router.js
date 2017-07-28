
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import App from "./components/App/index"; 
import Home from "./components/Home/index"; 
import Cinema from "./components/Cinema/index"; 
import Me from "./components/Me/index"; 
import Card from "./components/Card/index"; 
import Film from "./components/Film/index"; 
import NowPlaying from "./components/NowPlaying/index"; 
import ComingSoon from "./components/ComingSoon/index"; 
import Detail from "./components/Detail/index"; 
import Login from "./components/Login/index"; 

//模拟登陆成功/失败
const fakeAuth = {
  isAuthenticated: true
}
//模拟条件
const aa = {
  a: true
}
// 路由拦截，登录验证
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
     <Redirect  to="/login"/>
    )
  )}/>
)
const router = (
  <Router>
    <App>
      <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
     <PrivateRoute path="/home" component={Home}>
     </PrivateRoute>
      <Route path="/login" component={Login}>
      </Route>
      <Route  path="/film" render={()=>(
            aa.a ? (
               <Film>
                <Switch>{/*Renders the first child <Route> or <Redirect> that matches the location.*/}
                   <Route path="/film/now-playing" component={NowPlaying}/>
                   <Route path="/film/coming-soon" component={ComingSoon}/>
                   <Redirect from="/film" to="/film/now-playing"/> {/*重定向*/}
                </Switch>
              </Film>
            ) : (
            <Switch>
                   <Redirect from="/film" to="/me"/> {/*重定向*/}
            </Switch>    
            )

        )
       
      }>
      </Route>
        {/*根据模拟条件渲染不同的组件*/}
      <Route path="/cinema"  render={()=>(
        aa.a ? (<Cinema></Cinema>) : (<Me></Me>) )}> 
      </Route>
      <Route path="/me" component={Me}>
      </Route>
      <Route path="/card" component={Card} />
    {/*组件地址栏传参*/}
      <Route path="/detail/:kerwinId" render={props=>
          <Detail {...props} kerwin="OK"/>
      }>
      </Route>
      <Redirect from="/" to="/home"/>
      </Switch>
    </App>
  </Router>
) 

export default router; 