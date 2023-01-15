import React from "react";

import { MdOutlineSlowMotionVideo } from "react-icons/md";
import "./GameCard.css";

const GameCard = (props) => {
  return (
    <article className='all_game_card_article'>
      <div className='game_image_wrapper'>
        {/* {props.img && (
          <div
            className={`game_card__item-image ${props.gif ? " static" : ""}`}
          >
            {props.gif && (
              <MdOutlineSlowMotionVideo className='static all_game_gif_icon' />
            )}
            <img src={props.img} alt={props.name} />
          </div>
        )} */}

        <a href={props.playLink} target='_blank'>
          {props.gif && (
            <div className='game_card__item-image active '>
              <video loop autoPlay muted playsinline className='video'>
                <source
                  src={props.gif}
                  type='video/mp4'
                  preload='none'
                  alt='loading'
                />
              </video>
            </div>
          )}
        </a>
      </div>

      <div className='game_des thai-font'>
        <h2>{props.name}</h2>
        <p className='game_p_des'>{props.des}</p>
        <br />
        <div className='game_card__item-cta'>
          {props.githubLink && (
            <a href={props.githubLink} className='meangpu-btn' target='_blank'>
              Github
            </a>
          )}
          {/* {props.playLink && (
            <a
              href={props.playLink}
              className='meangpu-btn btn-primary'
              target='_blank'
            >
              Play
            </a>
          )} */}
          {props.youtubeLink && (
            <a
              href={props.youtubeLink}
              className='btn-primary meangpu-btn'
              target='_blank'
            >
              youtube
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default GameCard;
