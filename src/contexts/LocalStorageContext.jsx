import { createContext, useContext, useReducer } from "react";

// 1) Create a new Context component
const LocalStorageContext = createContext();

const initialState = {
  isLocalStorageChange: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        isLocalStorageChange: true,
      };
    default:
      throw new Error("Undefined action");
  }
}

function LocalStorageProvider({ children }) {
  const [{ isLocalStorageChange }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <LocalStorageContext.Provider value={{ isLocalStorageChange, dispatch }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

function useLocalStorage() {
  const context = useContext(LocalStorageContext);
  if (context === undefined) throw new Error("useLocalStorage is undefined ");
  return context;
}

export { LocalStorageProvider, useLocalStorage };
