import './App.css';
import React from 'react';
import image1 from './img/golfdriver.jpg';
import image2 from './img/sandwedge.jpg';
import image3 from './img/golfputter.jpg';

function Clubs() {
  return (
    <div>
        <header className="header--pic">
            <h1>What Clubs to Use</h1>
        </header>
        <div className="clubs--container">
            <ul>
                <div>
                    <li>Driver</li>
                    <img src={image1} alt='golf club driver' className="big--img"/>
                    <p>Arguably the most famous and well-liked club in the bag is the driver. The driver is also usually the longest club in the bag. A driver is used on the tee box on par 5’s, par 4’s, and occasionally on par 3’s if a golfer really lacks distance with their slow swing speed. The driver is used when the ball is on a tee and usually at least an inch or so off of the ground.

                        The reason that you tee the ball up for a driver is that the sweet spot is higher up off the ground and no touching the ground. The driver ball flight is usually medium to high in trajectory and rolls out very nicely.
                        
                        Drivers are not usually the best club for you to hit off the tee if the fairway is tight or there are hazards close to where you are aiming. A normal distance of a driver for a man is 230 yards. For women, the average is around 200 yards</p>
                </div>

                <div>
                    <li>Woods</li>
                    <p>Moving down in distance, the next type of clubs are woods. A wood can be a 1-wood all the way up to a 7-wood. But, the most common woods that you are going to find in a golf bag is a 3-wood and a 5-wood. Woods are used for three main reasons.

                        The first reason is that they are great off of the tee if a golfer is struggling to keep their driver straight.
                        The second reason that woods ae used is that they hit the ball a bit shorter than a driver, so there are situations for it.
                        The third reason is that they can be used in the fairway if you are a long way out. According to Dummies, a normal man hits a 3-wood about 210 yards and a woman hits a 3-wood about 180 yards.</p>
                </div>
                <div>
                    <li>Hybrids</li>
                    <p>Moving down from woods, there are hybrids. A hybrid is a type of golf club that has become popular relatively recently and it is a mix between a wood and a long iron. The point of them is to be more forgiving and able to use in rougher lies compared to woods.

                        Hybrids usually come in a 3-hybrid, 4-hybrid, or a 5-hybrid. Hybrids are very versatile and can be used out of a fairway bunker, rough, and a fairway. Hybrids are even great to take-off of the tee if there is a long par 3 or tight tee shot. Beginner golfers would probably benefit greatly from a 4-hybrid compared to a 4-iron in most cases. The forgiveness is very noticeable because a hybrid has a much better design to get through the grass and make contact.

                        A normal hybrid distance for men is around 180 yards and for women, it is closer to 150 yards.</p>
                </div>
                <div>
                    <li>Long Irons</li>
                    <p>Long irons are considered any iron between 1 and 4. The important thing that beginners mix up is about the distance that each iron goes. The smaller the number, the less loft so it goes farther. For example, your 3-iron should go much further than a 7-iron!

                        Long irons are generally the hardest irons for beginner golfers to play with because the lack of loft leaves little room for error. A major trend in golf in recent times is to ditch long irons and go for hybrids because they are more versatile.
                        
                        The normal distance that men golfers could hit a 4-iron is around 170 yards and 150 yards for women.</p>
                </div>
                <div>
                    <li>Mid Irons</li>
                    <p>The next category of irons is the irons in the range of 5 to 7. Mid irons are common clubs that golfers use on par 3’s and approach shots with 160 yards. That number can fluctuate greatly depending on how much power a golfer has.

                        The average male golfers can hit a 7 iron around 140 yards and a female average is around 120 yards.</p>
                </div>
                <div>
                    <li>Short Irons</li>
                    <p>The last type of irons that appear in a golf bag is the short irons. A short iron is either an 8-iron or a 9-iron. Some people consider a 7-iron to be a short iron also, but it is mainly up for debate. A short iron is a very important club to have because it is important for approach shots and hitting the ball close to the pin. On short par 3’s, most golfers would use an 8 or 9-iron.

                        The typical distance that men hit a 9-iron is around 120 yards, and for women that number is around 100 yards. Short irons make the ball flight very high if struck correctly, so the ball does not roll very much.</p>
                </div>
                <div>
                    <li>Pitching Wedge</li>
                    <p>A pitching wedge is a wedge with the lowest loft, meaning that it has the farthest distance. A typical male golfer hits a pitching wedge 110 yards. For women, the average distance is more like 90 yards.

                        Normal pitching wedges have a loft of 48 degrees and that can vary from 46-50 with some on the market. The wedge has different usages such as knock-down shots and chipping around the green.</p>
                </div>
                <div>
                    <li>Approach Wedge</li>
                    <p>The next wedge on the list is an approach wedge or also referred to as a gap wedge. Both are politically correct to use interchangeably. The average loft of an approach wedge is 52 degrees, but the loft of an approach wedge can actually range from 50 to 55 degrees of loft. The average distance that men hit the wedge is 100 yards and for women, it is closer to 80 yards on a full swing.

                        Approach wedges are a favorite of most golfers to do half-swings and three-fourths of a swing to meet certain yardage.</p>
                </div>
                <div>
                    <li>Sand Wedge</li>
                    <img src={image2} alt='golf club sand wedge' className="big--img"/>
                    <p>
                        The sand wedge is a wedge that has a loft of 56 degrees in most cases, but the range of sand wedge lofts can be 55-57 in some cases.

                        The average distance that men hit a sand wedge is 90 yards and for women, it is around 70 yards.

                        Sand wedges are used in many situations such as chipping around the green, flop shots, and for shots out of a greenside bunker. The clubhead shape of a lot of the sand wedges on the market makes bunker shots easier to perform.
                    </p>
                </div>
                <div>
                    <li>Lob Wedge</li>
                    <p>The highest lofted wedges are lob wedges. They are 58 degrees of loft and can run up to 64 degrees in some instances. There are even higher lofted lob wedges that are rare, and they can be 68 degrees of loft! The distance that men can hit a lob wedge is around 65 yards and for women, it is closer to the 40- or 50-yard range. Those numbers can really vary depending on the loft, swing speed, and other various factors.

                        A lob wedge has so much loft that it can be tough to make good contact unless the lie is perfect. The main use for a lob wedge is a short approach shot that you can’t roll out, or a flop shot over an object.</p>
                </div>
                <div>
                    <li>Putter</li>
                    <img src={image3} alt='golf club putter' className="big--img"/>
                    <p>The last club on the list is a putter, and I am sure if you are on a golf site then you have heard of one. The putter is used on the green and is the last club that you will use on every hole in most cases.

                        When using a putter, it is important to read the green, judge the distance, and perform a stroke that is going to make the ball go in the hole.</p>
                </div>

                <div>
                    <a href="https://www.golfspan.com/golf-club-names">Link to the source where I pulled the information on golf clubs</a>
                </div>
            

            </ul>

        </div>

   </div>
        

  );
}

export default Clubs;