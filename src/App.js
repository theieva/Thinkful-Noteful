import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './components/Main';
import DynamicRoute from './components/DynamicFolder';
import DynamicFolder from './components/DynamicRoute';
import Store from './Store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Router from './Router';

class App extends React.Component {
    state = { 
      notes:[],
      folders:[],
    };
  
    
  render() {
    return (
    <main className='App'>
        <Header />
      <div id='main-container'>
      <Sidebar />
      <Main>
         <Router />
        </Main>
      </div>
      
    </main>
    );
  }
}
  


export default App;