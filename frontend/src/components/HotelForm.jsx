import { HiMiniPlusCircle, HiMiniMinusCircle } from "react-icons/hi2";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledHotelSearchFormContainer = styled.div`
  margin: 0 auto;
  max-width: 44rem;
  border-radius: 12px;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.16);
  background: white;
  padding: 2.4rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

const StyledHotelSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  .form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    -webkit-user-select: none;
    min-width: 100%;
    font-size: 2rem;
    font-weight: 600;
    .counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      span {
        text-align: center;
        min-width: 2rem;
        user-select: none;
        -webkit-user-select: none;
      }
    }
  }
  Button {
    align-self: flex-end;
  }
`;

function HotelForm({
  city,
  rooms,
  setRooms,
  adults,
  setAdults,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  onSearch,
}) {
  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 1) {
      setter(value - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <StyledHotelSearchFormContainer className="hotel-search-form">
      <h2>Search Hotels in &ldquo;{city.toUpperCase()}&rdquo;</h2>
      <StyledHotelSearchForm onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rooms:</label>
          <div className="counter">
            <HiMiniMinusCircle
              size={30}
              onClick={() => handleDecrement(setRooms, rooms)}
            />
            <span>{rooms}</span>
            <HiMiniPlusCircle
              size={30}
              onClick={() => handleIncrement(setRooms, rooms)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Adults:</label>
          <div className="counter">
            <HiMiniMinusCircle
              size={30}
              onClick={() => handleDecrement(setAdults, adults)}
            />
            <span>{adults}</span>
            <HiMiniPlusCircle
              size={30}
              onClick={() => handleIncrement(setAdults, adults)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="checkIn">Check-in Date:</label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-out Date:</label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Search</Button>
      </StyledHotelSearchForm>
    </StyledHotelSearchFormContainer>
  );
}

export default HotelForm;
