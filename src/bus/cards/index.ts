import {useDispatch, useSelector} from '../../tools/hooks';

import {fetchCards, setNewCard} from './thunk/cards';

export const useCards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  console.log('RRWWcards', cards);

  return {
    cards,
    addCard: (dataCard: any) => dispatch(setNewCard(dataCard)),
    getAllCards: () => dispatch(fetchCards()),
  };
};
