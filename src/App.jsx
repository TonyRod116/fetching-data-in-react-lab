import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import { index as fetchStarships } from './services/starshipService';
import './App.css';

function App() {
  // states
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // load on mount
  useEffect(() => {
    loadStarships();
  }, []);

  // get starships
  const loadStarships = async () => {
    try {
      setIsLoading(true);
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
    } catch (err) {
      setError('Error loading starships');
      console.log('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // search
  const handleSearch = (term) => {
    setSearchTerm(term);
    
    if (!term) {
      setFilteredStarships(starships);
    } else {
      const filtered = starships.filter(ship => 
        ship.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredStarships(filtered);
    }
  };

  // clear search
  const handleClearSearch = () => {
    setSearchTerm('');
    setFilteredStarships(starships);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Star Wars Starships</h1>
      </header>
      
      <main className="app-main">
        <StarshipSearch 
          onSearch={handleSearch}
          onClear={handleClearSearch}
          searchTerm={searchTerm}
          count={filteredStarships.length}
        />
        
        <StarshipList 
          starships={filteredStarships}
          loading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;

