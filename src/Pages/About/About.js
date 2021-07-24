import React from 'react'
import "./About.css"
import Headshot from '../../Assets/img/adam_headshot_small.jpg'
import Resume from "../../Assets/Adam_Alcantara_coding_resume.pdf"

const About = () => {
    return (
        <div id="aboutPage">
            <div id="aboutSection">
                <img src={Headshot} id="headshot" alt="Adam's headshot photo"></img>
                <p id="bio">Greetings! My name is Adam Alcantara. My passion for building things has eclipsed everything else in my life since I was young.  On top of that, I've always felt that a good website (and good website design) was a key factor in making a successful impression on people.  My first websites were built with Apple’s iWeb, followed by Wordpress.  They were adequate, but I always felt as though I wanted to do more, and that coding websites from scratch was the only way to get there.  Needless to say, I have always been fascinated with the potential that web development has to offer.
                    <br></br>
                    This fascination is what led me to enroll in the Coding Boot Camp at the University of Central Florida to further my development skills.
                    <br></br>
                    When it comes to web development, I am passionate about dynamic, intuitive user experiences.  I can be described as driven, ambitious, and always looking for a new challenge to pursue.
                    <br></br>
                    In my spare time, I can be found building guitars, or taking photographs.
                    <br></br>
                    Contact me for more information.  I’ll build something awesome for you.</p>
            </div>
            <div id="resume">
                <a href={Resume} target="_blank" id="resumelink">Click Here To View My Résumé</a>
            </div>
            <h3>Testimonials</h3>
            <div id="testimonials">
                <div className="testimonial">
                    <p>"I had the pleasure of being Adam's Teaching Assistant when he attended UCF's in-depth, 12 week full stack web development bootcamp. Adam worked incredibly hard during his time with us and maintained the highest possible grade average. He and I often worked together outside of class on homework issues, which was a testament to the maximum amount of effort he put in.
                        <br></br>
                        Adam is a team player. He has a great attitude, a strong work ethic, and is generally a delight to be around. He is a multi-talented individual with a strong background in photography, design, and development. Any employer who adds him to their roster will find great value added to their team."</p>
                    <p>- Dan R. (Boot Camp TA)</p>
                </div>
                <div className="testimonial" id="middle">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>-Name</p>
                </div>
                <div className="testimonial">
                    <p>"It is rare to find a standout talent like Adam, I had the pleasure of being his classmate at the UCF coding bootcamp.
                        <br></br>
                        Adam’s eye for design and knowledge in web development was a great asset during multiple group projects.
                        <br></br>
                        Adam would be a fantastic asset to any organization. "</p>
                    <p>- Patrick M. (Boot Camp Classmate)</p>
                </div>
            </div>
        </div>
    )
}

export default About
