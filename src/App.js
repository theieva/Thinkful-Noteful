import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './components/Main';
import DynamicRoute from './components/DynamicRoute';
import DynamicFolder from './components/DynamicFolder';

function App() {
  return (
    
    <main className='App'>
      
          <Route exact path ="/" component={Main} />
          <Route exact path ="/DynamicRoute" component={DynamicRoute} />
          <Route exact path ="/DynamicFolder" component={DynamicFolder} />
      
    </main>
  );
}

export default App;