const StayArray = [
    {
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "Green House",
      property:"54,475"
      
    },
    {
      image:
        "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      property:"12,548",
      name: "Wooden House",
     
    },
    {
      image:
        "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      property:"4,584",
      name: "Boat House",
  
    },
    {
      image:
        "https://images.pexels.com/photos/248837/pexels-photo-248837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      name: "Farm House",
      property: "9,412",
    },
    {
      image:
        "https://images.pexels.com/photos/3613236/pexels-photo-3613236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "DOME House",
      property: "9,412",
    },
    {
      image:
        "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Palace",
      property: "412",
    },
    
  ];
  
  function StayTypesName() {
    return (
      <>
        <div className="container" >
          <div className="row">
              <div className=" mb-5 col-12">
                  <h1  style={{fontFamily:"",color:"black"}}>Explore by types of stays</h1>
                  <br />
                  <h4>Explore houses based on 10 types of stays</h4>
              </div>
            {StayArray.map((data, item) => (
              <div className="col-6 col-md-4 col-lg-4 mb-5 ">
                <div class="content">
                  {" "}
                  <img alt={data.name} class="content-image" src={data.image} style={{height:"230px",borderRadius:"12px"}}/>
                  <div style={{padding:"10px",}}>
                    
                    <h3>{data.name}</h3>
                    <p style={{color:" rgb(75, 72, 72)"}}>{data.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default StayTypesName;