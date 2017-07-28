# yueliang-react

### yueliang-react此项目是基于react router-v4.0的实践,方便快速高效进入开发


# 说明 

>  这个项目是关于 react+react-router-4.0版本+ES6+webapck 单页面应用实战

>  webpack-dev-server的反向代理配置,解决前端跨域问题.

# 项目运行（nodejs 6.0+）

# 2. 进入 目录, 安装依赖, 启动webpack dev server

cd yueliang-react

cnpm install(******因为使用了sass，为了顺利完成安装，最好使用cnpm install，使用前请先安装淘宝镜像******)

npm run dev  (开发环境)

```

# 路由配置 实例
``` bash
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


```

# 待办事项

>  其他页面完善
>  引入redux管理状态


