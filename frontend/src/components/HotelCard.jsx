import styled from "styled-components";
import { HiFire } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";
import Button from "../ui/Button";
const StyledHotelCard = styled.div`
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem 1.2rem 0 0;
  /* max-height: 42rem; */
  overflow: hidden;
`;
const StyledHotelCardHeader = styled.div`
  position: relative;
  min-height: 24rem;
  padding: 1.6rem;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(255, 255, 255, 0.1)
    ),
    url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  font-weight: 600;

  color: white;
  .hotel-name {
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    right: 1.6rem;
    font-size: 2rem;
    letter-spacing: 0.3px;
  }
  .hotel-rating {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    background-color: #4caf50;
    max-width: fit-content;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
`;
const StyledHotelCardBody = styled.div`
  padding: 1.6rem;
  .price-details {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.4rem;
      text-align: center;
      display: flex;
      align-items: flex-end;
      gap: 0.4rem;
      height: fit-content;
      span {
        font-weight: 600;
      }
    }
    .price {
      font-size: 2rem;
      text-align: right;
      span {
        font-size: 1.4rem;
      }
    }
  }

  .location-details {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    height: 16rem;
    .location-district {
      margin-bottom: 2.4rem;
    }
    .location-address {
      display: flex;
      text-align: justify;
      span {
        flex-basis: 90%;
      }
    }
  }
  Button {
    text-align: right;
  }
`;
function HotelCard({ hotel }) {
  function handleClick() {
    window.open(hotel.url, "_blank", "noopener,noreferrer");
  }
  return (
    <StyledHotelCard>
      {/* {console.log(hotel)} */}
      <StyledHotelCardHeader $img={hotel.max_1440_photo_url}>
        <p className="hotel-rating">
          <HiFire color="yellow" />
          Score: {hotel.review_score ? hotel.review_score : "NA"}
        </p>
        <p className="hotel-name">{hotel.hotel_name}</p>
      </StyledHotelCardHeader>
      <StyledHotelCardBody>
        <div className="price-details">
          <p>
            <HiHome size={20} />
            Accomodation type: <span>{hotel.accommodation_type_name}</span>
          </p>
          <div className="price">
            ₹{Math.trunc(Number(hotel.min_total_price))}
            <br />
            <span>(Excluding taxes)</span>
          </div>
        </div>
        <div className="location-details">
          <p className="location-district">Disctrict: {hotel.district}</p>
          <p className="location-address">
            <HiMapPin size={20} />
            <span> Address: {hotel.address}</span>
          </p>
          {/* <p>Checkin: {hotel.checkin}</p> */}
        </div>
        <Button onClick={handleClick}>Book now</Button>
      </StyledHotelCardBody>
    </StyledHotelCard>
  );
}

export default HotelCard;

// hotel_name
// main_photo_url
// review_score: 7.2

// accommodation_type_name: "Hostel"
// hotel_include_breakfast:0
// min_total_price

// address
// district
// checkin
// checkout
// url: "https://www.booking.com/hotel/in/crystalinn-dormitory.html"
