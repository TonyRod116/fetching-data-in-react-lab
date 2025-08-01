import { useState } from 'react';
import './StarshipSearch.css';

function StarshipSearch({ onSearch, onClear, searchTerm, count }) {
  const [inputValue, setInputValue] = useState('');

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  // clear
  const handleClear = () => {
    setInputValue('');
    onClear();
  };

  return (
    <div className="starship-search">
      {/* results count */}
      <div className="search-info">
        <p>Found: {count} starships</p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search starship..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {searchTerm && (
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-button"
          >
            Show all
          </button>
        )}
      </form>
    </div>
  );
}

export default StarshipSearch; 