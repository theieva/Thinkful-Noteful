import React from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from './Folder';


class Sidebar extends React.Component{

    render() {
        return (
            <section className = 'sidebar-column' >
            <Folder />
            <Folder />
            <Folder />
            </section >
        )
    }
}

export default Sidebar;