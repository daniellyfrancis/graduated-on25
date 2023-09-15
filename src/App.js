import React from 'react';
import DeveloperCard from './components/DeveloperCard/DeveloperCard';
import graduatesData from './graduatesData';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
