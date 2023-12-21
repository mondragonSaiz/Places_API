import React, { useState } from "react";
import Box from "./Box";
function TextSearch() {
  const [textSearch, setTextSearch] = useState("");
  const [textData, setTextData] = useState("");

  const handleTextSearch = (event) => {
    setTextSearch(event.target.value);
  };
  const url = "https://places.googleapis.com/v1/places:searchText";
  const headers = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": "AIzaSyBecf5WqUCjT4rwuxXvVAorgS-dlcBLwmA",
    "X-Goog-FieldMask":
      "places.displayName,places.formattedAddress,places.priceLevel,places.id",
  };

  const getData = () => {
    const requestBody = {
      textQuery: textSearch,
    };

    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => setTextData(data.places));
    } catch (err) {
      console.log("There was an error while getting your data.", err);
    }
  };

  return (
    <Box>
      <h1 className="py-2 font-bold">Text Search</h1>
      <div className="flex flex-col items-center text-center justify-center ">
        <input
          className="my-[6.5vw] p-1 my-2 w-[200px] rounded-lg"
          placeholder="Tacos in Tlalpan"
          value={textSearch}
          onChange={handleTextSearch}
        />
        <div className="my-3 border-4 w-[90vh] h-[60vh] overflow-auto bg-slate-950 text-white p-3">
          {textData.length !== 0 || textData !== "" ? (
            <div>
              <div className="grid grid-cols-4 gap-4 dashContainer py-2 text-orange-300">
                <div>ID</div>
                <div>DisplayName</div>
                <div>Address</div>
                <div>Price level</div>
              </div>
              {textData.map((item, index) => {
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

export default TextSearch;
