import React, { useState, useEffect } from 'react';

import { Container, Button } from 'react-bootstrap';

function Projects() {

    // state for messages
    const [infoMessage, setInfoMessage] = useState('');

    const [repoData, setRepoData] = useState([])

    //Get my github repo data when component loads
    useEffect(() => {
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

    }, [])

    return (
        <>
        <Container id='projects'>
            <h1 className="text-center" id="projects">Projects</h1>

            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {repoData.map((repo, index) => (
                <>
                <div className='card w-25 p-2 m-1'>
                <div className='card-body'>
                <div className='card-title'>
                <h3 key={index}>{repo.name.replace(/-/g, " ")}</h3> 
                </div>

                <div className='card-text'>
                <p>{repo.description}</p>
                </div>

                <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to" ${repo.html_url}`}>
                    <Button className='btn btn-primary'><i className="fa-solid fa-globe"></i> Github link</Button></a>

                    <br></br>

                <a href={repo.html_url} rel="noreferrer" target="_blank" aria-label={`If clicked this will open to" ${repo.html_url}`}>
                    <Button className='btn btn-primary'><i className="fa-solid fa-globe"></i> Deployed link</Button></a>
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