import React, { useEffect } from "react";
// REDUX
// A hook to access the redux `dispatch` function.
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling and animation:
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // Remember the dependency array for mount-only
  // Get state data back from redux state
  const { popular, released, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      {/* Each individual game detail is rendered like a popup modal */}
      {/* Conditional rendering required here so toggle component for now */}
      {/* First manually select a Game component to load individual state */}
      <GameDetail />
      <h2>New & Upcoming</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>Just Released</h2>
      <Games>
        {released.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>Popular & Trending</h2>
      <Games>
        {popular.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
    /* temp style to see redux state we destructure */
    /* background: #00000012;  */
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
