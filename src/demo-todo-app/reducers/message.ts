const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (msg) => ({
  type: MESSAGE_SHOW,
  payload: msg,
});

export default (state: string = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    default:
      return state;
  }
};
