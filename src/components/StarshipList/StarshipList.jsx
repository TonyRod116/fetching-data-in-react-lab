import StarshipCard from '../StarshipCard/StarshipCard';
import './StarshipList.css';

function StarshipList({ starships, loading, error }) {
  // loading
  if (loading) {
    return (
      <div className="starship-list">
        <div className="loading">Loading starships...</div>
      </div>
    );
  }

  // error
  if (error) {
    return (
      <div className="starship-list">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  // if no results
  if (!starships || starships.length === 0) {
    return (
      <div className="starship-list">
        <div className="no-starships">No starships found.</div>
      </div>
    );
  }

  // list
  return (
    <div className="starship-list">
      <ul className="starships-ul">
        {starships.map((starship, index) => (
          <li key={index} className="starship-li">
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipList; 