import axios from "axios";
const SKYSCANNER_API_KEY = "fac497d057msh82a6aa5d9f1ce28p188523jsn4083aa238530";
// SKYSCANNER_API_KEY = 2a9644d502mshfcb1bd4a8ee5a99p14c3fcjsn1b7db94c1935

export const getOneWay = async (from, to, departDate) => {
  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-one-way",
    params: {
      fromEntityId: from,
      toEntityId: to,
      currency: "INR",
      departDate,
    },
    headers: {
      "x-rapidapi-key": SKYSCANNER_API_KEY,
      "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error fetching flights: ", error);
    throw error;
  }
};

export const getRoundTrip = async (from, to, departDate, returnDate) => {
  const options = {
    method: "GET",
    url: "https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip",
    params: {
      fromEntityId: from,
      toEntityId: to,
      currency: "INR",
      departDate,
      returnDate,
    },
    headers: {
      "x-rapidapi-key": SKYSCANNER_API_KEY,
      "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error fetching flights: ", error);
    throw error;
  }
};
