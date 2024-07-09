import axios from "axios";
const HOTEL_BOOKING_API_KEY =
  "2a9644d502mshfcb1bd4a8ee5a99p14c3fcjsn1b7db94c1935";

const apiKey = "5ae2e3f221c38a28845f05b6d54d582c14e557d2ee4c7bd43ed294da";

const getCityCoordinates = async (city) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/geoname`,
    params: {
      name: city,
      apikey: apiKey,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getHotels = async (city, rooms, adults, checkIn, checkOut) => {
  const { lon, lat } = await getCityCoordinates(city);
  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
    params: {
      longitude: lon,
      latitude: lat,
      room_number: rooms,
      adults_number: adults,
      checkin_date: checkIn,
      checkout_date: checkOut,
      locale: "en-gb",
      order_by: "popularity",
      filter_by_currency: "INR",
      units: "metric",
    },
    headers: {
      "x-rapidapi-key": HOTEL_BOOKING_API_KEY,
      "x-rapidapi-host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching Hotels for the city:", error);
    throw error;
  }
};
