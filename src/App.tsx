import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
