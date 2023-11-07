import Quiz from './components/Quiz';

function App() {

  return (
    <div className="App" data-theme="light" style={{ height: '100vh' }}>
      <body>
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