import React, { useState, useEffect, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { FormButton } from "../components/BaseSettings";
import image1 from "../images/cryptoworld.png";
import image2 from "../images/filter.png";
import image3 from "../images/graphql-template.png";
import image4 from "../images/vehicle.jpg";
import image5 from "../images/weather-api-app.png";
import image6 from "../images/worthly.png";
import { AppContext } from "../components/AppContext";

function Projects() {
  const { userInputs } = useContext(AppContext);
  // state for messages
  const [infoMessage, setInfoMessage] = useState("");

  const [repoData, setRepoData] = useState([]);

  const projectWebsites = [
    "https://hobbaz.github.io/CryptoWorld/",
    "https://hobbaz.github.io/job_search_website/",
    "https://react-graphql-template.herokuapp.com/",
    "https://adrift-dev.itch.io/vehicle-generator",
    "https://hobbaz.github.io/Weather-API-app/",
    "https://worthly.herokuapp.com/",
  ];

  const projectImages = [image1, image2, image3, image4, image5, image6];

  // Get my GitHub repo data when component loads
  useEffect(() => {
    function getGithubData() {
      let requestUrl = "https://api.github.com/users/HobbaZ/repos?per_page=40";
      const repoArray = [];
      const projectNames = [
        "CryptoWorld",
        "job_search_website",
        "React-Graphql-Template",
        "Vehicle-Generator-Game",
        "Weather-API-app",
        "Worthly",
      ];

      try {
        fetch(requestUrl)
          .then((response) => response.json())
          .then((data) => {
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < projectNames.length; j++) {
                if (data[i].name === projectNames[j]) {
                  repoArray.push(data[i]);
                }
              }
            }
            setRepoData(repoArray);
          });
      } catch (err) {
        setInfoMessage("Error getting GitHub repo data", err);
        throw new Error(err);
      }
    }
    getGithubData();
  }, []);

  function getImage(index) {
    let image = "";
    if (index >= 0 && index < projectImages.length) {
      image = projectImages[index];
    }
    return image;
  }

  function getWebsiteLink(index) {
    let website = "";
    if (index >= 0 && index < projectWebsites.length) {
      website = projectWebsites[index];
    }
    return website;
  }

  return (
    <Container id="projects" className="m-auto p-0">
      <h1 style={{ color: `${userInputs.h1Color}` }}>Projects</h1>
      <div className="d-flex flex-wrap justify-content-left">
        {repoData.map((repo, index) => (
          <Card
            className="col-sm-12 col-md-6 col-lg-4 p-2 border-0"
            key={repo.id} // Ensure each Card has a unique key
          >
            <img
              className="card-img-top projectImage"
              src={getImage(index)}
              alt={`${repo.name} website`}
            />
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                {repo.name.replace(/[-_]+/g, " ")}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                {repo.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href={repo.html_url}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`If clicked this will open to ${repo.html_url}`}
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={
                      <div className="buttonText">
                        <i className="fab fa-github"></i> GitHub
                      </div>
                    }
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
              <br />
              <div className="text-center">
                <a
                  href={getWebsiteLink(index)}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`If clicked this will open to ${getWebsiteLink(
                    index
                  )}`}
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={
                      <div className="buttonText">
                        <i className="fas fa-globe"></i> Website
                      </div>
                    }
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
      {infoMessage && (
        <div style={{ color: `${userInputs.pColor}` }} className="text-center">
          {infoMessage}
        </div>
      )}
      <br />
      <h1 style={{ color: `${userInputs.h1Color}` }}>Volunteer Projects</h1>
      <div className="d-flex flex-wrap justify-content-left">
        <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Prisoners Aid (ACT) Website Revamp
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Prisoners Aid has been operating as a community organisation in
              Canberra since 1963. I assisted with updating stylistic aspects of
              the website and uploading forms to the website.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <a
                href="https://www.paact.org.au/"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://www.paact.org.au/`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fas fa-globe"></i> PAACT Website
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
          </Card.Footer>
        </Card>
        <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Code.Sydney JrDev website
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Assisting in the development of Code.Sydney's junior developer
              resume review website. Not deployed yet.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Projects;
