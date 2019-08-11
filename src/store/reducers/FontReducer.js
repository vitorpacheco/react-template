const classPrefix = 'tamanho-letras-';

export const INITIAL_STATE = {
  fontSize: 1,
  layoutClassName: classPrefix + '1'
};

export const init = (initialState = INITIAL_STATE) => ({
  fontSize: initialState.fontSize,
  layoutClassName: initialState.layoutClassName
});

const FontReducer = (state, action) => {
  let fontSize;

  switch (action.type) {
    case 'increase':
      if (state.fontSize === 4) {
        return state;
      }

      fontSize = state.fontSize + 1;

      return {
        ...state,
        layoutClassName: classPrefix + fontSize,
        fontSize: fontSize
      };
    case 'decrease':
      if (state.fontSize === 1) {
        return state;
      }


      fontSize = state.fontSize - 1;

      return {
        ...state,
        layoutClassName: classPrefix + fontSize,
        fontSize: fontSize
      };
    case 'reset':
      return init(action.payload);
    default:
      return state;
  }
};

export default FontReducer;
