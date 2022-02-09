import './App.css';
import StarshipList from './components/StarshipsList ';
import StarshipPage from './components/StarshipPage';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Star Wars Fetch API</h1>
      <main>
        <Routes>
          <Route path='/' element={<StarshipList />} />
          <Route path='/ships/:uid' element={<StarshipPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
