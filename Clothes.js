import './App.css';
import React from 'react';
import image1 from './img/golfclothes.jpg';
import image2 from './img/golfpants.jpg';
import image3 from './img/golfshorts.jpg';
import image4 from './img/golfshoes.jpg';
import image5 from './img/golfhat.jpg';


function Clothes() {
  return (
    <div>
      <header className="header--pic">
            <h1>What Clothes to Wear</h1>
        </header>
        <div className="clothes--content">
            <ul className="clothes--list">
                <li className="li--clothes"> 
                    Shirt
                    
                </li>
                <img src={image1} alt='man on golf course' className="big--img"/>
                <p>A golf shirt is perfect. You know the kind—a pullover shirt with a collar and short sleeves. Usually, golf shirts will be a little longer than an ordinary polo shirt, to help them stay tucked in even after repeatedly swinging at the ball. Avoid loud, splashy patterns. Keeping your look understated will keep the focus on you rather than on your clothing.</p>
                <li className="li--clothes">
                    Pants, Skirts, Skorts
                    
                </li>
                <img src={image2} alt='man hitting golf ball out of bunker' className="big--img"/>
                <p>Pants always will do very nicely—linen, khaki, cotton, or, in cold weather, wool. Unless you know they're acceptable, avoid jeans. For women, capri pants, a skirt, a skort (shorts made to look like a skirt by having a panel across the front and back), or culottes also work nicely.</p>
                <li className="li--clothes">
                    Shorts
                </li>
                <img src={image3} alt='man hitting golf ball' className="big--img"/>
                <p>
                    Bermuda-length shorts particularly are appropriate virtually everywhere these days, especially in warm weather. Avoid gym shorts, short shorts, or cutoffs.
                </p>
                <li className="li--clothes">
                    Shoes
                      
                </li>
                <img src={image4} alt='person putting but can only see shoes' className="big--img"/>
                <p>Golf shoes, if you have them, are perfect. Most clubs now require soft spikes rather than metal ones. (Do not use metal spikes on a soft spike facility—you may be asked to stop playing.) Your best bet is to buy a good pair of soft-spike golf shoes; then you won't have a problem at any venue. If you don't have golf shoes a good pair of sneakers will do in a pinch. Avoid wearing street shoes with a heel because the heel could make an impression in the green and cause a mark that could throw a putt off-line.</p> 
                <li className="li--clothes">
                    Hat
                    
                </li>
                <img src={image5} alt='girl in a golf cart' className="big--img"/>
                <p>When to doff it and when to leave it on? The pros must get coaching on this because they invariably handle it so gracefully. As they walk up to the eighteenth green on Sunday, they acknowledge the gallery's applause with a gracious tip of the hat. When the match is over, they never fail to take off their hats as they shake each other's hands. Nice tradition—a real show of respect.</p>
            </ul>
        </div>
        <div>
            <a href="https://emilypost.com/advice/golfing-attire">Source for golfing clothes</a>
        </div>
    </div>
  );
}

export default Clothes;