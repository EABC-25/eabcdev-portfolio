import React, {
  type ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

export type Action =
  | { type: "OPEN_OVERLAY"; media: string }
  | { type: "CLOSE_OVERLAY"; media: null };

interface reducerState {
  overlayMedia: string | null;
  isOverlayOpen: boolean;
}

const initialReducerState: reducerState = {
  overlayMedia: null,
  isOverlayOpen: false,
};

interface mainGlobalContextPropsTypes {
  state: reducerState;
  dispatch: React.Dispatch<Action>;
}

const mainGlobalContext = createContext<mainGlobalContextPropsTypes>({
  state: initialReducerState,
  dispatch: () => {},
});

const reducer = (state: reducerState, action: Action): reducerState => {
  switch (action.type) {
    case "OPEN_OVERLAY":
      return { ...state, overlayMedia: action.media, isOverlayOpen: true };
    case "CLOSE_OVERLAY":
      return { ...state, overlayMedia: null, isOverlayOpen: false };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialReducerState);

  return (
    <mainGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </mainGlobalContext.Provider>
  );
};

export const useMainGlobalContext = () => useContext(mainGlobalContext);
