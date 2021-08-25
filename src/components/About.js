import React from "react";
import profile from "../images/profile.jpeg"

function About() {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col col-4 p-3">
                <img src={profile} className="img-fluid" alt="profile_picture" />
            </div>
            <div className="col col-6 intro pt-3">
                <div className="text-center">
                  <p><a>Resume</a></p>
                  <p>Hi, my name is Megan.</p>
                </div>
                <ul>
                <li>I use she/her/hers pronouns. </li>
                <li>I graduated from Columbia Journalism School’s M.S. program in 2020.</li>
                <li>I grew up in Tampa Bay, FL, but I moved around a lot as a kid. I’ve lived in Shanghai, Pindingshan, Beijing, and Milwaukee, WI. </li>
                <li>I am half-Chinese/mixed race (混血儿). I wrote an essay about being biracial in both China and America <a href="https://nuvoices.com/2019/10/29/navigating-my-biracial-identity-as-a-chinese-american-living-in-china/">here</a>.</li>
                <li>Before journalism, I worked in the education sector in Shanghai, China. Along with teaching classes, I was a staff manager, where my main job was to get a large company of Taiwanese, Chinese, British, American, Canadian, South African, Australian, and Kiwi colleagues to get along. No easy task, but it taught me plenty about the art of code switching.</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default About;