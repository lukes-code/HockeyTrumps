import Card from "../Card";
import CardImage from "../CardImage";
import Attribute from "../Attribute";
import { v4 as uuidv4 } from 'uuid';

export default function CardContainer( {cardDetails} ) {
  return (
    <Card>
      <CardImage img={cardDetails.img} name={cardDetails.name} team={cardDetails.team} />
      <div className="card-bottom">
        {Object.keys(cardDetails.attributes).map(attr => {
          return (
            <Attribute 
              type={attr}
              value={cardDetails.attributes[attr]}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </Card>
  );
}
