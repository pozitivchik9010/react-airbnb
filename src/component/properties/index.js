import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Properties({ title, ...rest }) {
  return (
    <Box className={"box_property"} shadow>
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}
function List({ house, cancel, local, language, offer, instructions }) {
  return (
    <ul className="properties__list">
      <ListItem title={"Правила Дому"}>
        <span className="subtitle__text" border>
          {house}
        </span>
      </ListItem>
      <ListItem title={"Політика скасування"}>
        <span className="subtitle__text" border>
          {cancel}
        </span>
      </ListItem>
      <ListItem title={"Місцевий транспорт"}>
        <span className="subtitle__text" border>
          {local}
        </span>
      </ListItem>
      <ListItem title={"Мови хоста"}>
        <span className="subtitle__text" border>
          {language.join(", ")}
        </span>
      </ListItem>
      <ListItem title={"Спеціальні пропозиції:"}>
        <span className="subtitle__text" border>
          {offer}
        </span>
      </ListItem>
      <ListItem title={"Інструкції щодо реєстрації"}>
        <span className="subtitle__text" border>
          {instructions}
        </span>
      </ListItem>
    </ul>
  );
}
