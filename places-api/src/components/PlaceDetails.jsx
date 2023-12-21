import React, { useState } from "react";
import Box from "./Box";

function PlaceDetails() {
  const apiKey = process.env.REACT_APP_GP_KEY;
  const placeId = "";
  const url = `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,formattedAddress,priceLevel&key=${apiKey}`;

  return (
    <Box>
      <h1 className="py-2 font-bold">Place Details</h1>
      <div className="flex flex-col items-center text-center justify-center ">
        <div className="my-3 border-4 w-[90vh] h-[60vh] overflow-auto bg-slate-950 text-white p-3"></div>
        <button className="border-solid border-2 hover:border-sky-500 rounded-lg p-2 bg-white-400 outline-pink-500 bg-slate-950 text-slate-50 ">
          Search
        </button>
      </div>
    </Box>
  );
}

export default PlaceDetails;
