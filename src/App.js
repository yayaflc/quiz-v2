import Quiz from './components/Quiz';
import ToggleTheme from './components/ToggleTheme';

function App() {

  return (
    <div className="App" style={{ height: '100vh' }}>
      <div className="header">
        <ToggleTheme />
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>Animal Quiz</h1>
            <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
