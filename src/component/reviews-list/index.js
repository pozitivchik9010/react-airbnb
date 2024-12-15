import "./index.css";
import Box from "../box";
import Heading from "../heading";
import { Fragment } from "react";

export default function Reviews_list({ list }) {
  return (
    <div className="reviews">
      <Heading>Відгуки клієнтів</Heading>
      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="reviews">
      <div className="reviews__block">
        <span className="reviews__title">{guestName}</span>
        <span className="reviews__info">Рейтинг: {rating}</span>
      </div>
      <span className="reviews__info">{review}</span>
    </Box>
  );
}
