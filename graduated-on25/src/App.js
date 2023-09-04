import React from 'react';
import DeveloperCard from './components/DeveloperCard';
import graduatesData from './graduatesData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Graduates</h1>
      <div className='developer-list'>
        {graduatesData.map((developer, index) => (
          <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
    </div>
  );
}

export default App;
