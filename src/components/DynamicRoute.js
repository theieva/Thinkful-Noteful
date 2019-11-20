import React from 'react';
import { Route, Link } from 'react-router-dom';

class DynamicRoute extends React.Component {
    render() {
        return (
            <>
                <header>
                <Link to="/">Noteful</Link>
                </header>
                <main>
                    <h2>This is the DynamicRoute section.</h2>
                </main>
                <section class="sidebar">
                    This is the sidebar.
                </section>
            </>
        );
    }
}

export default DynamicRoute;