import React, {useState} from 'react';
import axios from 'axios';
import appData from '../../dataModal/ApplicationData'
import Card from '../ganeral/Card';


const Home = () => {
    const [persons, setPersons] = useState([])
    const [name, setName] = useState("Ghanshyam")
    /*    useEffect(() => {
          getData();
        }, [])
        const getData = () => {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    setPersons(res.data);
                })
        }*/
    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                setPersons(res.data);
            })
    }
    let showName = persons.map(e => <h3 key={e.id}>{e.name}</h3>)
    const fun = () => {
        setName('ram');
    }
    return (
        <div>
            <div className="row">
                <h3>this is home page </h3>
                <button onClick={getUserData}>click</button>
                {showName}
            </div>
            <div className="row">
    <h3>here we change name {name} by caling function from child</h3>
            
            </div>
            <div className="row">
                {appData.studentInfo.map(e => <div className="col-md-4" key={e.id}>
                      <Card
                      img={e.img}
                      name={e.name}
                      clgName={e.clgName}
                      rollNo={e.rollNo}
                      onClick={fun}
                      />
                </div>)}
            </div>
        </div>);
}

export default Home;
