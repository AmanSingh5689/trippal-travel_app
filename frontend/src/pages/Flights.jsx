import { useEffect, useState } from "react";
import FlightCard from "../components/FlightCard";
import FlightForm from "../components/FlightForm";
import { getOneWay, getRoundTrip } from "../services/getFlights";
import Loader from "../components/Loader";

function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [flightResults, setFlightResults] = useState(null);
  const [cheapestFlight, setCheapestFlight] = useState(null);
  const [fastestFlight, setFastestFlight] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      let flightList;
      if (isRoundTrip) {
        flightList = await getRoundTrip(from, to, departureDate, returnDate);
      } else {
        flightList = await getOneWay(from, to, departureDate);
      }
      setFlightResults(flightList.data.itineraries);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // find the cheapest flight's duration and cost
  useEffect(() => {
    if (flightResults !== null) {
      // sorted based on price
      const sortedByPrice = [...flightResults].sort(
        (a, b) => a.price.raw - b.price.raw
      );
      setCheapestFlight(sortedByPrice[0]);
      // console.log(cheapestFlight);
    }
  }, [flightResults]);

  // find the fastest flight and its cost
  useEffect(() => {
    if (flightResults !== null) {
      // sorted based on duration fastest first
      const sortedByDuration = [...flightResults].sort(
        (a, b) => a.legs[0].durationInMinutes - b.legs[0].durationInMinutes
      );
      setFastestFlight(sortedByDuration[0]);
    }
  }, [flightResults]);

  return (
    <div>
      <FlightForm
        from={from}
        to={to}
        departureDate={departureDate}
        returnDate={returnDate}
        isRoundTrip={isRoundTrip}
        setFrom={setFrom}
        setTo={setTo}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setIsRoundTrip={setIsRoundTrip}
        onSearch={handleSearch}
      />
      {isLoading && <Loader />}
      {/* {console.log(flightResults)} */}
      {flightResults && cheapestFlight && fastestFlight && (
        <FlightCard
          fastestFlight={fastestFlight}
          cheapestFlight={cheapestFlight}
          totalFlights={flightResults.length}
          departure={departureDate}
          isRoundTrip={isRoundTrip}
        />
      )}
    </div>
  );
}

export default Flights;
// fastest flight duration and cost
// cheapest flight cost and duration

// from and to
// providers logos
// total number of available flights
