import React, { useState } from "react";
import Redoc from "@theme/Redoc";
import useSpecData from "@theme/useSpecData";

function CustomPage() {
  const [showOpenApiSpec, setShowOpenApiSpec] = useState();
  const specData = useSpecData("pet-api");

  const handleToggle = () => {
    setShowOpenApiSpec((show) => !show);
  };

  return (
    <div>
      <button onClick={handleToggle}>Show openapi spec</button>
      {showOpenApiSpec && <Redoc {...specData} />}
    </div>
  );
}

export default CustomPage;
