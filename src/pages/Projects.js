import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import {Heading, P, FormButton, H4} from '../components/BaseSettings'

function Projects({
    ...props
}) {
    
    // state for messages
    const [infoMessage, setInfoMessage] = useState('');

    const [repoData, setRepoData] = useState([])

    const projectNames = 
    [
    "CryptoWorld",
    "Product-Generator-Website",
    "React-Graphql-Template",
    "Vehicle-Generator-Game",
    "Weather-API-app",
    "Worthly"
    ];

    const projectWebsites = 
    [
    "https://hobbaz.github.io/CryptoWorld/",
    "https://hobbaz.github.io/Product-Generator-Website/",
    "https://react-graphql-template.herokuapp.com/",
    "https://adrift-dev.itch.io/vehicle-generator",
    "https://hobbaz.github.io/Weather-API-app/",
    "https://worthly.herokuapp.com/"
    ];

    //Get my github repo data when component loads
    useEffect(() => {
      
        function getGithubData () {

            let requestUrl = 'https://api.github.com/users/HobbaZ/repos?per_page=40';

            const repoArray=[];

            //Put the repo title names you want displayed here (must match exactly)
            
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

                 setRepoData(repoArray)
                 console.log(repoArray)
                })
        }
        catch (err) {
            setInfoMessage('Error getting data', err)
            throw new Error (err)
        }
    };
    getGithubData()

    }, []);

    function getWebsiteLink(index) {
        let website = ''
        switch (index) {
            case 0:
                website = projectWebsites[0]
                break;
            case 1:
                website = projectWebsites[1]
                break;
            case 2:
                website = projectWebsites[2]
                break;
            case 3:
                website = projectWebsites[3]
                break;
            case 4:
                website = projectWebsites[4]
                break;
            case 5:
                website = projectWebsites[5]
                break;
            case 6:
                website = projectWebsites[6]
                break;
            default:
                break;
        }

        


                if (index === 1) {
                    website = projectWebsites[1]
                }

                else if (index === 2) {
                    website = projectWebsites[2]
                }
                return website
    }

    return (
        <>
        <Container id='projects'>

        <Heading 
        valueToChange={props.h1Color}
        text ="Projects"
        >
        </Heading>

            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {repoData.map((repo, index) => (
                <>
                <div className='card w-25 p-2 m-1'>
                <div className='card-body'>
                <div className='card-title' key={index}>
                
                <H4 
                valueToChange={props.h1Color}
                text ={repo.name.replace(/-/g, " ")} //replace all dashes in repo name (-) with spaces
                //text ={repo.name}
                >
                </H4>
                </div>

                <div className='card-text'>
                <P  
                valueToChange={props.pColor}
                text={repo.description}>
                </P>
                </div>

                <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to" ${repo.html_url}`}>
                <FormButton 
                className='btn btn-primary'
                buttonGradientAngle={props.buttonGradientAngle}
                buttonGradientColor1={props.buttonGradientColor1}
                buttonGradientColor2={props.buttonGradientColor2}
                text= {<div><i className="fab fa-github"></i>Github</div>}
                colour={props.buttonTextColor}>
                </FormButton>
                </a>

                <br></br>

                <>
                <a href={getWebsiteLink(index)} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to `}>
            
                <FormButton 
                className='btn btn-primary'
                buttonGradientAngle={props.buttonGradientAngle}
                buttonGradientColor1={props.buttonGradientColor1}
                buttonGradientColor2={props.buttonGradientColor2}
                text= {<div><i className="fas fa-globe"></i>Website</div>}
                colour={props.buttonTextColor}>
                </FormButton>
                </a>
                </>

                </div>
                </div>
                </>
            ))}</div>

            {infoMessage && (
              <div style={{color: `${props.pColor}`}} className='text-center'>{infoMessage}</div>
            )}

        </Container>
        </>
    );
};

export default Projects;