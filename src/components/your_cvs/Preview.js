import React from 'react'
import SectionHeader from '../../utils/section_header/SectionHeader';
import './Preview.css';

function Preview(props) {
    return (
        <div className="Preview">
            <SectionHeader />
            <div className="container">
                <div className="page">
                    <div className="second-section"></div>
                    <div className="main-section">
                        <span>{props.fullName}</span>
                        <p>{props.jobTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview;
