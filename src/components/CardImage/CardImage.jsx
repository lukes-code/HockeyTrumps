export default function CardImage( {img, name, team} ) {
  return (
    <div className="card-top">
      <div className="card-img">
        <img alt={`Player portrait of ${name}`} src={img} />
      </div>
      <span className="player-name">{name}</span>
      <span className="player-team">{team}</span>
    </div>
  );
}
