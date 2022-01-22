import React, { useState, useEffect } from "react";
import IsAdult from "./components/isAdult";
import Routing from "./routes/routes";
import { HASH } from "./utils/hash";
const App = () => {
  const [isAdult, setIsAdult] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === HASH) setIsAdult(true);
  }, []);
  return isAdult ? <Routing /> : <IsAdult setAdult={setIsAdult} />;
};

export default App;
