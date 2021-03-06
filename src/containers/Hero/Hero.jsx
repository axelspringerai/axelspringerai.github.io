import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import ProgressiveImage from 'react-progressive-image';

export default (props) => {
  function scrollDown() {
    let navHeight = document.querySelector('nav').offsetHeight;
    let elemOffset = document.querySelector('#home').getBoundingClientRect().bottom + window.pageYOffset

    window.scrollTo(0, elemOffset - navHeight);
  }

  return (
    <header className='hero__container' id='home'>
      <ProgressiveImage src='./static/header.jpg' placeholder='./static/thumbnails/header_tn.jpg'>
        {src => <img className='hero__image' src={src} alt='Axel Springer AI Header.' />}
      </ProgressiveImage>
      <div className='hero__imageContainer'>
        <div className='hero__bottomContainer'>
          <p className='hero__bottomText'>{/*axel springer ai<span className='hero__underscore'> _</span>*/}</p>
          <Socials className='hero__socials' />
        </div>
        {/*<img className='hero__scrollDown' src='static/arrow.png' onClick={scrollDown} />*/}
      </div>
      <p className='hero__text'>
        <h3>who we are<span className='hero__underscore'> ~</span></h3>
        Axel Springer AI is the artificial intelligence unit of <a href="https://www.axelspringer.com/" className='hero__links' target="_blank">Axel Springer SE</a> which is the largest digital publishing house in Europe. We're also part of <a href="https://www.ideas-engineering.io/" className='hero__links' target="_blank">Axel Springer Ideas Engineering</a>, the innovation unit of Axel Springer.

        <br /><br />
        Our mission is to make AI accessible to everyone within Axel Springer and hence drive innovation. We deliver end-to-end machine learning projects and conduct state-of-the-art AI research. Our research focus is mainly on Computer Vision and NLP problems. 

        <br /><br />
        We mainly employ open-source technologies for our work. We also like to give talks on conferences and share our knowledge frequently. If you'd like to co-operate with us then please <a href="mailto:dat.tran@axelspringer.com" className='hero__links'>contact us</a>!
      </p >
    </header >
  );
}
