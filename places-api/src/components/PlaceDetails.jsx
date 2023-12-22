import React, { useState } from "react";
import Box from "./Box";

function PlaceDetails() {
  const [placeId, setPlaceId] = useState("");
  const [placeData, setPlaceData] = useState("");
  const apiKey = process.env.REACT_APP_GP_KEY;

  const hanldeIdChange = (event) => {
    setPlaceId(event.target.value);
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const getData = () => {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,formattedAddress,priceLevel&key=${apiKey}`;
    try {
      fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("ERR", data);
          setPlaceData(data);
        });
    } catch (err) {
      console.log("There was an error while getting your data.", err);
    }
  };

  return (
    <Box>
      <h1 className="py-2 font-bold">Place Details</h1>
      <div className="flex flex-col items-center text-center justify-center ">
        <input
          className="p-1 my-2 w-[150px] rounded-lg"
          placeholder="Place ID"
          value={placeId}
          onChange={hanldeIdChange}
        />
        <div className="my-3 border-4 w-[90vh] h-[60vh] overflow-auto bg-slate-950 text-white p-3">
          {placeData.length !== 0 ? (
            <div>
              <div className="grid grid-cols-4 gap-4 dashContainer py-2 text-orange-300">
                <div>ID</div>
                <div>DisplayName</div>
                <div>Address</div>
                <div>Price level</div>
              </div>

              <div className="grid grid-cols-4 gap-4 dashContainer py-2 text-xs">
                <div className="text-xs overflow-auto">{placeData.id}</div>
                <div>{placeData.displayName.text}</div>
                <div className="overflow-auto">
                  {placeData.formattedAddress}
                </div>
                {placeData.priceLevel ? (
                  <div>{placeData.priceLevel}</div>
                ) : (
                  <div>N/A</div>
                )}
              </div>
            </div>
          ) : (
            <p className="mt-[20vh]">No data.</p>
          )}
        </div>
        <button
          onClick={() => {
            getData();
          }}
          className="border-solid border-2 hover:border-sky-500 rounded-lg p-2 bg-white-400 outline-pink-500 bg-slate-950 text-slate-50 "
        >
          Search
        </button>
      </div>
    </Box>
  );
}

export default PlaceDetails;
