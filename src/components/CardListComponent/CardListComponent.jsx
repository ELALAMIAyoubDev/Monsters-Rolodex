import "./cardListStyles.css";
import { CardComponet } from "..";

const CardListComponent = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardComponet key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardListComponent;
