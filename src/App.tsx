import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Main/Footer';
import RoutesComponent from './components/routes'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <RoutesComponent />
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
