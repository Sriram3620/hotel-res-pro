import "./index.css";
const StayArray = [
  {
    image:
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 10 Beds",
    name: "Western Hotel",
    location: "Anzinger",
    price: "$26",
    rating: "4.8",
  },
  {
    image:
      "https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 6 Beds",
    name: "Hotel Grinnell",
    location: "America",
    price: "$20",
    rating: "3.6",
  },
  {
    image:
      "https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 11 Beds",
    name: "HalfMoon Hotel",
    location: "Killdeer park",
    price: "$36",
    rating: "4.1",
  },
  {
    image:
      "https://images.pexels.com/photos/2290738/pexels-photo-2290738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 8 Beds",
    name: "Black Paris Hotel",
    location: "Paris",
    price: "$31",
    rating: "4.6",
  },
  {
    image:
      "https://images.pexels.com/photos/6434634/pexels-photo-6434634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 6 Beds",
    name: "Hotel Grinnell",
    location: "America",
    price: "$20",
    rating: "3.6",
  },
  {
    image:
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cabin: "Entire cabin  * 10 Beds",
    name: "Western Hotel",
    location: "Anzinger",
    price: "$26",
    rating: "4.8",
  },

];

function StayPlace() {
  return (
    <>
      <div className="container" >
        <div className="row">
            <div className="mt-1 mb-5 col-12">
                <h1  style={{fontFamily:"",color:"black"}}>Featured Places to Stay</h1>
                <br />
                <h4>Popular places to stay that we recommends for you</h4>
            </div>
          {StayArray.map((data, item) => (
            <div className="col-12 col-md-4 col-lg-4  mb-5 shadow">
              <div class="content">
                {" "}
                <img alt={data.name} class="content-image" src={data.image} style={{height:"230px"}}/>
                <div class>
                  <p className="StayPlace-color-fade mt-3">{data.cabin}</p>
                  <h3>{data.name}</h3>
                </div>
                <div className="d-flex mt-3">
                  <i class="fa-solid fa-location-dot p-1  "></i>
                  <p className="StayPlace-color-fade">{data.location}</p>
                </div>
                <div className="d-flex flew-row justify-content-between mt-3">
                  <p>
                    <span
                      style={{
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {data.price}
                    </span>
                    /Night
                  </p>
                  <div className="d-flex ">
                    <i
                      className="fa-solid fa-star p-1"
                      style={{ color: "#FFD43B" }}
                    ></i>
                    <p>{data.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StayPlace;