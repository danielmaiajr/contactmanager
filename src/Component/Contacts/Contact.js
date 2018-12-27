import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Consumer } from '../../context';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };
    handleClick() {
        this.setState((state) => {
            return { show: !this.state.show }
        })
    };

    async handleDelete(id, dispatch) {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({type: 'DELETE_CONTACT', payload : id});
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{' '}
                                <i onClick={this.handleClick} className="fas fa-sort-down" style={{ cursor: 'pointer' }} />
                                <i onClick={this.handleDelete.bind(this, id, dispatch)} className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i>
                                <Link to={`contact/edit/${id}`}>
                                 <i 
                                    className="fas fa-pencil-alt"
                                    style={{
                                        cursor: 'poiter',
                                        float: 'right',
                                        color: 'black',
                                        marginRight: '1rem'
                                    }}
                                ></i>
                                </Link>
                            </h4>
                            {(this.state.show) ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>) : null}
                        </div>  
                    )
                }}
            </Consumer>
        )
    }
}

export default Contact;   
