import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

export default interface IState {
  episodes: [];
  favorites: [];
  fetchData?(): void;
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
    console.log(episodes);
    dispatch({ type: 'FETCH_DATA', payload: episodes });
  };

  return (
    <GlobalContext.Provider
      value={{
        episodes: state.episodes,
        favorites: state.favorites,
        fetchData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
