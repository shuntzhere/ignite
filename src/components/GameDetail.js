import React from 'react';
//styling && animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//importing redux 
import { useSelector } from 'react-redux';

export const GameDetail = () => {
    const {gameData, screenshots} = useSelector((state) => state.details);
    return (
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="ratings">
                        <h3>{gameData.name}</h3>
                        <p>{gameData.ratings}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {gameData.platforms.map((gameData) => (
                                <h3 key={gameData.platform.id}>{gameData.platform.name}</h3>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={gameData.background_image} alt={gameData.background_image} />
                </Media>
                <Description>
                    <p>{gameData.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screenshots.results.map(screenshots => (
                        <img src={screenshots.image} key={screenshots.id}alt="" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
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
`