export function saveItem(name) {
  return (dispatch) =>
    dispatch({
      type: 'ITEM_SAVE',
      name
    });
}

export function removeItem(id) {
  return (dispatch) =>
    dispatch({
      type: 'ITEM_REMOVE',
      id,
    });
}
