import React, { useState, useEffect } from "react";
import "./AllGames.css";
import GameCard from "./GameCard/GameCard";
import { gameData } from "../../../AllSpols.json";
import Footer from "../../components/Footer/Footer";

const AllGames = () => {
  const AllGame = gameData.map(
    (
      { name, des, img, gif, gameLink, githubLink, demoLink, youtubeLink },
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
          demoLink={demoLink}
          youtubeLink={youtubeLink}
        />
      );
    }
  );

  return (
    <section>
      <div className='container all_game_card__container'>{AllGame}</div>
      <Footer />
    </section>
  );
};

export default AllGames;
