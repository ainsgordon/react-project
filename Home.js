import './App.css';
import React from 'react';
import image1 from "./img/homegolfimage.jpg";

function Home() {
  return (
    <div>
    <header className="header--pic">
            <h1>Golf for Beginners</h1>
        </header>
        <div className="about">
            <h2 className="about--header">About this site</h2>
            <img src={image1} alt='golf course with water and bunkers' className='big--img'/> 
            <p>If you just started playing golf or are a complete beginner, there aren’t many resources that can help you find public courses to golf at, what to wear, what clubs to use, et cetera.
                The amount of information required to play golf is overwhelming at times, and I know several people who are curious about learning more about golf or who want to play, but they can’t join a country club, purchase clubs, and rent a golf cart just to fill a passing interest in golf.
                That is why I believe that this website can help! I wanted to create a website that consolidates information on what exactly is needed to play golf and which courses are accessible to people who aren’t members of a country club would be a useful resource.
                For instance, there may be various blog articles, YouTube videos, or guides scattered across the Internet, but I don’t think there is a dedicated website which helps users find a course and the resources they need to play golf.
                Furthermore, if you search for golf courses near you using Google, the search results often pull up country clubs, and first-time players may not realize that country club courses are not publicly available to play on.
                Additionally, there are not very many places in or around Mississippi where you can practice your swings.
                So, on this site, you can navigate to pages which allow you to find a public course near you, see what you should wear, see what clubs you do, and find out helpful tips.


            </p>
        </div>

        </div>
  );
}

export default Home;