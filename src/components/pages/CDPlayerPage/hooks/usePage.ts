import { useState } from 'react';

interface Props {
  numOfCDs: number;
}

const START_INDEX = 0;

export const useCDPlayer = ({ numOfCDs }: Props) => {
  const [currentCD, setCurrentCD] = useState(START_INDEX);

  const lastIndex = numOfCDs - 1;

  function onClickPrev() {
    setCurrentCD((prev) => {
      const prevPage = prev <= START_INDEX ? lastIndex : prev - 1;
      return prevPage;
    });
  }

  function onClickNext() {
    setCurrentCD((prev) => {
      const nextPage = prev >= lastIndex ? START_INDEX : prev + 1;
      return nextPage;
    });
  }

  function onClickMoveTo(index: number) {
    if (index < START_INDEX || lastIndex < index) return;
    setCurrentCD(index);
  }

  return {
    currentCD,
    onClickPrev,
    onClickNext,
    onClickMoveTo,
  };
};
