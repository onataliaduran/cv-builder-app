import React, { Component } from 'react';
import './Edit.css';

import Fillable from './Fillable';
import Preview from './Preview'

class Edit extends Component {
    constructor() {
        super();

        this.state = { 
            fullName: '',
            jobTitle: '',
            phone: '',
            email: '',
            profile: ''
         };
    }

    nameHandler = (event) => {
        if(event.target.id === 'fullName') {
            this.setState({fullName: event.target.value});
        } else if(event.target.id === 'jobTitle') {
            this.setState({jobTitle: event.target.value});
        }
    }

    render() {
        return (
            <div className="Edit">
               <Fillable change={this.nameHandler} />
               <Preview fullName={this.state.fullName} jobTitle={this.state.jobTitle} />
            </div>
        )
    }
}

export default Edit;
