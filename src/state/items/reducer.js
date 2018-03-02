import { assoc, reduce } from 'ramda';

import { TYPES } from './actions';
import { itemResponseSchema } from '../schema/itemResponse';

const initialState = {
  error: false,
  fetching: false,
  items: {},
};

const addItems = (allItemsHash, newItemsList) => (
  reduce(
    (hash, itemResponse) => {
      const { items, tabId } = itemResponseSchema;
      return assoc(tabId(itemResponse), items(itemResponse), hash);
    },
    allItemsHash,
    newItemsList,
  )
);

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.ITEMS_REQUEST: {
      return { ...state, fetching: true };
    }

    case TYPES.ITEMS_REQUEST_SUCCESS: {
      return {
        ...state,
        fetching: false,
        items: addItems(state.items, payload.items),
      };
    }

    case TYPES.ITEMS_REQUEST_FAILURE: {
      return {
        ...state,
        fetching: false,
        error: true,
      }
    }

    default: return state;
  }
}
