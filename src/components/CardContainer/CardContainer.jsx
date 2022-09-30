import Card from "../Card";
import CardImage from "../CardImage";
import Attribute from "../Attribute";

export default function CardContainer() {
  return (
    <Card>
      <CardImage />
      <Attribute type="Shooting" value="69" />
    </Card>
  );
}
