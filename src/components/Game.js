import React from 'react';
//styling && animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//importing redux 
import { useDispatch } from 'react-redux';
import { loadDetails } from '../redux/actions/detailsAction';
import { Link } from 'react-router-dom';
import { smallerImage } from '../util';

export const Game = ({name, released, img, id}) => {
    //loading details
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallerImage(img,640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img  {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;