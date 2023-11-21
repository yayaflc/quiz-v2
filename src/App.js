import Quiz from './components/Quiz';
import ToggleTheme from './components/ToggleTheme';
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App" style={{ height: '100vh' }}>
      <body data-theme='light'>
      <ToggleTheme />
        <div className="container">
          <h1>Animal Quiz</h1>
          <div className="quiz">
            <Quiz />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
