import React from "react";
import "./index.css";
const HomeHowitworks = () => {
  const arr = [
    {
      url: "https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png",
      heading: "Book and relax",
      para: "Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
      url: "https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png",
      heading: "Smart checklist",
      para: "Let each trip be an inspirational journey, each room a peaceful space",
    },
    {
      url: "https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png",
      heading: "Save More",
      para: "Let each trip be an inspirational journey, each room a peaceful space",
    },
  ];

  return (
    <div className="container  pb-5">
      <div className="text-center">
        <h1 className="Home-main_howmainHeading">How it works</h1>
        <p className="Home-main_howmainPara"> Keep Calm & travel on</p>
      </div>

      <div className="container">
        <div className="row bgexplore">
          {arr.map((item, index) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 "
                style={{ marginTop: "20px" }}
              >
                <div>
                  <div className="text-center">
                    <img className="home-main_howimg " src={item.url} alt="" />
                  </div>
                  <h3 className="text-center">{item.heading}</h3>
                  <p className="home-main_howpara">{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeHowitworks;