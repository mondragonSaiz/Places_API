import React, { useState } from "react";
import Box from "./Box";
function NearbySearch() {
  const [nearbyData, setNearbyData] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("500");

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": "AIzaSyBecf5WqUCjT4rwuxXvVAorgS-dlcBLwmA",
    "X-Goog-FieldMask":
      "places.displayName,places.formattedAddress,places.id,places.priceLevel,places.allowsDogs,places.viewport",
  };
  const getData = () => {
    const requestBody = {
      includedTypes: [selectedPlace],
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: {
            latitude: latitude,
            longitude: longitude,
          },
          radius: selectedRadio,
        },
      },
    };

    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => setData(data.places));
    } catch (err) {
      console.log("There was an error while getting your data.", err);
    }
  };

  const setData = (data) => {
    console.log("???", data);
    setNearbyData(data);
    console.log("SI", nearbyData);
  };
  return (
    <Box>
      <h1 className="py-2 font-bold">Nearby Search</h1>
      <div className="flex flex-col items-center text-center justify-center ">
        {" "}
        <input
          className="p-1 my-2 w-[150px] rounded-lg"
          placeholder="latitude"
          value={latitude}
          onChange={handleLatitudeChange}
        />
        <input
          className="p-1 my-2 w-[150px] rounded-lg"
          placeholder="longitude"
          value={longitude}
          onChange={handleLongitudeChange}
        />
        <input
          className="p-1 my-2 w-[150px] rounded-lg"
          placeholder="medical_lab"
          value={selectedPlace}
          onChange={handlePlaceChange}
        />
        <input
          className="p-1 my-2 w-[150px] rounded-lg"
          placeholder="500"
          value={selectedRadio}
          onChange={handleRadioChange}
        />
        <div className="my-3 border-4 w-[90vh] h-[40vh] overflow-auto bg-slate-950 text-white p-3">
          {nearbyData.length !== 0 ? (
            <div>
              <div className="grid grid-cols-4 gap-4 dashContainer py-2 text-orange-300">
                <div>ID</div>
                <div>DisplayName</div>
                <div>Address</div>
                <div>Price level</div>
              </div>
              {nearbyData.map((item, index) => {
                return (
                  <div className="grid grid-cols-4 gap-4 dashContainer py-2 text-xs">
                    <div className="text-xs overflow-auto">{item.id}</div>
                    <div>{item.displayName.text}</div>
                    <div className="overflow-auto">{item.formattedAddress}</div>
                    {item.priceLevel ? (
                      <div>{item.priceLevel}</div>
                    ) : (
                      <div>N/A</div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-[20vh]">No data.</p>
          )}
        </div>
        <button
          onClick={() => {
            getData();
          }}
          className="border-solid border-2 hover:border-sky-500 rounded-lg p-2 bg-white-400 outline-pink-500 bg-slate-950 text-slate-50"
        >
          Search
        </button>
      </div>
    </Box>
  );
}

export default NearbySearch;
