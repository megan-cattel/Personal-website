import React from "react";
import cartoon from "../images/cartoon.png"

function Home() {
  return (
    <div className="vh-100">
        <div className="row justify-content-center vh-100 p-5">
            <div className="col col-8 home align-items-center my-auto">
                <img src={cartoon} className="img-fluid pt-5 pb-5" alt="homepage_picture" />
                <div className="text-left">
                  <p className="p-2"><b><span className="intro-red">Hi, I’m Megan</span>, a freelance journalist and audio producer based in Queens, NYC.</b></p>
                  <p className="p-2"><b>→ Here are links to my published <a href={process.env.PUBLIC_URL + "me/#/writing"}>writing</a> and <a href={process.env.PUBLIC_URL + "me/#/audio"}>audio</a> work.</b></p>
                  <p className="p-2">↳ My work can be found at <a href="https://www.teenvogue.com/contributor/megan-cattel">Teen Vogue</a>, <a href="https://www.goldthread2.com/author/megan-cattel">Goldthread</a> (a South China Morning Post imprint), <a href="https://news.stlpublicradio.org/people/megan-cattel">St. Louis Public Radio</a>, <a href="https://supchina.com/author/megancattel/">SupChina</a>, and <a href="https://megancattel.contently.com/">elsewhere</a>. I’ve also taken research assignments for iHeartMedia’s podcast division.</p>
                  <p className="p-2">↳ I have experience reporting on Asian American communities, US immigration policy, race, culture, and literature. Here are links to my writing and audio work. </p>
                  <p className="p-2">↳ I’m currently available for freelance writing, audio editing, and production assignments. Please <a href={process.env.PUBLIC_URL + "me/#/contact"}>contact me</a> if you’d like to work together.</p>
                  <p className="p-2">Thank you for visiting my website!</p>
                  <br />
                  <br />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;