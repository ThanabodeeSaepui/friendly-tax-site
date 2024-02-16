import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Profile from "./pages/User/Profile";
import Navbar from "./components/Navbar";
// Sign Up
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import SignUp3 from "./pages/SignUp3";
import SignUp4 from "./pages/SignUp4";
import SignUp5 from "./pages/SignUp5";
// Sign Up

import SignIn from "./pages/SignIn";
import CompanyProfile from "./pages/App/CompanyProfile";

// Financial Record
import FinancialRecord from "./pages/App/FinancialRecord";
import FinancialRecord2024 from "./pages/App/FinancialRecord2024";
import FinancialRecord2023 from "./pages/App/FinancialRecord2023";
import FinancialRecord2022 from "./pages/App/FinancialRecord2022";
import FinancialRecord2021 from "./pages/App/FinancialRecord2021";
import FinancialRecord2020 from "./pages/App/FinancialRecord2020";
// Financial Record
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
        <Route path="signup4" element={<SignUp4 />} />
        <Route path="signup5" element={<SignUp5 />} />
        {/* signup cards */}

        <Route path="signup" element={<SignUp />} />
        {/* <Route path="login" element={<SignIn />} /> */}
        <Route path="app/profile" element={<CompanyProfile />} />
        {/* financial record */}
        <Route path="app/financial-record" element={<FinancialRecord />} />
        <Route path="app/financial-record-2024" element={<FinancialRecord2024 />} />
        <Route path="app/financial-record-2023" element={<FinancialRecord2023 />} />
        <Route path="app/financial-record-2022" element={<FinancialRecord2022 />} />
        <Route path="app/financial-record-2021" element={<FinancialRecord2021 />} />
        <Route path="app/financial-record-2020" element={<FinancialRecord2020 />} />
        {/* financial record */}
        <Route path="app/tax-calculator" element={<TaxCalculator />} />
        <Route path="app/tax-reduction" element={<TaxReduction />} />
      </Routes>
    </>
  );
}

export default App;

