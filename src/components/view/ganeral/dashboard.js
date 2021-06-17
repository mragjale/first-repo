import React from 'react';
import {useParams} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Womens from '../ganeral/Womens';
import Mens from '../ganeral/Mens';
import Kids from '../ganeral/Kidas';
import Test from '../ganeral/Test';
import Practice from '../ganeral/Practice';
import Diagrams from './Diagrams';
import FlowDiagrams from './FlowDiagram';

const Dashboard = () => {
    let {pageName} = useParams();
    let show;
    // const obj = {sirname:'Mragjale'}
    switch (pageName) {
        case '/':
            show = <Home/>
            break;
        case 'about':
            show = <About obj={{sirname:'Mragjale', roll: 12}}/>
            break;
        case 'contact':
            show = <Contact/>
            break;
        case 'womens':
            show = <Womens/>
            break;
        case 'mens':
            show = <Mens name={()=><h1>Nnamdi Chidume <p>kuch</p></h1>}/>
            break;
        case 'kids':
            show = <Kids/>
            break;
        case 'test':
            show = <Test/>
            break;
            case 'practice':
            show = <Practice/>
            break;
            case 'diagrams':
                show = <Diagrams/>
                break;
                case 'flowDiagrams':
                    show = <FlowDiagrams/>
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
