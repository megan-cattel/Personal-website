import React from "react";
import megan from "../images/megan.jpeg"

function About() {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col col-4 p-3">
                <img src={megan} className="img-fluid" alt="profile_picture" />
            </div>
            <div className="col col-4 intro pt-3">
                <p>Hi I'm Megan. I’m a freelance writer with work in publications such as Teen Vogue, NBC Asian America, Catapult, and HelloGiggles, as well as books including Images of America's Vietnamese in Orange County and The Kinfolk Entrepreneur. </p>
                <p>I’m a graduate of UC Irvine’s literary journalism and Asian American studies programs and a member of the Asian American Journalists Association. </p>
                <p>I’m passionate about uplifting young folks and Asian American communities in my work, and I have experience speaking on panels and moderating live interviews. In my free time I enjoy reading new books, playing horror video games, and taking meandering road trips up the California coast.</p>
            </div>
        </div>
    </div>
  );
}

export default About;