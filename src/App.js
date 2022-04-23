/** @format */
import { Route, Routes } from "react-router-dom";
import AppUser from "./AppUser";
import Admin from "./Components/Administrator/Admin";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AppUser/>} />
        <Route path="/Admin/*" element={<Admin/>} />
      </Routes>
    </div>
  );
}
export default App;