import "./index.css";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import pool_icon from "./pool.svg";
import gym_icon from "./gym.svg";
import breakfast_icon from "./breakfast.svg";
import wifi_icon from "./wifi.svg";
import parking_icon from "./parking.svg";
import pets_icon from "./pets.svg";
import airport_icon from "./airport.svg";
import concierge_icon from "./concierge.svg";
import service_icon from "./service.svg";
import child_icon from "./child.svg";

export default function Amenities({ title, ...rest }) {
  return (
    <Box shadow className="price">
      <Heading border>{title}</Heading>
      <List title={title} {...rest} />
    </Box>
  );
}

function List({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airport,
  concierge,
  service,
  child,
}) {
  const amenities = [
    { condition: pool, icon: pool_icon, label: "Басейн" },
    { condition: gym, icon: gym_icon, label: "Спортивний зал" },
    {
      condition: breakfast,
      icon: breakfast_icon,
      label: "Безкоштовний сніданок",
    },
    { condition: wifi, icon: wifi_icon, label: "Безкоштовний Wi-Fi" },
    {
      condition: parking,
      icon: parking_icon,
      label: "Безкоштовний вуличний паркінг",
    },
    {
      condition: pets,
      icon: pets_icon,
      label: "Дозволено розміщення з домашніми тваринами",
    },
    {
      condition: airport,
      icon: airport_icon,
      label: "Трансфер до/з аеропорту",
    },
    { condition: concierge, icon: concierge_icon, label: "Консьєрж-сервіс" },
    { condition: service, icon: service_icon, label: "Обслуговування номерів" },
    { condition: child, icon: child_icon, label: "Підходить для дітей" },
  ];
  return (
    <ul className="price__list">
      {amenities
        .filter((item) => item.condition)
        .map((item) => (
          <ListItem imageSrc={item.icon}>
            <span>{item.label}</span>
          </ListItem>
        ))}
    </ul>
  );
}
