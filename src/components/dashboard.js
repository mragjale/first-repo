import React from "react";
import {useParams} from 'react-router-dom';
import About from "./About";
import Womens from "./Womens";
import Mens from "./Mens";
import Kids from "./Kidas";
import Contact from "./Contact";
import Home from "./Home";
import Test from "./Test";
const Dashboard = () => {
    let {pageName} = useParams();
    let show;
    switch (pageName) {
        case '/':
            show = <Home/>
            break;
        case 'about':
            show = <About/>
            break;
        case 'contact':
            show = <Contact/>
            break;
        case 'womens':
            show = <Womens/>
            break;
        case 'mens':
            show = <Mens/>
            break;
        case 'kids':
            show = <Kids/>
            break;
        case 'test':
            show = <Test/>
            break;
        default: show = <Home/>
    }
    return(
        <div>
            {/*<h3>Requested pageName: </h3>*/}
            {show}
        </div>
    );
}
export default Dashboard;
