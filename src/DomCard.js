import React from 'react';
import styled from 'styled-components'

const HdImg = styled.img`
    width: 300px;
`;

const DomCard = ({imgInfo}) => {
    return (
        <div>
            <h1>{imgInfo.firstname}</h1>
            <p>{imgInfo.date}</p>
            <p>{imgInfo.explanation}</p>
            <HdImg src={imgInfo.hdurl} alt=""/>
            <p>{imgInfo.title}</p>
        </div>
    )
}

export default DomCard;