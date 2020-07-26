import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Container from "./components/Container";
import Login from "./components/Login";

function App() {
    return (
            <div>
                <BrowserRouter>
                    {/*<ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/container">container</Link>
                        </li>
                           <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    </ul>*/}
          {/*<Header/>*/}
            <Switch>
                <Route path="/container">
                    <Container/>
                </Route>
                <Route path="/" exact>
                    <Login/>
                </Route>
                {/*<Route path="/">
                    <About />
                </Route>*/}
           {/*     <Route path="/" exact  render={(props) => <Home name="Home" {...props} /> }/>
                <Route path="/about" render={(props) => <About namePage="About" {...props} /> } />
                <Route path="/contact" render={(props) => <Contact name="Contact" {...props} /> } />*/}
            </Switch>
                </BrowserRouter>
            </div>
    );
}

export default App;

/*import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Womens from "./components/Womens";
import Mens from "./components/Mens";

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            {/!* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected *!/}
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
   let show = topicId === 'components' ? <Womens/> : <Mens/>


    return (
        <div>
            <h3>Requested topic ID: {topicId}</h3>
            {show}
        </div>);
}*/
