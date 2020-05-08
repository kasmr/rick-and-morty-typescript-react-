import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export interface IEpisode {
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
  const { episodes, fetchData, addFavorite, favorites }: any = useContext(
    GlobalContext
  );

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <p className='favorites'>
        You have <span>{favorites.length}</span> Favorites
      </p>
      <div className='container'>
        {episodes.map((episode: IEpisode) => (
          <div className='card' key={episode.id}>
            <h5>{episode.name} </h5>
            <img
              src={episode.image && episode.image.medium}
              alt={episode.name}
            />
            <p>Season: {episode.season}</p>
            <p>Episode: {episode.number}</p>
            <p>Release date: {episode.airdate}</p>
            <p>
              Overview:{' '}
              {episode.summary &&
                episode.summary
                  .replace(/<\/?[^>]+>/g, '')
                  .slice(0, 60)
                  .concat('...')}
            </p>
            <button type='button' onClick={() => addFavorite(episode)}>
              {favorites.includes(episode)
                ? 'Delete from favorites'
                : 'Add to favorites'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
