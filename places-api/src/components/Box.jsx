import React from "react";

function Box({ children }) {
  return (
    <div className="md:col-span-4 flex-col items-center text-center justify-center p-12">
      {children}
    </div>
  );
}

export default Box;
