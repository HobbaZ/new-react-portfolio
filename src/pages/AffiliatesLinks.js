import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { AppContext } from "../components/AppContext";
import { FormButton } from "../components/BaseSettings";
import crocs from "../images/crocs-amazon-sale.png";
import lego5 from "../images/lego5.jpg";
import lego2 from "../images/lego2.JPG";
import lego3 from "../images/lego3.JPG";
import filament1 from "../images/amazon.JPG";

function Affiliates() {
  const { userInputs } = useContext(AppContext);

  return (
    <>
      <Container
        id="affiliates"
        className="m-auto"
        style={{ paddingTop: "90px" }}
      >
        <h1 style={{ color: `${userInputs.h1Color}` }}>Affiliate Links</h1>

        <div className="d-flex flex-wrap justify-content-left">
          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Lego Icons 10330 Ayrton Senna McLaren MP4/4
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={lego5}
                alt="An aerial view of the Ayrton Senna McLaren"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  26% off! Now $74
                </p>{" "}
                This 693 piece tribute to F1 legend Ayrton Senna and the iconic
                McLaren MP4/4 is a must-have for racing fans and LEGO lovers
                alike. It makes an incredible desk piece and is currently $74
                (26% off), click the link to grab one for yourself.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/4jX8zs6"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Lego Icons 10330 Ayrton Senna McLaren MP4/4 Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Lego Speed Champions 76917 Brian's Nissan Skyline GT-R 2 Fast 2
                Furious
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={lego2}
                alt="An aerial view of the Ayrton Senna McLaren"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  24% off! Now $25
                </p>{" "}
                This 8-stud wide, 319-piece build of Brian’s iconic R34 GT-R
                from 2 Fast 2 Furious is a must-have for Fast & Furious fans.
                Now just $25 (24% off), don’t miss your chance to grab this
                legendary ride at a discounted price. click the link to grab one
                for yourself.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/45oegea"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Lego Speed Champions 76917 Brian's Nissan Skyline Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Lego Icons 10333 Lord of the Rings: Barad-dûr
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={lego3}
                alt="An aerial view of the Ayrton Senna McLaren"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  5% off! Now $665
                </p>{" "}
                This 5,471-piece LEGO Icons set brings the dark tower of
                Barad-dûr to life, a true centerpiece for any Lord of the Rings
                fan. Now $665 (5% off) for a limited time.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/45oegea"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Icons 10333 Lord of the Rings Barad-dûr Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Crocs
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={crocs}
                alt="A pair of white Croc clog style shoes"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  Up to 50% off!
                </p>{" "}
                Insanely comfy, always quirky, and questionably stylish, Crocs
                are the treat your feet deserve. Select styles are up to 50%
                off. Click the link to grab a pair!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/43souaQ"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Crocs Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          {/*<Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                GKU 6900 PRO Front and Rear Dash Cam
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={filament1}
                alt="GKU 6900 PRO Front and Rear Dash Cam"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  29% off ($113.99, RRP $159.99 ) ends midnight 27/05/2025
                </p>{" "}
                Drive with confidence with crisp 4K front + 1080P rear footage
                for complete coverage on the road. Equipped with 5.8GHz WiFi,
                built-in GPS, and app control, it's easy to review, download,
                and manage your footage anytime.
                <ul>
                  <li>
                    Includes 64GB SD card (supports up to 256GB), you need to
                    format the card before first use
                  </li>
                  <li>Super Night Vision for clear low-light recordings</li>

                  <li>
                    Loop recording: 64GB SD card can hold 4 hours of footage,
                    the oldest video will be overwritten automatically, videos
                    can be locked to prevent overwriting
                  </li>
                  <li>USB charging (Type C USB cable not included)</li>
                </ul>
                Perfect for commuters, rideshare drivers, and road trippers who
                want safety, clarity, and convenience in one sleek dashcam.
                <br></br>
                <b>Note: A Hardwire kit is required for 24 hr recording</b>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/43MAXaH"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens GKU 6900 PRO Front and Rear Dash Cam product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>*/}

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Amazon Fire TV Stick 4K streaming device
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={filament1}
                alt="Amazon Fire TV Stick 4K streaming device"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  30% off! Now $69
                </p>{" "}
                The newest Fire TV Stick, now with Wi-Fi 6 support for smoother
                streaming and Dolby Vision/Atmos for immersive sound and
                picture. Stream over 350,000+ movies and shows from top apps
                like Netflix, Prime Video, YouTube, and more all from one
                compact device.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/4mznYAH"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Amazon Fire TV Stick 4K streaming device product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          {/*<Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                eSUN 3D printer Filament Sale ends midnight 25/05
              </Card.Title>
              <img
                className="card-img-top projectImage"
                src={filament1}
                alt="Printing possibilities with eSUN filament"
              />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                <p className="text-center" style={{ backgroundColor: "red" }}>
                  Flash sale alert up to 25% off!
                </p>{" "}
                <br></br> Get up to 25% off select single roll filaments, but
                hurry, this sale ends at midnight!
                <br></br>Perfect time to stock up for your next print!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/4mB0kUA"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens eSUN filament product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>*/}
        </div>
      </Container>
    </>
  );
}

export default Affiliates;
