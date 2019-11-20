import React from 'react';
import { Route, Link } from 'react-router-dom';
import Note from './Note';
import Folder from './Folder';

class Main extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Link to="/"><h1 className='pageTitle'>Noteful</h1></Link>
                </header>
                <main id='main-container'>
                 <section className='sidebar-column'>
                       <Folder />
                       <Folder />
                       <Folder />
                </section>
                    <section className='main-column'>
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                        <Note />
                    </section>
                   
                </main>
            </>
        );
    }
}

export default Main;