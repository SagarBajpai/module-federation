import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

const App = ({ title, color, appName }) => (
  <div style={{ margin: '20px' }}>
    <Header title={title} color={color} />
    <Jumbotron appName={appName}/>
  </div>
);

export default App;