import { Routes, Route, Navigate } from "react-router-dom";
import UnicornsContainer from "./unicorns";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/unicornios" />} />
      <Route path="/unicornios" element={<UnicornsContainer />} />
    </Routes>
  );
}

export default App;
