import React from "react";
import profile from "../images/profile.jpeg"

function About() {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col col-12 col-md-4 p-3 mt-5">
                <img src={profile} className="img-fluid" alt="profile_picture" />
            </div>
            <div className="col col-12 col-md-6 intro pt-3">
                <div className="text-center">
                  <p className="resume"><b><a href="https://docs.google.com/document/d/1dqnIpnWDCMb1pRGx9TJOPMkjtvunbqAiYrNoQtlhQVY/edit">2022 Resume</a> / <a href="https://www.linkedin.com/in/megan-cattel-9627a049/">LinkedIn</a></b></p>                
                </div>
                <p><b>Here are some fast facts:</b></p>
                <ul>
                  <li>I use she/her pronouns. </li>
                  <li>I graduated from Columbia Journalism School’s M.S. program in 2020.</li>
                  <li>I grew up in Tampa Bay, FL, but I moved around a lot as a kid. I’ve lived in Shanghai, Pindingshan, Beijing, and Milwaukee, WI. I’m currently based in New York City. </li>
                  <li>I'm half-Chinese and wrote an essay about being biracial in both China and America <a href="https://nuvoices.com/2019/10/29/navigating-my-biracial-identity-as-a-chinese-american-living-in-china/">here</a>.</li>
                  <li>Before getting into journalism, I briefly interned for the United Nations, the New York Bar Association, and was invited to attend the White House Initiative on Asian Americans and Pacific Islanders’ annual conference in 2013. After working closely with NGOs and advocacy organizations, I learned I’d be better suited to write about world issues (instead of wading through bureaucracy in an attempt to solve them.)</li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    </div>
  );
}

export default About;