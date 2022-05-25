import { getAlbums } from '@/components/pages/CDPlayerPage/apis';
import { AlbumData } from '@/components/pages/CDPlayerPage/types';
import { useEffect, useState } from 'react';

const START_INDEX = 0;

export const useCDPlayer = () => {
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [currentCD, setCurrentCD] = useState(START_INDEX);

  const lastIndex = albums.length - 1;

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

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  return {
    albums,
    currentCD,
    onClickPrev,
    onClickNext,
    onClickMoveTo,
  };
};
