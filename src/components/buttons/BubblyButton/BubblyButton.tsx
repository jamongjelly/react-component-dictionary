import React from "react";

import { StyledButton } from "./BubblyButton.styles";
import { useBubblyButton } from "./useBubblyButton";

export const BubblyButton = () => {
    const { animate, handleClick } = useBubblyButton();

    return (
        <StyledButton animate={animate} onClick={handleClick}>
            BubblyButton
        </StyledButton>
    );
};
