import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Profile from "./pages/User/Profile";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import SignUp3 from "./pages/SignUp3";
import SignIn from "./pages/SignIn";
import CompanyProfile from "./pages/App/CompanyProfile";
import FinancialRecord from "./pages/App/FinancialRecord";
import TaxCalculator from "./pages/App/TaxCalculator";
import TaxReduction from "./pages/App/TaxReduction";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />

        {/* signup cards */}
        <Route path="signup" element={<SignUp />} />
        <Route path="signup2" element={<SignUp2 />} />
        <Route path="signup3" element={<SignUp3 />} />
        {/* signup cards */}

        <Route path="signup" element={<SignUp />} />
        {/* <Route path="login" element={<SignIn />} /> */}
        <Route path="app/profile" element={<CompanyProfile />} />
        <Route path="app/financial-record" element={<FinancialRecord />} />
        <Route path="app/tax-calculator" element={<TaxCalculator />} />
        <Route path="app/tax-reduction" element={<TaxReduction />} />
      </Routes>
    </>
  );
}

export default App;

