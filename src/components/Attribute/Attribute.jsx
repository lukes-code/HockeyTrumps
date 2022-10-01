export default function Attribute( {type, value} ) {

  const attrLabels = {
    "slapShot":"Slap shot",
    "wristShot":"Wrist shot",
    "passing":"Passing",
    "fighting":"Fighting",
    "defence":"Defence",
    "endurance":"Endurance",
  };

  return (
    <div className="attribute">
      <div className="attribute-type">{attrLabels[type]}</div>
      <div className="attribute-value">{value}</div>
    </div>
  );
}
