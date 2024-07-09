import { HiMapPin } from "react-icons/hi2";
import { HiMiniClock } from "react-icons/hi2";
import styled from "styled-components";
import LocationCard from "../components/LocationCard";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledCityDetails = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4.8rem;
  .city-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    .city-description-timezone {
      font-size: 1.6rem;
      background-color: #4caf50;
      font-weight: 500;
      border-radius: 20px;
      padding: 0.6rem 1.6rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 0.2rem;
    }
  }
  .city-description-place {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .city-description-name {
      font-size: 3.6rem;
      font-weight: 600;
    }
    .city-description-location {
      font-size: 2.4rem;
      color: #4a4a4a;
    }
  }
`;
const StyledCityDetailsHeader = styled.div`
  width: 100%;
  position: relative;

  h2 {
    font-size: 4.8rem;
    margin-bottom: 4.8rem;
  }

  div {
    display: flex;
    align-items: flex-end;
    img {
      border-radius: 8px;
      margin-right: 2.4rem;
    }
  }
  .booking-buttons {
    position: absolute;
    right: 0;
    bottom: 0;
    gap: 1.2rem;
  }
`;
const StyledCityDetailsBody = styled.div`
  flex-basis: 80%;
  overflow: hidden;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.6rem;

    span {
      color: #4caf50;
      font-weight: 700;
    }
  }

  .famous-places-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3.6rem;
    row-gap: 3.6rem;
    overflow-y: hidden;
    overflow-x: scroll;
    overscroll-behavior: contain;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

function CityDetails({ cityData }) {
  const { cityName, timezone, region, label, image_url } = cityData[0];
  const locations = cityData[1];
  const navigate = useNavigate();

  function handleViewHotels() {
    navigate(`/hotels/${cityName.toLowerCase()}`);
  }
  function handleViewFlights() {
    navigate(`/flights/${cityName.toLowerCase()}`);
  }

  return (
    <StyledCityDetails>
      <StyledCityDetailsHeader>
        <h2>Explore &ldquo;{cityName}&rdquo;</h2>
        <div>
          <img src={image_url} alt="city image" />
          <div className="city-description">
            <div className="city-description-place">
              <p className="city-description-name">{cityName}</p>
              <p className="city-description-location">
                <HiMapPin size={20} />
                {label}
              </p>
            </div>
            <p className="city-description-timezone">
              <HiMiniClock size={20} />
              Timezone: {timezone}
            </p>
          </div>
        </div>
        <div className="booking-buttons">
          <Button onClick={handleViewHotels}>View Hotels</Button>
          <Button onClick={handleViewFlights}>View Flights</Button>
        </div>
      </StyledCityDetailsHeader>

      <StyledCityDetailsBody>
        <h3>
          Here are some famous places in <span>{cityName}</span>
        </h3>
        <div className="famous-places-container">
          {locations.map((item, key) => {
            return <LocationCard item={item} key={key} />;
          })}
        </div>
      </StyledCityDetailsBody>
    </StyledCityDetails>
  );
}

export default CityDetails;

// {xid: 'W510975324', name: 'Holy cross church', description: 'Holy Cross Church, Kurla is a Roman Catholic Churc… The church belongs to the Archdiocese of Bombay.', image: 'https://upload.wikimedia.org/w
