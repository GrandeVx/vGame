import React from 'react'

// Stile Animazioni

import styled from 'styled-components';
import {motion} from 'framer-motion';


// Redux

import { useDispatch } from 'react-redux';
import {loadDetail} from '../actions/detailAction'

import {Link} from 'react-router-dom';

import { smallImage } from '../util';




const Game = ({name,released,id,img}) => {

    const stringPathid = id.toString();

    // load details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow="hidden";
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame layoutId={stringPathid} onClick={loadDetailHandler}>
            <Link to={`game/${id}`}>
            <motion.h3 layoutId={`title ${stringPathid}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathid}`} src={smallImage(img,640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)` 
    
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0,0,0.2);

    text-align: center;
    border-radius: 1rem;

    overflow: hidden;

    cursor: pointer;
    
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }

`



export default Game
