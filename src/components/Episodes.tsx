import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export const Episodes: React.FC = () => {
  const { episodes, fetchData }: any = useContext(GlobalContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {episodes.map((episode: IEpisode) => (
        <div className='card' key={episode.id}>
          <h3>{episode.name} </h3>
          <img src={episode.image && episode.image.medium} />
          <p>Season: {episode.season}</p>
          <p>Episode: {episode.number}</p>
          <p>Release date: {episode.airdate}</p>
          <p>
            Overview:{' '}
            {episode.summary && episode.summary.replace(/<\/?[^>]+>/g, '')}
          </p>
        </div>
      ))}
    </div>
  );
};
