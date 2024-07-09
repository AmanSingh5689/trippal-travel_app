import axios from "axios";
const apiKey = "5ae2e3f221c38a28845f05b6d54d582c14e557d2ee4c7bd43ed294da";
const apiKey2 = "5ae2e3f221c38a28845f05b63ceab44a81c1f1523b3f61ad2fb2abab";

export const getPlaceDetails = async (xid) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
    params: {
      apikey: apiKey2,
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

export const getFamousPlaces = async (lon, lat) => {
  const options = {
    method: "GET",
    url: `https://api.opentripmap.com/0.1/en/places/radius`,
    params: {
      radius: 10000,
      lon,
      lat,
      rate: "3",
      format: "json",
      apikey: apiKey,
    },
  };

  try {
    const response = await axios.request(options);
    const places = response.data.slice(0, 12); // Limit to 8 places

    const detailedPlaces = [];

    for (const place of places) {
      const placeDetails = await getPlaceDetails(place.xid);
      // Simulate one second delay between each API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      detailedPlaces.push({
        xid: place.xid,
        name: place.name,
        description:
          placeDetails?.wikipedia_extracts?.text || "No description available",
        image: placeDetails?.preview?.source || null,
      });
    }

    return detailedPlaces;
  } catch (error) {
    console.error(`Error fetching famous places: ${error.message}`);
    throw error;
  }
};

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

export const fetchFamousPlaces = async (city) => {
  try {
    const { lon, lat } = await getCityCoordinates(city);
    const placesData = await getFamousPlaces(lon, lat);
    return placesData;
  } catch (error) {
    console.error("Error fetching famous places:", error);
    throw error;
  }
};

export const fetchPlaceDetails = async (xid) => {
  try {
    const response = await axios.get("/api/places/place-details", {
      params: { xid },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
};
