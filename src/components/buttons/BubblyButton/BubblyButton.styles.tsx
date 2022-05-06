import styled, { css } from "styled-components";
import { darken } from "polished";

const FUSCHIA = "#ff0081";
const BUTTON_BG = FUSCHIA;
const BUTTON_TEXT_COLOR = "#fff";

/**
 * 특이사항
 *
 * * 그림자
 */
export const StyledButton = styled.button<{ animate: boolean }>`
    /* 초기화 */
    border: none;
    -webkit-appearance: none;
    appearance: none; // 네이티브 모양 없애기
    cursor: pointer;

    /* 색상 */
    background-color: ${BUTTON_BG};
    color: ${BUTTON_TEXT_COLOR};

    /* 그림자 */
    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);

    /* 박스 모델 */
    border-radius: 4px;

    /* 폰트 설정 */
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 1em;
    padding: 1em 2em;

    /* 배치 */
    position: relative;
    display: inline-block;

    /* 애니메이션 */
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;

    /* 가상 선택자 */
    &:focus {
        outline: 0;
    }

    &:active {
        /* 색상 */
        background-color: ${darken(0.05, BUTTON_BG)};

        /* 그림자 */
        box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);

        /* 변형 */
        transform: scale(0.9);
    }

    // 주요 코드
    &:before,
    &:after {
        /* 초기화 */
        content: "";

        /* 색상 */
        background-repeat: no-repeat;

        /* 박스 모델 */
        width: 140%;
        height: 100%;

        /* 배치 */
        z-index: -1000;
        position: absolute;
        left: -20%;
        display: block;

        /* 애니메이션 */
        transition: all ease-in-out 0.5s;
    }

    &:before {
        /* 색상 */
        background-image: radial-gradient(
                circle,
                ${BUTTON_BG} 20%,
                transparent 20%
            ),
            radial-gradient(
                circle,
                transparent 20%,
                ${BUTTON_BG} 20%,
                transparent 30%
            ),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(
                circle,
                transparent 10%,
                ${BUTTON_BG} 15%,
                transparent 20%
            ),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%);
        background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
            15% 15%, 10% 10%, 18% 18%;

        /* 배치 */
        top: -75%;
        display: none;
    }

    &:after {
        /* 색상 */
        background-image: radial-gradient(
                circle,
                ${BUTTON_BG} 20%,
                transparent 20%
            ),
            radial-gradient(circle, transparent 20%, transparent 20%),
            radial-gradient(
                circle,
                transparent 10%,
                ${BUTTON_BG} 15%,
                transparent 20%
            ),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%),
            radial-gradient(circle, ${BUTTON_BG} 20%, transparent 20%);
        background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
            20% 20%;

        /* 배치 */
        bottom: -75%;
        display: none;
    }

    ${({ animate }) =>
        animate &&
        css`
            &:before {
                display: block;
                animation: topBubbles ease-in-out 0.75s forwards;
            }

            &:after {
                display: block;
                animation: bottomBubbles ease-in-out 0.75s forwards;
            }
        `}

    @keyframes topBubbles {
        0% {
            background-position: 5% 90%, 10% 905%, 10% 90%, 15% 90%, 25% 90%,
                25% 90%, 40% 90%, 55% 90%, 70% 90%;
        }

        50% {
            background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%,
                22% 50%, 50% 50%, 65% 20%, 90% 30%;
        }

        100% {
            background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%,
                22% 40%, 50% 40%, 65% 10%, 90% 20%;

            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
        }
    }

    @keyframes bottomBubbles {
        0% {
            background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
                70% -10%, 70% 0%;
        }

        50% {
            background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
                95% 60%, 105% 0%;
        }

        100% {
            background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
                95% 70%, 110% 10%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
        }
    }
`;
