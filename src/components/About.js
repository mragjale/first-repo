import React from 'react';
import {connect} from 'react-redux'
import {changeNameAction, addWishAction} from '../redux/actions/myAction'

const About = (props) => {
    const myWishes = props.myWish.map(item => {
            return <h3 key={Math.random()}>{item}</h3>
        });
    return (
        <div>
            <h1 className="text-center text-danger">My name is {props.name}</h1>
            <h1 className="text-center text-danger">This is {props.namePage} Component</h1>
            {myWishes}
            <button className="btn btn-block btn-info" onClick={() => {props.changeName()}}> Change</button>
            <button className="btn btn-block btn-info" onClick={() => {props.addWish()}}> Add Wish</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        name: state.name,
        myWish: state.wish
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeName: () => {dispatch(changeNameAction())},
        addWish: () => {dispatch(addWishAction())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
