import IState from './GlobalContext';
import IActions from '../Interfaces';

export default (state: IState, action: IActions) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        episodes: action.payload,
      };
    default:
      return state;
  }
};
