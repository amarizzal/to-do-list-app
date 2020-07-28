import { css } from '@emotion/core';

export const button = ({ color }) => { 

    let colorText;

    switch (color) {
        case "red":
            colorText="rgb(248, 10, 10)"
            break;
        default:
            colorText="black"
    }

    return css`
        font-size: 1.8rem;
        font-family: 'Bungee' , sans-serif;
        color: ${colorText};
        padding: 16px;
        background-color: unset;
        outline: unset;
        border: unset;
        cursor: pointer;
    `
};