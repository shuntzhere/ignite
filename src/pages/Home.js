import React,{ useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { Game } from '../components/Game';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { loadGames } from "../redux/actions/gamesAction";
import { GameDetail } from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //fetching games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //getting data back
  const { popular, upcoming, newGames, searched } = useSelector(state => state.games);
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {/* wrapping the component that will be transitioned */}
          {pathId && <GameDetail pathId={pathId}/>}
          {/* pathId is the toggle */}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <Games>
              {searched.map(game => (
                <Game 
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  img={game.background_image}
                />
              ))} 
            </Games>
          </div>
        ) : " " }
        {/* renders gamedetail when pathId exists */}
        <h2>Popular Games</h2> 
        <Games>
          {popular.map(game => (
            <Game 
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              img={game.background_image}
            />
          ))} 
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Game 
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              img={game.background_image}
            />
          ))} 
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => (
            <Game 
              name={game.name}
              released={game.released}
              id={game.id}
              key={game.id}
              img={game.background_image}
            />
          ))} 
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;