import { createContext, useContext, useReducer } from "react";

// 1) Create a new Context component
const LocalStorageContext = createContext();

const initialState = {
  newUrlAdded: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        newUrlAdded: action.payload,
      };
    default:
      throw new Error("Undefined action");
  }
}

function LocalStorageProvider({ children }) {
  const [{ newUrlAdded }, dispatch] = useReducer(reducer, initialState);

  return (
    <LocalStorageContext.Provider value={{ newUrlAdded, dispatch }}>
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
