import layer from "../assets/layer.png";
import coin from "../assets/coin.png";
import arrow from "../assets/arrow.svg";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex content-center">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <h1 className="text-4xl font-bold">
            Your Friendly <br />
            Tax Manager
          </h1>
          <p className="">
            We keep to help every SME reach their tax goal. <br />
            Experience our friendliness
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div>
          <img className="max-h-80" src={layer} />
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
      </div>
      <Footer />
    </>
  );
}
