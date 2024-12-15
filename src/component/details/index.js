import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import baths_icon from "./baths.svg";
import beds_icon from "./beds.svg";
import bedrooms_icon from "./bedrooms.svg";
import guests_icon from "./guests.svg";

export default function Details({ title, ...rest }) {
  return (
    <Box shadow className="price">
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="price__list">
      <ListItem imageSrc={guests_icon}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={bedrooms_icon}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={beds_icon}>
        <span>{beds} ліжко</span>
      </ListItem>
      <ListItem imageSrc={baths_icon}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
