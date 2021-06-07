import React from 'react';
import Form from '../../common/Form'
import './Contact.scss';

const Contact = (props) => {
        return (
            <div>
                <h1 className="text-center text-danger">This is {props.name} Component</h1>

                <div className="offset-4 col-md-4">
                    <Form/>
                </div>
            
            </div>
        );
}

export default Contact;

