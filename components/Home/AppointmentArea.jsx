import React from "react";

const AppointmentArea = () => {
  return (
    <section className="section-area account-wraper1">
      <div className="container-fluid">
        <div
          className="appointment-inner section-sp2"
          style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F15.png?alt=media&token=e97a8bf9-a80c-43c0-8ff0-1792b9a8c6fa")',backgroundRepeat:'no-repeat',backgroundPosition:'20px 140px'}}
          
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="appointment-form form-wraper">
                  <h3 className="title">Book Appointment</h3>
                  <form action="#">
                    <div className="form-group">
                      <select className="form-select form-control">
                        <option>Selecty Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-select form-control">
                        <option>Select Doctor</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Numbers"
                      />
                    </div>
                    <div className="form-group">
                      <input type="date" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-lg">
                      Appointment Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="appointment-thumb">
                  <img src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fmobile.f82d7322.png?alt=media&token=f528ff99-0181-4e6e-80e7-d40cc11e1e15" alt="mobile vector" ></img>
                  <div className="images-group">
                    <img
                      className="img1"
                      src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2Fwomen.eb5c49c5.png?alt=media&token=3fc0f4cd-66a1-453c-8f2f-4f8fd87a4b28"
                      alt="woman charcter"
                    ></img>
                    <img className="img2" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F16.png?alt=media&token=b02088ea-8d1d-4c93-a1fc-a7c033fdff24" alt="icon" ></img>
                    <img className="img3" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F17.png?alt=media&token=8d514d2b-ce51-4174-8ac2-bff89c51bc97" alt="icon" ></img>
                    <img className="img4" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F18.png?alt=media&token=ab3fc68c-7ecb-4cea-b8ca-a2342f7c88c3" alt="icon" ></img>
                    <img className="img5" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F19.png?alt=media&token=70ed4bb2-ff25-4826-be13-6a628da1fb29" alt="icon" ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F20.png?alt=media&token=ef236c87-3abb-4d11-9433-0262fbf46750" alt="icon" ></img>
          <img className="pt-img2 animate-wave" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F21.png?alt=media&token=958784d3-7202-48c0-9207-38030444e50d" alt="icon" ></img>
          <img className="pt-img3 animate-wave" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F22.png?alt=media&token=8dbff4fb-bbaa-4353-a635-a80e6380371b" alt="icon" ></img>
          <img className="pt-img4 animate2" src="https://firebasestorage.googleapis.com/v0/b/e-comerce1.appspot.com/o/img%20site%20zaid%2F23.png?alt=media&token=135ae3cb-d6ad-4f3d-a149-cf998edfb581" alt="icon" ></img>
        </div>
      </div>
    </section>
  );
};

export default AppointmentArea;
