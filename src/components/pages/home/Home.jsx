import "./Home.css";
import { banner } from "../../../assets/images/image";
import Navbar from "../../common/navbar/Navbar";
import Btn from "../../common/btn/Btn";
import React from "react";

function Home() {
  return (
    <div className="">
      {/* Banner Starts Here */}
        <img src={banner} alt="banner" id="bannerimg" />
      <div className="banner">
        <Navbar />
        <h1>
          Empowering People, <br /> Building Futures, Changing Lives
        </h1>
        <div className="btn">
          <Btn text=" Learn More" />
        </div>
      </div>
      {/* Banner Ends Here */}

      {/* Body A Starts Here */}
      <div className ="BodyA">
      </div>
      {/* Body A Ends Here */}

    </div>
  );
}

export default Home;
