import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import MainNav from "./components/partials/MainNav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
