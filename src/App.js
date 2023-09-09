import React from 'react';
import DeveloperCard from './components/DeveloperCard';
import graduatesData from './graduatesData';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='developer-list'>
        {graduatesData.map((developer, index) => (
          <DeveloperCard key={index} developer={developer}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
