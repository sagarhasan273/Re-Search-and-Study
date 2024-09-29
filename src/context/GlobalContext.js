import { createContext, useContext, useMemo, useReducer } from 'react';

const initialState = [];

const tabReducer = (state, action) => {
  switch (action?.type) {
    case 'add':
      if (state.some((item) => item?.tabValue === action?.tabValue)) {
        return state;
      }
      return [...state, { ...action }];
    case 'delete':
      return state.filter((item) => item?.tabValue !== action?.deleteTab);
    default:
      throw new Error('Unknown action');
  }
};

const Context = createContext();

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(tabReducer, initialState);

  const value = useMemo(() => ({
    state,
    dispatch,
  }));

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default GlobalContext;

export const useGlobalContext = () => useContext(Context);
