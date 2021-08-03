import React from "react";
import home from "../images/homepage.jpeg"

function Home() {
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col col-8 home p-5">
                <img src={home} className="img-fluid" alt="homepage_picture" />
            </div>
        </div>
        <div className="row justify-content-center p-5">
            <div className="col col-6">
                <p>hi – i’m megan cattel, and i want to write for you. learn more <a href="/about">about me</a> or read some of my published <a href="/journalism">journalism</a>.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;