import React from "react";
import './index.css'


const HeadingArray = [
  {
    image:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    location: "New York",
    description: "Statue of Liberty",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.3nGGSngrOJnHdJQ8I6bprwHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      location: "Singapore",
      description: "MerLion Park",
  },
  {
    image:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      location: "Paris",
      description: "Effiel Tower",
  },
  {
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      location: "London ",
      description: "WestMinister Bridge",
  },
  {
    image:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      location: "Tokyo",
      description: "Skytree",
  },
  {
    image:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      location: "Maldives",
      description: "Petit Saint Vincent",
  },
];

const HomeHeading = () => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-12 mt-5 pt-5  mb-5">
            <h1 className="HeadingName ">Popular cities</h1>
          </div>
          {HeadingArray.map((data, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-5 " key={index}>
          <div class="content"> 
                     <div class="content-overlay"></div> <img class="content-image" alt={data.location} src={data.image}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">{data.description}</h3>
                         <p class="content-text"><i class="fa fa-map-marker"></i>{data.location}</p>
                     </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeHeading;