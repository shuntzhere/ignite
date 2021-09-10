import React from 'react';
//styling && animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//importing redux 
import { useDispatch } from 'react-redux';
import { loadDetails } from '../redux/actions/detailsAction';
import { Link } from 'react-router-dom';
import { smallerImage } from '../util';
// import { useLocation } from 'react-router';

import { popup } from "../animations";

export const Game = ({name, released, img, id}) => {
    const updatedId = id.toString();
    //loading details
    
//   const location = useLocation();
//   const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch()
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id))
    }
    return (
        <StyledGame 
            variants={popup} initial="hidden" animate="show"
            layoutId={updatedId}
            onClick={loadDetailHandler}
        >   
            {/* {!pathId &&  */}
                <Link to={`/game/${id}`}>
                    <motion.h3 layoutId={`title ${updatedId}`}>{name}</motion.h3>
                    <motion.p layoutId={`released ${updatedId}`}>{released}</motion.p>
                    <motion.img 
                        layoutId={`img ${updatedId}`}
                        src={smallerImage(img,640)} 
                        alt={name} 
                />
                </Link>
            {/* } */}
            
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