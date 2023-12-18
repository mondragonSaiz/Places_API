import React from "react";
import Box from "../components/Box";
import NearbySearch from "../components/NearbySearch";
function LandingPage() {
  return (
    <section className=" h-[100vw] grid grid-cols-1 md:grid-cols-8 bg-slate-400">
      {" "}
      <NearbySearch />
      <Box>
        <h1>Text Search</h1>
      </Box>
      <Box>
        <h1>Place Details</h1>
      </Box>
      <Box>
        <h1>Geocoding</h1>
      </Box>
      <Box>
        <h1>Air Quality</h1>
      </Box>
    </section>
  );
}

export default LandingPage;
