import uuid from 'node-uuid';
import {removeItemByPropVal} from '../services/utils';

const initialState = {
  items: []
};

export default function createListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ITEM_SAVE':
      return Object.assign({}, {items: [...state.items, {id: uuid.v1(), name: action.name}]});
    case 'ITEM_REMOVE':
      return Object.assign({}, {items: removeItemByPropVal(state.items, 'id', action.id)});
    default:
      return state;
  }
}
