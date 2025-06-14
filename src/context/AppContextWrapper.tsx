import { GlobalContextProvider } from "./GlobalContext";

interface AppProps {
  children: React.ReactNode;
}

export default function AppContextWrapper({ children }: AppProps) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
