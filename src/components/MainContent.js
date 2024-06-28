import React from "react";
import "./MainContent.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import First from "../images/Img1.jpg";
import Second from "../images/img2.jpg";
import ActivityImage from "../images/Forma 1.jpg";
import HikingImage from "../images/Forma 2.jpg";
import MountainImage from "../images/Forma 3.jpg";
import Third from "../images/img3.jpg";
import Fourth from "../images/img4.jpg";
import Fifth from "../images/img5.jpg";
import Sixth from "../images/img9.jpg";

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <div className="hero-section text-white position-relative">
        <img
          src={First}
          alt="Hiker on a wooden path"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="upper-triangle">
          <div className="text-container">
            <h3 className="first-heading fw-bold">
              Discover your
              <br /> next Hike
            </h3>
            <h3 className="text-info second-heading">
              DISCOVER YOUR <br />
              NEXT HIKE
            </h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur
              <br /> adipiscing elit, sed do.
            </p>
          </div>
        </div>
        <div className="lower-triangle"></div>
      </div>
      {/* New Sections */}
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-uppercase mb-0">Hiking and Camping</h3>
            <h3 className="text-uppercase fw-bold">Classes</h3>
            <hr className="bg-info w-25" style={{ height: "3px" }} />
          </div>
        </div>
        <div className="row text-center" style={{ marginBottom: "80px" }}>
          {[
            { title: "ACTIVITIES", image: ActivityImage },
            { title: "HIKING", image: HikingImage },
            { title: "MOUNTAINS", image: MountainImage },
          ].map((item, index) => (
            <div key={index} className="col-md-4 mb-4 mb-md-0">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center p-4 mb-3"
                style={{ width: "150px", height: "150px" }}
              >
                <img
                  src={item.image}
                  className="img-fluid rounded-circle"
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <h5>{item.title}</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie
                posuere
              </p>
            </div>
          ))}
        </div>

        {/* Rock Climbing Section */}
        <div className="row mt-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="text-uppercase mb-4 fw-bold">
              Rock
              <br />
              Climbing
            </h3>
            <h5 className="mb-3 fw-bold">1. CLASSES & EVENTS</h5>
            <p className="lead">
              Hatha is the most classic yoga. Its
              <br />
              origin is in the Raya Yoga of Patanjali <br />
              and other classical texts such as <br />
              Bhagavad Gita and Hatha Yoga
              <br /> Pradipika.
            </p>
            <hr className="bg-info w-60" style={{ height: "3px" }} />
            <p>
              10 modules
              <br /> divided into 7 weekends
            </p>
            <div className="row mt-4">
              <div className="col-6 fw-bold">
                <p className="mb-0">Start</p>
                <p>
                  April 15
                  <br />
                  20.00 hs
                </p>
              </div>
              <div className="col-6 fw-bold">
                <p className="mb-0">Price</p>
                <p>$900</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
            <div
              className="rounded-circle overflow-hidden"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                src={Second}
                className="img-fluid"
                alt="Hiker"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h5
              className="position-absolute fw-bold text-center"
              style={{
                bottom: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "orange",
                fontFamily: "cursive",
                textAlign: "center",
                maxWidth: "80%",
                zIndex: "1",
                background: "white",
              }}
            >
              WALKING IN NATURE
              <br />
              AS A RECREATIONAL
              <br />
              ACTIVITY
            </h5>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0" style={{ marginTop: "80px" }}>
        <div className="position-relative">
          <img
            src={Third}
            alt="Hikers on a trail"
            className="img-fluid w-100"
            style={{ maxHeight: "600px", objectFit: "cover" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
            style={{ opacity: 0.4 }}
          ></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-5">
            <h1 className="text-white fw-bold">
              BIG BEND NATIONAL PARK
              <br /> HIKING GUIDE
            </h1>
            <h2 className="text-white mb-2">
              THIS HIKE IS THE NEXT BEST
              <br /> OPTION.
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              className="btn btn-outline-light custom-btn align-self-start mt-2 btn-sm"
              style={{ borderColor: "#1acfee" }}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {/*Hike Section*/}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase fw-bold mb-0">How to recover from</h3>
            <h3 className="text-uppercase fw-bold">A Hike</h3>
            <hr className="bg-info w-25 mb-5" style={{ height: "3px" }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="d-flex mb-4">
              <div className="me-4">
                <div
                  className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={ActivityImage}
                    alt="activity"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <ul className="list-unstyled">
                <li>- Lorem ipsum</li>
                <li>- Dolor sit amet consectetur</li>
                <li>- Adipiscing elit aptent</li>
                <li>- Torquent, interdum</li>
              </ul>
            </div>

            <div className="d-flex mb-4">
              <div className="me-4">
                <div
                  className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={HikingImage}
                    alt="activity"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <ul className="list-unstyled">
                <li>- Fusce etiam augue</li>
                <li>- Dignissim at euismod</li>
                <li>- Libero montes,</li>
                <li>- Adipiscing elit aptent</li>
                <li>- Torquent, interdum</li>
              </ul>
            </div>

            <div className="d-flex">
              <div className="me-4">
                <div
                  className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={MountainImage}
                    alt="activity"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <ul className="list-unstyled">
                <li>- Libero montes,</li>
                <li>- Adipiscing elit aptent</li>
                <li>- Torquent, interdum</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="position-relative" style={{ marginTop: "-10px" }}>
              <CloseIcon
                className="position-absolute text-info"
                style={{ top: 350, right: -50 }}
              />
              <CloseIcon
                className="position-absolute text-info"
                style={{ bottom: -80, right: -50 }}
              />
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "330px", height: "330px", margin: "0 auto" }}
              >
                <img
                  src={Fourth}
                  alt="Man looking up"
                  className="img-fluid"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h4
                className="text-info fw-bold position-absolute"
                style={{
                  bottom: "-80px",
                  right: "140px",
                  fontFamily: "cursive",
                }}
              >
                MAKE SURE YOUR
                <br />
                GEAR FITS
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="nature-walking-section position-relative">
        <img
          src={Fifth}
          alt="Hiker on a wooden path"
          className="w-100 h-100 object-fit-cover"
        />
        <div className="upper-triangle1">
          <div className="text-container">
            <h3 className="main-heading" style={{ color: "#f55f0f" }}>
              WALKING IN NATURE
              <br /> AS A RECREATIONAL
              <br /> ACTIVITY
            </h3>
            <h3 className="second-heading">.ACTIVITIES</h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur adip.
            </p>
          </div>
        </div>
        <div className="lower-triangle1"></div>
      </div>
      {/* places visit*/}
      <div className="container mt-5">
        <h3 className=" fw-bold mb-5">
          PLACES TO VISIT
          <br /> IN AUTUMN
        </h3>
        <div className="row">
          {[
            { title: "Mountain Loop", image: First, distance: "0.3" },
            { title: "National Park", image: Second, distance: "0.2" },
            { title: "Canyon Trail", image: Third, distance: "0.6" },
          ].map((place, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="text-center">
                <div className="position-relative mb-3">
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={place.image}
                      alt={place.title}
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      bottom: "-20px",
                      left: "30%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <MoreVertIcon
                      style={{ color: "#0dcaf0", fontSize: "2rem" }}
                    />
                  </div>
                </div>
                <h3>{place.title}</h3>
                <p className="text-muted">
                  Lorem ipsum sit amet, consectetur adipiscing...
                </p>
                <hr className="w-50 mx-auto" />
                <p className="text-muted small">
                  Location {place.distance} miles.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-info">see more</button>
        </div>
      </div>
      {/*2.Activites*/}
      <div className="container-fluid bg-dark text-white py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 position-relative">
              <div
                className="rounded-circle overflow-hidden"
                style={{
                  width: "300px",
                  height: "300px",
                  position: "absolute",
                  top: "50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={Sixth}
                  alt="Mountaineer"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="mb-0 pt-5 text-center"
                style={{ marginTop: "320px" }}
              >
                <h3
                  className="text-info fw-bold"
                  style={{ fontFamily: "cursive" }}
                >
                  WALKING IN NATURE
                  <br />
                  AS A RECREATIONAL
                  <br />
                  ACTIVITY
                </h3>
              </div>
            </div>
            <div className="col-md-7">
              <h2 className="display-4 fw-bold mb-4">
                MOUNTAINEERING
                <br />
                ICE CLIMBING
              </h2>
              <h3 className="mb-3">2. ACTIVITIES</h3>
              <p>
                Kundalini is the most classic yoga. Its
                <br />
                origin is in the Raya Yoga of Patanjali
                <br />
                and other classical texts such as
                <br />
                Bhagavad Gita and Hatha Yoga
                <br />
                Pradipika.
              </p>
              <hr
                className="bg-info"
                style={{ width: "50px", height: "3px" }}
              />
              <p>
                17 modules
                <br />
                divided into 5 weekends
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <p className="mb-0">Start</p>
                  <p>
                    April 15
                    <br />
                    20.00 hs
                  </p>
                </div>
                <div className="col-6">
                  <p className="mb-0">Price</p>
                  <p>$900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="position-relative">
          <img
            src={Third}
            className="img-fluid w-100"
            alt="Hikers on a trail"
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark"
            style={{ opacity: "0.7" }}
          >
            <h5
              className="text-center text-white fw-bold px-3"
              style={{ fontFamily: "cursive" }}
            >
              THE ASANAS PURIFY OUR BODY AND
              <br />
              KEEP IT HEALTHY, MAKING IT A SUITA-
              <br />
              BLE VEHICLE FOR THE SOUL.
            </h5>
            <button
              className="btn btn-outline-light mt-3"
              style={{ borderColor: "#1acfee" }}
            >
              see more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
