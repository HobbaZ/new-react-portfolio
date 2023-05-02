import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { FormButton } from "../components/BaseSettings";
import Image1 from "../images/cryptoworld.WebP";
import image3 from "../images/graphql-template.WebP";
import image4 from "../images/vehicle.WebP";
import image5 from "../images/weather-api-app.WebP";
import image6 from "../images/worthly.WebP";

function Projects({ ...props }) {
  // state for messages
  const [infoMessage, setInfoMessage] = useState("");

  const [repoData, setRepoData] = useState([]);

  const projectWebsites = [
    "https://hobbaz.github.io/CryptoWorld/",
    "https://react-graphql-template.herokuapp.com/",
    "https://adrift-dev.itch.io/vehicle-generator",
    "https://hobbaz.github.io/Weather-API-app/",
    "https://worthly.herokuapp.com/",
  ];

  const projectImages = [Image1, image3, image4, image5, image6];

  //Get my github repo data when component loads
  useEffect(() => {
    function getGithubData() {
      let requestUrl = "https://api.github.com/users/HobbaZ/repos?per_page=40";

      let storedRepoArray = [];

      const repoArray = [];

      const projectNames = [
        "CryptoWorld",
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
              //loop through all github repos and match repo names to project names you've listed in project names array, push the marching array data to another array
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
      /*case 6:
        website = projectWebsites[6];
        break;*/
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
      <Container id="projects">
        <h1 style={{ color: `${props.h1Color}` }}>Projects</h1>

        <div className="d-flex flex-wrap justify-content-center">
          {repoData.map((repo, index) => (
            <>
              <Card className="col-12 col-md-5 col-lg-3 m-1" key={index}>
                <img
                  className="card-img-top projectImage"
                  src={getImage(index)}
                  alt={`${repo.name} website`}
                />

                <Card.Header>
                  <Card.Title style={{ color: `${props.h1Color}` }}>
                    {repo.name.replace(/-/g, " ")}{" "}
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
      </Container>
    </>
  );
}

export default Projects;
