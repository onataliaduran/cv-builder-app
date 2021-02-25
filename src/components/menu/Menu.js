import './Menu.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiGrid, FiFile, FiFolder, FiClipboard, FiChevronRight } from "react-icons/fi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Menu(props) {

    let navItemActive = false;
    const [classes, setClasses] = useState(['Menu__navItem', 'inactive']);

    const colorHandler = () => {
        navItemActive = !navItemActive;
        navItemActive ? setClasses(['Menu__navItem', 'active']) :setClasses(['Menu__navItem', 'inactive']); 
    }

    return (
        <div className="Menu">
            
            <div onClick={props.handler} className="Menu__toggler">
                <MdChevronRight className="Menu__togglerIcon"/>
            </div>

            <div className="Menu__nav">
                <div className="Menu__logoBox">
                    <p className="Menu__logo">cviiing</p>
                </div>

                <div className="Menu__navGroup">
                    <div>
                        <Link to="/" onClick={colorHandler} className={classes.join(' ')}>
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
