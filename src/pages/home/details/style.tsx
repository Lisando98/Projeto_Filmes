import styled from "styled-components";

export const Container = styled.div `
    padding: 4rem 0;

    h1 {
        margin: 3rem 0;

    }

    .movie-poster {
        width: 500px;
        border-radius: 1rem;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;

    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 0.3s;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release-date {
        opacity: 0.5;
    }

    button: hover {
        background: #5848c2;
    }

    .backdrop {
        object-fit: cover;
        z-index: -1;
        position: absolute;
        top: 0px;
        left: opx;
        filter: blur(3px);
        opacity: 0.6;
        width: 100%;
    }





`