import React from 'react';
import { Route, Link } from 'react-router-dom';
// import Note from './components/Note';
import Folder from './Folder';
import Note from './Note';

class Main extends React.Component {
    render() {
        return (
    
                    <section className='main-column'>
                        <Note />
                    </section>
        );
    }
}

export default Main;