import React from "react";
import Box from "../components/Box";
import NearbySearch from "../components/NearbySearch";
import TextSearch from "../components/TextSearch";
import PlaceDetails from "../components/PlaceDetails";
function LandingPage() {
  return (
    <section className=" h-[110vw] grid grid-cols-1 md:grid-cols-8 bg-slate-400">
      {" "}
      <NearbySearch />
      <TextSearch />
      <PlaceDetails />
      <Box>
        <h1>Geocoding</h1>
      </Box>
    </section>
  );
}

export default LandingPage;
