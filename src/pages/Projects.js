import React, { useState, useEffect } from 'react';

import { Container, Button } from 'react-bootstrap';

import {Heading, P} from '../components/BaseSettings'

function Projects() {

    const [userInputs, setUserInputs] = useState({
    
        // HTML variables
    
        //get values from form with localstorage
        h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#000000",
        pColor: JSON.parse(localStorage.getItem("pColor")) || "#000000",
        buttonGradientAngle: JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0,
        buttonGradientColor1: JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#000000",
        buttonGradientColor2: JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#000000",
        buttonTextColor: JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff"
      })

    // state for messages
    const [infoMessage, setInfoMessage] = useState('');

    const [repoData, setRepoData] = useState([])

    //Get my github repo data when component loads
    useEffect(() => {
            userInputs.h1Color = JSON.parse(localStorage.getItem("h1Color"))
            userInputs.pColor = JSON.parse(localStorage.getItem("pColor"))
      
        function getGithubData () {

            let requestUrl = 'https://api.github.com/users/HobbaZ/repos';

            //Put the repo title names you want displayed here(must match exactly)
            const projectNames = 
            [
            "React-Graphql-Template",
            "CryptoWorld",
            "Password-Generator",
            "Weather-API-app",
            "Product-Generator-Website",
            "react-portfolio"
            ];

            const repoArray=[];

        try {
            fetch(requestUrl)
            .then(function (response) {
                 return response.json()
                })

            .then(function (data) {

                //loop through all github repos and match repo names to project names you've listed in project names array, push the marching array data to another array
            // refactor to use map and reduce later
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < projectNames.length; j++) {
                    if (data[i].name === projectNames[j]) {
                        repoArray.push(data[i])
                    }
                }
            }
                console.log(repoArray)
                 setRepoData(repoArray)
                })
        }
        catch (err) {
            setInfoMessage('Runtime Error getting data', err)
            throw new Error (err)
        }
    };
    getGithubData()

    }, [userInputs])

    return (
        <>
        <Container id='projects'>
        {/*<Heading 
      valueToChange={h1Color}
      text ="Projects"
      >
      </Heading>*/}

            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {repoData.map((repo, index) => (
                <>
                <div className='card w-25 p-2 m-1'>
                <div className='card-body'>
                <div className='card-title'>
                <Heading 
                valueToChange={userInputs.h1Color}
                key={index}
                text ={repo.name.replace(/-/g, " ")} //replace all dashes in repo name (-) with spaces
                >
                </Heading>
                
                {/*<h3 className='heading' key={index}>{repo.name.replace(/-/g, " ")}</h3> {/*replace all dashes in repo name (-) with spaces*/}
                </div>

                <div className='card-text'>
                <P  
                valueToChange={userInputs.pColor}
                text={repo.description}>
                </P>
                </div>

                <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to" ${repo.html_url}`}>
                    <Button className='btn btn-primary'>
                        <div className="buttonText">
                        <i className="fab fa-github"></i> Github</div>
                            </Button></a>

                    <br></br>

                <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to" ${repo.html_url}`}>
                    <Button className='btn btn-primary'>
                        <div className="buttonText">
                            <i className="fas fa-globe"></i> Website</div>
                            </Button></a>
                </div>
                </div>
                </>
            ))}</div>

            {infoMessage && (
              <div className='text-center text-dark'>{infoMessage}</div>
            )}

        </Container>
        </>
    );
};

export default Projects;