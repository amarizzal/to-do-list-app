import { css } from "@emotion/core";

export const container = () => css`
    text-align: center;
    color: rgb(44, 38, 38);
    background-color: rgb(235, 221, 145);
    width: 70%;
    margin: 200px auto;
    height: 700px;
    border-radius: 4px;
    padding: 32px;
`;

export const frame = () => css`
    border: 2px solid rgb(255, 255, 255);
    height: 100%;
    display: flex;
    flex-direction: column;
`;