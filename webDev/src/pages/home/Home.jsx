import React from "react";
import AllGames from "../allGames/AllGames";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className='container header__container'>
        <h1>SPOLS</h1>
        <h4>Math games for kid</h4>
      </div>
      <AllGames />
    </section>
  );
};

export default Home;
