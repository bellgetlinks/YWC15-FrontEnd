import React from 'react';
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 42px;

  @media(max-width: 768px) {
    font-size: 28px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;

  .social {
    display: flex;
    opacity: 0.6;
    transition: all .4s;

    img {
      height: 150px;
      
      @media(max-width: 768px) {
        height: 75px;
      }
    }
    
    &:hover {
      opacity: 1;
    }

    
  }
`;

const Social = () => {
  return (
    <div className="container">
      <Header>FOLLOW YWCTH ON</Header>
      <SocialContainer>
        <div className="social">
          <a href="https://fb.com/ywcth">
            <img src="/static/img/landing/materials/ywc_facebook.png" alt="" />
          </a>
        </div>
        <div className="social">
          <a href="https://twitter.com/ywcth">
            <img src="/static/img/landing/materials/ywc_twitter.png" alt="" />
          </a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/ywcth/">
            <img src="/static/img/landing/materials/ywc_intragram.png" alt="" />
          </a>
        </div>
        <div className="social">
          <a href="https://www.youtube.com/user/ywcth">
            <img src="/static/img/landing/materials/ywc_youtube.png" alt="" />
          </a>
        </div>
      </SocialContainer>
    </div>
  );
};

export default Social;