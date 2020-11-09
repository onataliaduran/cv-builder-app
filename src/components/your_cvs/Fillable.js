import React from 'react';
import SectionHeader from '../../utils/section_header/SectionHeader';
import './Fillable.css';

function Fillable(props) {
    return (
        <div className="Fillable">
            <SectionHeader />
            <div className="container">
                <div className="card">
                    <p>Personal Info</p>
                    <div>
                        <label className="label">Full Name</label>
                        <input id="fullName" type="text" onChange={props.change} className="input" />
                    </div>
                
                    <div>
                        <label className="label">Job Title</label>
                        <input id="jobTitle" type="text" onChange={props.change} className="input"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fillable;

