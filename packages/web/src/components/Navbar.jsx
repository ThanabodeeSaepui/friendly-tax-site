import { Link } from "react-router-dom";
import ftLogo from "../assets/friendlytax_logo.png";
import CompanyIcon from "../assets/bluebridge_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faDatabase,
  faAnglesDown,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>App</a>
              <ul className="p-2">
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/financial-record">Financial Record</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faCalculator}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/tax-calculator">Tax Calculator</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faAnglesDown}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/tax-reduction">Tax Reduction</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faChartBar}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/summary">Summary</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          <img
            src={ftLogo}
            style={{ borderRadius: "50%", height: 35, width: 35 }}
          />
          <div className="flex flex-row">
            <h1 className="w-full text-2xl text-[#35CBB9]">Friendly</h1>
            <h1 className="w-full text-2xl font-bold text-[#FEF121]">Tax</h1>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white font-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white font-bold" href="/pricing">
              Pricing
            </a>
          </li>
          <li>
            <details>
              <summary className="text-white font-bold">App</summary>
              <ul class="p-2">
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/financial-record">Financial Record</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faCalculator}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/tax-calculator">Tax Calculator</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faAnglesDown}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/tax-reduction">Tax Reduction</a>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <FontAwesomeIcon
                      icon={faChartBar}
                      size="lg"
                      color="black"
                    />
                    <a href="/app/summary">Summary</a>
                  </div>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/signup">
          <button className="btn btn-accent">Sign Up</button>
        </Link>

        <img
          className="object-fit ml-4 mr-5 cursor-pointer"
          src={CompanyIcon}
          onClick={() => window.open("/app/profile", "_parent")}
          style={{ borderRadius: "50%", height: 35, width: 35 }}
        />
      </div>
    </div>
  );
}

