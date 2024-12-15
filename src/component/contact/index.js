import "./index.css";

export default function Contact({ title, image, time, rate, info, phone }) {
  return (
    <div className="contact_block">
      <div className="contact">
        <img src={image} width={80} className="image" height={80} />
        <div className="contact_block">
          <h1 className="contact__text">Господар - {title}</h1>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>

            <span className="contact__sub-value">{time}</span>
            {rate !== null && rate !== undefined && (
              <span className="contact__sub-value">
                {rate}% відсотків швидкості відгуку
              </span>
            )}
          </div>
        </div>
      </div>
      <p>{info}</p>
    </div>
  );
}
