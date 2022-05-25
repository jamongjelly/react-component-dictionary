import {
  albumCover01,
  albumCover02,
  albumCover03,
  albumCover04,
  albumCover05,
  albumCover06,
} from '../assets';
import { AlbumData } from '../types';

export async function getAlbums() {
  return albumDataSet;
}

const albumDataSet: AlbumData[] = [
  {
    id: 1,
    imageUrl: albumCover01,
    videoUrl: 'https://www.youtube.com/watch?v=nM0xDI5R50E',
    background: ['#0272a4', '#f6a564'],
  },
  {
    id: 2,
    imageUrl: albumCover02,
    videoUrl: 'https://www.youtube.com/watch?v=Ub6IyAOTwr8',
    background: ['#b6bfc8', '#36595b'],
  },
  {
    id: 3,
    imageUrl: albumCover03,
    videoUrl: 'https://www.youtube.com/watch?v=TgOu00Mf3kI',
    background: ['#e58e82', '#6f569f'],
  },
  {
    id: 4,
    imageUrl: albumCover04,
    videoUrl: 'https://www.youtube.com/watch?v=4x7BrWTUmZo',
    background: ['#A18CD1', '#FBC2EB'],
  },
  {
    id: 5,
    imageUrl: albumCover05,
    videoUrl: 'https://www.youtube.com/watch?v=fdE5rhmcq6E',
    background: ['#BA5370', '#F4E2D8'],
  },
  {
    id: 6,
    imageUrl: albumCover06,
    videoUrl: 'https://www.youtube.com/watch?v=OM_QECPyIUg',
    background: ['#eef2f3', '#8e9eab'],
  },
];
