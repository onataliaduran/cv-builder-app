import React from 'react';
import './Layout.css';

import Menu from './../menu/Menu';

const Layout = props => {
    return (
        <div className="Layout">
            <Menu />
            <div> { props.children } </div>
        </div>
    )
}

export default Layout;
