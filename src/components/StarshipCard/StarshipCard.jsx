import './StarshipCard.css';

function StarshipCard({ starship }) {
  // data
  const name = starship.name || 'Unknown Starship';
  const starshipClass = starship.starship_class || 'Unknown Class';
  const manufacturer = starship.manufacturer || 'Unknown Manufacturer';
  const model = starship.model || 'Unknown Model';

  return (
    <div className="starship-card">
      <h3 className="starship-name">{name}</h3>
      <div className="starship-details">
        <p><strong>Class:</strong> {starshipClass}</p>
        <p><strong>Manufacturer:</strong> {manufacturer}</p>
        <p><strong>Model:</strong> {model}</p>
      </div>
    </div>
  );
}

export default StarshipCard; 