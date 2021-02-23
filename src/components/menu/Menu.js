import './Menu.css';
import React from 'react';
import { Link } from "react-router-dom";
import { FiGrid, FiFile, FiFolder, FiClipboard, FiChevronRight } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Menu() {
    return (
        <div className="Menu">
            
            <div className="Menu__toggler">
                <MdChevronRight className="Menu__togglerIcon"/>
            </div>

            <div className="Menu__nav">
                <div className="Menu__logoBox">
                    <p className="Menu__logo">cviiing</p>
                </div>

                <div className="Menu__navGroup">
                    <div>
                        <Link to="/" className="Menu__navItem">
                            <FiGrid className="Menu__navIcon"/>
                            <p className="Menu__navTxt">Overview</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/yourDocs" className="Menu__navItem">
                            <FiFile className="Menu__navIcon"/>
                            <p className="Menu__navTxt">Docs</p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/jobTracker" className="Menu__navItem">
                            <FiClipboard className="Menu__navIcon"/>
                            <p className="Menu__navTxt">Job tracker</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu;
