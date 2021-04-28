import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <React.Fragment>



    <div className='hero-container' 
//    style={{backgroundImage: "url('/images/img-home.jpg')"}}
>
     <video src='/videos/gekko.webm' autoPlay  muted />
     <div className="hero-container__text">
     <h1> Gekkosoft</h1> 
     <h2>Működő informatikai megoldások</h2>
     </div>
      {/*<h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
      >
      GET STARTED
      </Button>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          >
          WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>*/}
    </div>
    <div className='hero-container-mobile' 
    style={{backgroundImage: "url('/images/img-home.jpg')"}}
    >
         <div className="hero-container__text">
         <h1> Gekkosoft</h1> 
         <h2>Működő informatikai megoldások</h2>
         </div>
          {/*<h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          GET STARTED
          </Button>
          <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          >
          WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>*/}
        </div>
        </React.Fragment>
  );
}

export default HeroSection;
