export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Contact us</h6>
      </nav>
      <nav>
        <h6 className="footer-title">Useful links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Register</a>
      </nav>
      <nav>
        <h6 className="footer-title">Our services</h6>
        <a className="link link-hover">Company Profile</a>
        <a className="link link-hover">Tax Notification</a>
        <a className="link link-hover">AI Advisor</a>
        <a className="link link-hover">Tax Calculator</a>
        <a className="link link-hover">Wealth Management</a>
        <a className="link link-hover">Financial Record</a>
      </nav>
    </footer>
  );
}
