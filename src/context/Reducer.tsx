import IState from './GlobalContext';

interface IActions {
  type: string;
  payload: any;
}

export default (state: IState, action: IActions) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        episodes: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
