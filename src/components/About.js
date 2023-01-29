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
                  <p className="resume"><b><a href="https://docs.google.com/document/d/1dqnIpnWDCMb1pRGx9TJOPMkjtvunbqAiYrNoQtlhQVY/edit#">2023 Resume</a> / <a href="https://www.linkedin.com/in/megan-cattel-9627a049/">LinkedIn</a></b></p>                
                </div>
                <p><b>Here are some fast facts:</b></p>
                <ul>
                  <li>I use she/her pronouns. </li>
                  <li>I graduated from Columbia Journalism School’s M.S. program in 2020, with a concentration in audio and longform print journalism.</li>
                  <li>I’m currently based in Tampa, FL and NYC. Before the age of 5, I’ve lived in Shanghai, Milwaukee, Pingdingshan, and Beijing.</li>
                  <li>Since 2021, I’ve served as podcast editor at NüVoices, a collective which supports underrepresented voices publishing work about China, Taiwan, and Hong Kong. To date, I’ve <a href="https://nuvoices.com/category/podcast/">edited and produced over 20 episodes for this indie podcast!</a></li>
                  <li>I am a <a href="https://pulitzercenter.org/people/megan-cattel">2022 Pulitzer Center Environmental Science Reporting Fellow</a>.</li>
                  <li>I'm half-Chinese and wrote an essay about being biracial in both China and America <a href="https://nuvoices.com/2019/10/29/navigating-my-biracial-identity-as-a-chinese-american-living-in-china/">here</a>.</li>
                  <li>Before journalism, I was a teacher, au pair, UN intern, and competitive figure skater.  (<a href="https://www.youtube.com/watch?v=xsGyPUXHrNA&t=275s">Here</a> <a href="https://www.youtube.com/watch?v=oMWGkZsncec">are some</a> <a href="https://www.youtube.com/watch?v=eENh7cMpktk&t=42s">underrated</a> <a href="https://www.youtube.com/watch?v=T4SDsRTJ33s">figure skating</a> <a href="https://www.youtube.com/watch?v=ME4ICyXSoFs">performances</a> <a href="https://www.youtube.com/watch?v=662TbCAqLRw">I think</a> you should check out!) </li>
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