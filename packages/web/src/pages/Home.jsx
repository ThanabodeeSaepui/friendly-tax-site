import lawer from "../assets/lawer.webp";
import coin from "../assets/coin.webp";
import FtBg from "../assets/new-bg.png";
// import arrow from "../assets/arrow.svg";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    {/*  */}
    <div className="relative inline-block">
      <img src={FtBg} className="w-full h-auto" />
      <h1 className="absolute top-1 left-0 ml-10 mt-16 text-white bg-secondary font-bold text-6xl p-10">Your Friendly<br></br>Tax Manager</h1>
      <h1 className="absolute top-1/3 left-0 ml-10 mt-24 text-white bg-secondary font-light text-2xl px-5 py-2  text-left">We keen to help every SME reach their tax goal.<br></br>Experience our friendliness.</h1>
      <button className="absolute top-1/2 left-0 ml-10 bg-accent text-secondary text-xl mt-32 px-16 py-3 rounded-full" onClick={()=> window.open("/signup", '_parent')}>Get Started</button>
    </div>

      {/* <div className="hero max-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse" >
          <img src={lawer} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Your Friendly <br />
              Tax Manager
            </h1>
            <p className="py-6">
              We keep to help every SME reach their tax goal. <br />
              Experience our friendliness
            </p>
            <button className="btn btn-success">Get Started</button>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={coin} />
        </figure>
        <div className="card-body">
          <p className="text-blue-600 font-bold">Who we are?</p>
          <h1 className="text-3xl font-bold">
            Short story about <br />
            Friendly Tax
          </h1>
          <p>
            Medifine is an online healthcare provider, Offering health solution
            <br />
            and advice to over 30,000,000 patients across Bangaladesh
            <br />
            <br />
            With team of license doctors and pharmasists, Medifine aim to <br />
            provide comprehensive medical consultation services for patients
            <br />
            and doctors alike.
          </p>
          <a className="text-green-600 font-bold">Know more</a>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
