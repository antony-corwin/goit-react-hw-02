import React from 'react';
import './App.css';
import Reader from './components/Reader/Reader';
import publications from './db/publications';

function App() {
  return (
    <div className="App">
      <Reader publications={publications} />
    </div>
  );
}

export default App;
