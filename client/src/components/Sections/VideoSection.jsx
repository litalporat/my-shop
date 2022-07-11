import React from 'react';
import styled from 'styled-components';
import Video from '../Elements/Video';

const Body = styled.div`
    width:100vw;
    height: 100vh;
    background:var(--black-color);
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 15% 40%;
    
`

const VideoSection = () => {
    return (
        <Body>
            <Video/>
        </Body>
    );
};

export default VideoSection;