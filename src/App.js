import React from 'react'
import './App.css';
import Activities from './scenes/Activities';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <> 
    <Router>
      {/* <Layout className="layout"> */}
        <header className="site-layout-background" style={{ padding: 0 }} />
        <Navbar />
        {/* <Content className="site-layout-background" style={{ padding: "0 50px" }}> */}
          <div className="site-layout-content">
            <Switch>
              {/* <Route path="/create-event" component={WildHabEventForm} /> */}
              <Route path="/activities" component={Activities} />
              
              {/* <Route path="/" component={Home} /> */}
            </Switch>
          </div>
        {/* </Content> */}
      {/* </Layout> */}
    </Router>
    {/* <Footer style={{ textAlign: "center" }}>©2099 Created by some punk.</Footer> */}

    <Activities/>
    </>
  );
}

export default App;
