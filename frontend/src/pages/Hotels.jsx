import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getHotels } from "../services/getHotels";
import HotelForm from "../components/HotelForm";
import Loader from "../components/Loader";
import HotelCard from "../components/HotelCard";

const StyledHotelsContainer = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.4rem;
    row-gap: 2.4rem;
  }
`;

const Hotels = () => {
  const { cityName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hotelResults, setHotelResults] = useState([]);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = async () => {
    setIsLoading(true);

    try {
      const hotelList = await getHotels(
        cityName,
        rooms,
        adults,
        checkIn,
        checkOut
      );
      setHotelResults(hotelList.result);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HotelForm
        city={cityName}
        rooms={rooms}
        setRooms={setRooms}
        adults={adults}
        setAdults={setAdults}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        onSearch={handleSearch}
      />
      {isLoading && <Loader />}
      {hotelResults?.length > 0 && (
        <StyledHotelsContainer>
          <h3>Available Hotels</h3>
          <ul>
            {hotelResults.map((hotel, index) => (
              <HotelCard hotel={hotel} key={index} />
            ))}
          </ul>
        </StyledHotelsContainer>
      )}
    </>
  );
};

export default Hotels;
