import "./index.css";
import Box from "../box";
import Heading from "../heading";
import { Fragment } from "react";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <Box className={"attractions__block"}>
      <Heading border>Пам'ятки поблизу</Heading>
      <div
        className="attractions__block
"
      >
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul className="attractions__list">
      <ListItem border>
        <a className="attractions__item" href={link}>
          {name}
        </a>
      </ListItem>
    </ul>
  );
}
