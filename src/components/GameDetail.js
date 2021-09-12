import React from "react";
//styling && animation
import styled from "styled-components";
import { motion } from "framer-motion";
//importing redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { smallerImage } from "../util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

export const GameDetail = ({ pathId }) => {
  // for routes
  const history = useHistory();
  //exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(gameData.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  //platform svg
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //getting data
  const { gameData, screenshots, isLoading } = useSelector(
    (state) => state.details
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="ratings">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {gameData.name}
                </motion.h3>
                <p>{gameData.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameData.platforms.map((gameData) => (
                    <img
                      key={gameData.platform.id}
                      alt=""
                      src={getPlatform(gameData.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`img ${pathId}`}
                src={smallerImage(gameData.background_image, 1280)}
                alt={gameData.background_image}
              />
            </Media>
            <Description>
              <p>{gameData.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((screenshots) => (
                <img
                  src={smallerImage(screenshots.image, 1280)}
                  key={screenshots.id}
                  alt=""
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff45f3;
  }

  &::-webkit-scrollbar {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: whitesmoke;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  margin: auto;
  align-items: center;
  img {
    /* width: 50vw; */
    margin: 1rem 0;
  }
`;
