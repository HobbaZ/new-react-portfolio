import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { FormButton } from "../components/BaseSettings";
import image1 from "../images/cryptoworld.png";
import image2 from "../images/filter.png";
import image3 from "../images/graphql-template.png";
import image4 from "../images/vehicle.jpg";
import image5 from "../images/weather-api-app.png";
import image6 from "../images/worthly.png";

function Projects({ ...props }) {
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

  //Get my github repo data when component loads
  useEffect(() => {
    function getGithubData() {
      let requestUrl = "https://api.github.com/users/HobbaZ/repos?per_page=40";

      let storedRepoArray = [];

      const repoArray = [];

      const projectNames = [
        "CryptoWorld",
        "job_search_website",
        "React-Graphql-Template",
        "Vehicle-Generator-Game",
        "Weather-API-app",
        "Worthly",
      ];

      //Put the repo title names you want displayed here (must match exactly)

      try {
        if (localStorage.getItem("repoArray")) {
          storedRepoArray = JSON.parse(localStorage.getItem("repoArray"));
          setRepoData(storedRepoArray);
        } else {
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })

            .then(function (data) {
              //loop through all github repos and match repo names to project names
              // refactor to use map and reduce later
              for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < projectNames.length; j++) {
                  if (data[i].name === projectNames[j]) {
                    repoArray.push(data[i]);
                    localStorage.setItem(
                      "repoArray",
                      JSON.stringify(repoArray)
                    );
                    storedRepoArray = repoArray;
                  }
                }
              }

              setRepoData(repoArray);
            });
        }
      } catch (err) {
        setInfoMessage("Error getting Github repo data", err);
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
    switch (index) {
      case 0:
        website = projectWebsites[0];
        break;
      case 1:
        website = projectWebsites[1];
        break;
      case 2:
        website = projectWebsites[2];
        break;
      case 3:
        website = projectWebsites[3];
        break;
      case 4:
        website = projectWebsites[4];
        break;
      case 5:
        website = projectWebsites[5];
        break;
      case 6:
        website = projectWebsites[6];
        break;
      default:
        break;
    }

    if (index === 1) {
      website = projectWebsites[1];
    } else if (index === 2) {
      website = projectWebsites[2];
    }
    return website;
  }

  return (
    <>
      <Container id="projects" className="m-auto p-0">
        <h1 style={{ color: `${props.h1Color}` }}>Projects</h1>

        <div className="d-flex flex-wrap justify-content-left">
          {repoData.map((repo, index) => (
            <>
              <Card
                className="col-sm-12 col-md-6 col-lg-4 p-2 border-0"
                key={index}
              >
                <img
                  className="card-img-top projectImage"
                  src={getImage(index)}
                  alt={`${repo.name} website`}
                />

                <Card.Header>
                  <Card.Title style={{ color: `${props.h1Color}` }}>
                    {repo.name.replace(/[-_]+/g, " ")}{" "}
                    {/*replace all dashes in repo name (-) with spaces*/}
                  </Card.Title>
                </Card.Header>

                <Card.Body>
                  <Card.Text style={{ color: `${props.pColor}` }}>
                    {repo.description}
                  </Card.Text>
                </Card.Body>

                <Card.Footer>
                  <div className="text-center">
                    <a
                      href={repo.html_url}
                      rel="noreferrer"
                      target="_blank"
                      aria-label={`If clicked this will open to" ${repo.html_url}`}
                    >
                      <FormButton
                        className="form-btn-primary"
                        buttonGradientAngle={props.buttonGradientAngle}
                        buttonGradientColor1={props.buttonGradientColor1}
                        buttonGradientColor2={props.buttonGradientColor2}
                        text={
                          <div className="buttonText">
                            <i className="fab fa-github"></i> Github
                          </div>
                        }
                        colour={props.buttonTextColor}
                      ></FormButton>
                    </a>
                  </div>

                  <br></br>

                  <div className="text-center">
                    <a
                      href={getWebsiteLink(index)}
                      rel="noreferrer"
                      target="_blank"
                      aria-label={`If clicked this will open to" ${repo.html_url}`}
                    >
                      <FormButton
                        className="form-btn-primary"
                        buttonGradientAngle={props.buttonGradientAngle}
                        buttonGradientColor1={props.buttonGradientColor1}
                        buttonGradientColor2={props.buttonGradientColor2}
                        text={
                          <div className="buttonText">
                            <i className="fas fa-globe"></i> Website
                          </div>
                        }
                        colour={props.buttonTextColor}
                      ></FormButton>
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            </>
          ))}
        </div>

        {infoMessage && (
          <div style={{ color: `${props.pColor}` }} className="text-center">
            {infoMessage}
          </div>
        )}

        <br />

        <hr style={{ backgroundColor: `${props.h1Color}` }} />

        <h1 style={{ color: `${props.h1Color}` }}>Volunteer Projects</h1>

        <div className="d-flex flex-wrap justify-content-left">
          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${props.h1Color}` }}>
                {" "}
                Prisoners Aid (ACT) Website Revamp
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${props.pColor}` }}>
                Prisoners Aid has been operating as a community organisation in
                Canberra since 1963. I assissted with updating stylistic aspects
                of the website and uploading forms to the website.
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
                    buttonGradientAngle={props.buttonGradientAngle}
                    buttonGradientColor1={props.buttonGradientColor1}
                    buttonGradientColor2={props.buttonGradientColor2}
                    text={
                      <div className="buttonText">
                        <i className="fas fa-globe"></i> PAACT Website
                      </div>
                    }
                    colour={props.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${props.h1Color}` }}>
                {" "}
                Code.Sydney JrDev website
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${props.pColor}` }}>
                Assisting in the development of Code.Sydney's junior developer
                resume review website. Not deployed yet.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Projects;
