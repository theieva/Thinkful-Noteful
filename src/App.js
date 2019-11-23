import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './components/Main';
import DynamicRoute from './components/DynamicFolder';
import DynamicFolder from './components/DynamicRoute';
import Store from './Store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

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
          <Route exact path ="/" component={Main} />
          <Route exact path ="/DynamicRoute" component={DynamicRoute} />
          <Route exact path ="/DynamicFolder" component={DynamicFolder} /> 

        </Main>
      </div>
      
    </main>
    );
  }
}
  


export default App;