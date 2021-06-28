import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <h3 className="text-center py-5">
        This website is designed and developed using{" "}
        <a href="https://jsonplaceholder.typicode.com/">JsonPlaceHolder Data</a>{" "}
      </h3>
      <h3 className="text-center pb-5">
     Hosted On: <a href=" https://technext-project.web.app/">https://technext-project.web.app/</a>
      </h3>
      <section className="hero">
        <div className="container">
          <p className="title py-5">JSON Placeholder</p>
          <p className="subtitile">Free fake API for testing and prototyping.</p>
          <p className="subtitile">Powered by <a href="https://github.com/typicode/json-server" className="subtitleLink">JSON Server</a> + <a href="https://github.com/typicode/lowdb" className="subtitleLink">LowDB</a></p>
          <p>As of Dec 2020, <strong>serving ~1.8 billion requests each month</strong>.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
