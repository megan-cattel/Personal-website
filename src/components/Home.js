import React from "react";
import home from "../images/homepage.jpeg"

function Home() {
  return (
    <div className="vh-100">
        <div className="row justify-content-center vh-100 p-5">
            <div className="col col-8 home align-items-center my-auto">
                <img src={home} className="img-fluid" alt="homepage_picture" />
                <p className="p-5">hi – i’m megan cattel, and i want to write for you. learn more <a href="/about">about me</a> or read some of my published <a href="/journalism">journalism</a>.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;