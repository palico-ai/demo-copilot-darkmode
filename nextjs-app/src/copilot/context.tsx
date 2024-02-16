import ThemeContext from "@/context/theme";
import { createProxyAPIAgentRequestHandler } from "@palico-ai/client-js";
import { PalicoContextProvider } from "@palico-ai/react";
import { useContext } from "react";

const proxyRequestHandler = createProxyAPIAgentRequestHandler(
  "http://localhost:8002",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXBsb3ltZW50SWQiOi0xLCJpYXQiOjE3MDgwNjM2NzN9.20lgTRkWD2ABdaJ7KO1R6HftIHKA-xng7gX0-itmirM"
);

type Props = {
  children: React.ReactNode;
};

export const CopilotProvider: React.FC<Props> = ({ children }) => {
  const { setIsDark } = useContext(ThemeContext);

  const tools = {
    "turn_on_dark_mode": async () => {
      setIsDark(true);
    },
    "turn_off_dark_mode": async () => {
      setIsDark(false);
    },
  }

  return (
    <PalicoContextProvider requestHandler={proxyRequestHandler} tools={tools}>
      {children}
    </PalicoContextProvider>
  );
};