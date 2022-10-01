import Card from "../Card";
import CardImage from "../CardImage";
import Attribute from "../Attribute";

export default function CardContainer( {cardDetails} ) {
  return (
    <Card>
      <CardImage img={cardDetails.img} name={cardDetails.name} team={cardDetails.team} />
      {Object.keys(cardDetails.attributes).map(attr => {
        return (
          <Attribute type={attr} value={cardDetails.attributes[attr]} />
        );
      })}
    </Card>
  );
}
