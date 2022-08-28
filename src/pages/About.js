import React from 'react';

import { Container } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

function About() {

    return (
        <>
        <Container id='about'>
        <CanvasContainer />

      <div className='aboutTextBox'>
        <section>
      <h1>Hi, I'm Zac and I'm a web developer based in inner Sydney</h1><br></br>
      <h3> <div align="center">
        <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bootstrap.svg"  className='icons' alt='Bootstrap icon' />
        <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg"  className='icons' alt='Git icon'/>
        <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg"  className='icons' alt='JavaScript icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"  className='icons' alt='HTML5 icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"  className='icons' alt='CSS3 icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"  className='icons' alt='Express icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg"  className='icons' alt='GraphQL icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"  className='icons' alt='MongoDB icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"  className='icons' alt='MySQL icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"  className='icons' alt='Node.js icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"  className='icons' alt='Npm icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"  className='icons' alt='React icon'/>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"  className='icons' alt='TailWind CSS icon'/>
</div>
</h3>
      <br></br>
      
      <p className="aboutMeDesc">
      I'm a junior full stack web developer now based in the greater Sydney area. I enjoy working on interesting projects, whether that's refactoring a code base to make it simpler and faster, 
      implementing that new feature or turning an idea into a working app or website, I'm up for the challenge. <br></br><br></br> Check out some more of my projects <a href='https://github.com/HobbaZ'>here</a> or check out my <a href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a> if you want to have a chat.
      </p>
      </section>
    </div>
        </Container>
        </>
    );
};

export default About;