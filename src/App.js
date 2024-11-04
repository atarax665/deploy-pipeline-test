import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import QuestionCard from './Components/QuestionCard';
import CreateCard from './Components/CreateCard';

const AppLayout = () => {
    return (
      <div>
        <Header />
        <CreateCard />
        <QuestionCard />
      </div>
    );
  };
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<AppLayout />);