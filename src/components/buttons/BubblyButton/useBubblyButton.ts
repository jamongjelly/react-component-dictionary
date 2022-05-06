import { useState } from "react";

export const useBubblyButton = () => {
    const [animate, setAnimate] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setAnimate(true);

        setTimeout(() => {
            setAnimate(false);
        }, 700);
    };

    return { animate, handleClick };
};
