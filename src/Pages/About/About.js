import React from 'react'
import "./About.css"
import Headshot from '../../Assets/img/adam_headshot_small.jpg'

const About = () => {
    return (
        <div id="contactPage">
            <img src={Headshot} id="headshot"></img>
            <p id="bio">My passion for building things has eclipsed everything else in my life since I was young.  On top of that, I've always felt that a good website (and good website design) was a key factor in making a successful impression on people.  My first websites were built with Apple’s iWeb, followed by Wordpress.  They were adequate, but I always felt as though I wanted to do more, and that coding websites from scratch was the only way to get there.  Needless to say, I have always been fascinated with the potential that web development has to offer.
            <br></br>
                This fascination is what led me to enroll in the Coding Boot Camp at the University of Central Florida to further my development skills.
                <br></br>
                When it comes to web development, I am passionate about dynamic, intuitive user experiences.  I can be described as driven, ambitious, and always looking for a new challenge to pursue.
                <br></br>
                In my spare time, I can be found building guitars, or taking photographs.
                <br></br>
                Contact me for more information.  I’ll build something awesome for you.</p>
        </div>
    )
}

export default About
