export default function Attribute( {type, value} ) {
  return (
    <div className="attribute">
      <div className="attribute-type">{type}</div>
      <div className="attribute-value">{value}</div>
    </div>
  );
}
