import "./FlightCard.css";
import { HiClock } from "react-icons/hi2";
import { HiCalendar } from "react-icons/hi2";
import Button from "../ui/Button";

const FlightCard = ({
  fastestFlight,
  cheapestFlight,
  totalFlights,
  isRoundTrip,
}) => {
  const fromCode = fastestFlight.legs[0].origin.id;
  const fromCity = fastestFlight.legs[0].origin.city;
  const toCode = fastestFlight.legs[0].destination.id;
  const toCity = fastestFlight.legs[0].destination.city;

  function minutesToHour(minutes) {
    const hour = Math.trunc(minutes / 60) + "";
    const min = (minutes % 60) + "";
    const string = hour + "h" + " " + min + "min";
    return string;
  }
  function handleClick() {
    window.open(
      "https://www.skyscanner.co.in/",
      "_blank",
      "noopener,noreferrer"
    );
  }
  return (
    <div className="flight-card">
      <p className="trip-info">{isRoundTrip ? "Round Trip" : "One Way"}</p>
      <div className="flight-route">
        <h2>
          {fromCode} → {toCode}
        </h2>
        <p>
          ({fromCity} to {toCity})
        </p>
        <p>
          <HiCalendar />
          Departure: 24/10/24
        </p>
      </div>
      <div className="flight-options">
        <div className="option">
          <p>Cheapest</p>
          <div className="details">
            <p>
              <HiClock />
              Duration: <br />
              <span>
                {minutesToHour(cheapestFlight.legs[0].durationInMinutes)}
              </span>
            </p>
            <p>
              Price: <br />
              <span>{cheapestFlight.price.formatted}</span>
            </p>
          </div>
        </div>
        <div className="option">
          <p>Fastest</p>
          <div className="details">
            <p>
              <HiClock />
              Duration: <br />
              <span>
                {minutesToHour(fastestFlight.legs[0].durationInMinutes)}
              </span>
            </p>
            <p>
              Price: <br />
              <span>{fastestFlight.price.formatted}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="providers">
          <p>Available Providers</p>
          <div className="provider-dots">
            <span className="dot filled"></span>
            <span className="dot filled"></span>
            <span className="dot filled"></span>
            <span className="dot"></span>
          </div>
        </div>
        <p className="additional-info_total-available">
          Total available: <span>{totalFlights}</span>
        </p>
        <Button className="book-button" onClick={handleClick}>
          Book flights now →
        </Button>
      </div>
    </div>
  );
};

export default FlightCard;
