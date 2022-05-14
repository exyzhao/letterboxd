import React from 'react'
import styled from 'styled-components'

import PageContent from '../components/PageContent'

const Hero = styled.div`
    background-color: #14161D;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 4.6rem;

    .headline-1 {
        color: white;
        font-size: 2.7rem;
        line-height: 1.3;
        margin-bottom: 0;
        font-family: Georgia, serif;
    }

    .platforms {
        color: #789;
        margin-top: 0;
    }

`

const ButtonStart = styled.a`
    background-color: #2AB11E;
    color: white;
    display: inline-block;
    font-size: 100%;
    width: 300px;
    border-radius: 3px;
    padding: 0.625em 1.5em;
    margin-top: 3rem;
    margin-bottom: 3rem;
    letter-spacing: 0.075em;
    cursor: pointer;
`

const FeaturedFilms = styled.div`
    display: flex;
`

const PosterList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style: none;
`

const Landing = props => (
    <>
        <PageContent>
            <Hero>
                <h2 class="headline-1">
                    Track films you've watched.
                    <br />
                    Save those you want to see.
                    <br />
                    Tell your friends what's good.
                </h2>
                <ButtonStart>GET STARTED - IT'S FREE!</ButtonStart>
                <p class="platforms">The social network for film lovers. Also available on</p>
            </Hero>
            <FeaturedFilms>
                <PosterList>
                    <li>hi</li>
                    <li>hello</li>
                </PosterList>
            </FeaturedFilms>
        </PageContent>
    </>
)

export default Landing