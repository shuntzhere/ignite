import React from 'react';
//styling && animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//importing redux 
import { useDispatch } from 'react-redux';
import { loadDetails } from '../redux/actions/detailsAction';

export const Game = ({name, released, img, id}) => {
    //loading details
    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        dispatch(loadDetails(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={img} alt={name} />
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    img  {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;