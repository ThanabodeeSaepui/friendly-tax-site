import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Contact us</h6>
      </nav>
      <nav>
        <h6 className="footer-title">Useful links</h6>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/signup" className="link link-hover">
          Register
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Our services</h6>
        <Link to="/app/profile" className="link link-hover">
          Company Profile
        </Link>
        <Link to="/app/" className="link link-hover">
          Tax Notification
        </Link>
        <Link to="/app/" className="link link-hover">
          AI Advisor
        </Link>
        <Link to="/app/tax-calculator" className="link link-hover">
          Tax Calculator
        </Link>
        <Link to="/app" className="link link-hover">
          Wealth Management
        </Link>
        <Link to="/app" className="link link-hover">
          Financial Record
        </Link>
      </nav>
    </footer>
  );
}
