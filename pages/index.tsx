import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <StyledHome>
            <Main>
                <div className="container">index page</div>
            </Main>
        </StyledHome>
    )
}

export default Home

const StyledHome = styled.div`
    background: linear-gradient(107.56deg, #2c2c2c 0%, #111111 100%);
    backdrop-filter: blur(27.5px);
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;

    .container {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .adaptive {
        display: none;
    }
    @media screen and (max-width: 768px) {
        .container {
            width: auto;
            padding: 0 20px;
        }

        .adaptive {
            font-size: 30px;
            display: block;
        }
        .adaptive span {
            font-size: 30px;
        }
    }
`

export const Header = styled.header`
    margin: 30px 0 50px;
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img {
        width: 209px;
        cursor: pointer;
    }
    .orange {
        margin-right: 50px;
        background: var(--orange);
        border: 1px solid transparent;
        &:hover {
            border: 1px solid var(--orange);
            background: transparent;
        }
    }
    .empty {
        border: 1px solid var(--orange);
        &:hover {
            background: var(--orange);
        }
    }
    button {
        transition: 0.2s all ease;
        cursor: pointer;
        border-radius: 21px;
        width: 250px;
        height: 42px;
    }
    .burger {
        cursor: pointer;
        display: none;
        width: 26px;
        height: 20px;
        flex-direction: column;
        justify-content: space-between;
        .line {
            width: 100%;
            background: #fff;
            height: 2px;
            &:nth-child(2) {
                background: var(--orange);
            }
        }
    }
    @media screen and (max-width: 768px) {
        button {
            display: none;
        }
        .burger {
            display: flex;
        }
    }
`

const Main = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    &::before {
        content: '';
        position: absolute;
        right: -129px;
        bottom: -100px;
        width: 318px;
        height: 318px;
        background-color: rgb(245, 110, 3, 0.05);
        border-radius: 50%;
    }

    .arrow {
        margin: 20px auto 0;
        cursor: pointer;
    }
    .cont {
        display: flex;
        align-items: center;
    }

    .icons {
        margin-right: 50px;
        display: grid;
        grid-template-columns: 25px;
        grid-template-rows: 25px 25px 25px 25px;
        row-gap: 24px;
        img {
            cursor: pointer;
        }
    }
    .right {
        margin-left: auto;
        max-width: 550px;
    }
    h2 {
        text-transform: uppercase;
        font-size: 42px;
        line-height: 165%;
        font-weight: 600;
        margin-bottom: 30px;
    }
    span {
        font-size: 42px;
        line-height: 165%;
        color: var(--orange);
    }
    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 25px;
        line-height: 165%;
    }
    a {
        background: var(--orange);
        text-transform: uppercase;
        padding: 13px 20px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: 0.2s all ease;
        &:hover {
            background: transparent;
            border: 1px solid var(--orange);
        }
    }
    @media screen and (max-width: 768px) {
        &::before {
            opacity: 0;
        }
        .cont {
            flex-direction: column;
            align-items: flex-start;
        }
        .cont img {
            width: 100%;
        }
        .arrow {
            display: none;
        }
        p {
            font-size: 16px;
        }
        a {
            position: relative;
            top: 25px;
        }
        .icons {
            display: none;
        }
        .right h2 {
            display: none;
        }
    }
`

