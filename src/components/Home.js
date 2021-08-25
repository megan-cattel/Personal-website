import React from "react";
import cartoon from "../images/cartoon.png"

function Home() {
  return (
    <div className="vh-100">
        <div className="row justify-content-center vh-100 p-5">
            <div className="col col-8 home align-items-center my-auto">
                <img src={cartoon} className="img-fluid" alt="homepage_picture" />
                <p className="p-2">Hi, my name is Megan. I’m a freelance journalist and audio producer based in Queens, NYC.</p>
                <p className="p-2">My work can be found at <a href="https://www.teenvogue.com/contributor/megan-cattel">Teen Vogue</a>, <a href="https://www.goldthread2.com/author/megan-cattel">Goldthread</a> (a South China Morning Post imprint), <a href="https://news.stlpublicradio.org/people/megan-cattel">St. Louis Public Radio</a>, <a href="https://supchina.com/author/megancattel/">SupChina</a>, and <a href="https://megancattel.contently.com/">elsewhere</a>. I’ve also taken research assignments for iHeartMedia’s podcast division.</p>
                <p className="p-2">I have experience reporting on Asian American communities, US immigration policy, race, culture, and literature. Here are links to my writing and audio work. </p>
                <p className="p-2">I’m currently available for freelance writing, audio editing, and production assignments. Let’s work together.</p>
                <p className="p-2">You can read a longer version of my bio <a href="/about">here</a> if you like.</p>
                <p className="p-2">Thank you for visiting my portfolio!</p>
                <br />
                <br />
                <p className="p-1"><b>Contact</b></p>
                <p className="p-1">Email: <a href="mailto:megan.cattel@gmail.com">megan.cattel@gmail.com</a></p>
                <p className="p-1">Twitter: <a href="https://twitter.com/meganisonline">@meganisonline</a></p>
            </div>
        </div>
    </div>
  );
}

export default Home;