import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { IEpisode } from '../components/Episodes';

export default interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
  fetchData?(): void;
  addFavorite?(episode: IEpisode): void;
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const GlobalContext = createContext<IState>(initialState);

export const GlobalProvider = (props: any): JSX.Element => {
  const url: string =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

  const [state, dispatch] = useReducer(Reducer, initialState);

  //Actions

  const fetchData = async () => {
    const res = await fetch(url);
    const {
      _embedded: { episodes },
    } = await res.json();
    dispatch({ type: 'FETCH_DATA', payload: episodes });
  };

  const addFavorite = (episode: IEpisode) => {
    const episodeInFav = state.favorites.includes(episode);
    if (episodeInFav) {
      dispatch({ type: 'DELETE_FAVORITE', payload: episode });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: episode });
    }
  };

  console.log(state);

  return (
    <GlobalContext.Provider
      value={{
        episodes: state.episodes,
        favorites: state.favorites,
        fetchData,
        addFavorite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
