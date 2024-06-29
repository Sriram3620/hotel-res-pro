import React from "react";

const Homebenefit = () => {
  const array = [
    {
      h1: "Advertising",
      h2: "Cost-effective advertising",
      h3: "With a free listing, you can advertise your rental with no upfront costs",
    },
    {
      h1: "Exposure",
      h2: "Reach millions with Chisfis",
      h3: "Millions of people are searching for unique places to stay around the world",
    },
    {
      h1: "secure",
      h2: "secure and simple",
      h3: "A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online",
    },
  ];
  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="home-benefit_imgcontainer col-lg-7">
              <img
                className="home-benefit_img"
                src="https://chisfis-template.vercel.app/static/media/our-features.d69027726b5a972c1b17.png"
                alt=""
              />
            </div>
            <div className="home-benefit_textcontainer col-lg-5">
              <p style={{ color: " rgb(156 163 175)" }}>Benefits</p>
              <h1>Happening Cities</h1>
              <div>
                {array.map((item, index) => {
                  return (
                    <div className="home-benefit_text mt-3 " key={index}>
                      <p className="home-benefit_text-para1">{item.h1}</p>
                      <h4 style={{ fontWeight: "bolder" }}>{item.h2}</h4>
                      <p className="home-benefit_text-para2">{item.h3}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homebenefit;