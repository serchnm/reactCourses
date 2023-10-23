import React from 'react';
import { Button } from 'antd';
import { Login, Com } from './pages/login/index';
import './resources/styles/App.css';

const App = () => (
  <div className="App App-header">
    
    <Login />
    <Com />
    <Button type="primary">Button</Button>
  </div>
);

export default App;