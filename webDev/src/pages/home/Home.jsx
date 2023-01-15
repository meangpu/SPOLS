import React from "react";
import "./Home.css";
import GameCard from "../../components/GameCard/GameCard";
import { gameData } from "../../../AllSpols.json";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const AllGame = gameData.map(
    (
      { name, des, img, gif, gameLink, githubLink, playLink, youtubeLink },
      index
    ) => {
      return (
        <GameCard
          key={index}
          name={name}
          des={des}
          img={img}
          gif={gif}
          gameLink={gameLink}
          githubLink={githubLink}
          playLink={playLink}
          youtubeLink={youtubeLink}
        />
      );
    }
  );
  return (
    <section>
      <div className='container header__container'>
        <h1>SPOLS</h1>
        <h4>Math games for kid</h4>
      </div>
      <div className='container all_game_card__container'>{AllGame}</div>
      <Footer />
    </section>
  );
};

export default Home;
