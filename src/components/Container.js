import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Dashboard from "./dashboard";
import Header from "./common/Header";


const Container = () => {
    let match = useRouteMatch();
    return (
        <div>
            <Header/>
            {/* <div className="row"> */}
              {/*   <div className="col-md-4">
                    <h1>container</h1>
                </div>
                <div className="col-md-8"> */}
                <div>
                <Switch>
                        <Route path={`${match.path}/:pageName`}>
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
           
                {/* </div> */}
            {/* </div> */}


        </div>
    )
}

export default Container
