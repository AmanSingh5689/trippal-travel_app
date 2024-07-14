import styled from "styled-components";
import Button from "../ui/Button";

const StyledFlightFormContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 4.8rem;
  max-width: 42.6rem;
  border-radius: 12px;
  box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.16);
  background: white;
  padding: 2.4rem;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

const StyledFlightForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1.6rem;
    font-weight: 600;
    width: 100%;
  }

  label {
    margin-bottom: 0.4rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.6rem;
  }

  Button {
    align-self: flex-end;
  }
`;

function FlightForm({
  from,
  to,
  departureDate,
  returnDate,
  isRoundTrip,
  setFrom,
  setTo,
  setDepartureDate,
  setReturnDate,
  setIsRoundTrip,
  onSearch,
}) {
  const handleTripTypeChange = (event) => {
    setIsRoundTrip(event.target.value === "round-trip");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <StyledFlightFormContainer>
      <h2>Search Flights</h2>
      <StyledFlightForm onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tripType">Trip Type:</label>
          <select
            id="tripType"
            value={isRoundTrip ? "round-trip" : "one-way"}
            onChange={handleTripTypeChange}
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Two Way</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="departureDate">Departure Date:</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        {isRoundTrip && (
          <div className="form-group">
            <label htmlFor="returnDate">Return Date:</label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        )}
        <Button type="submit">Search</Button>
      </StyledFlightForm>
    </StyledFlightFormContainer>
  );
}

export default FlightForm;
